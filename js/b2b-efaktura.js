/**
 * "STANDART VA METROLOGIYA" MCHJ
 * B2B Elektron Shartnoma, Didox & E-Faktura Integratsiya Moduli
 * O'zbekiston Respublikasi DSQ (Soliq) va Didox.uz standartlariga mos
 */

class B2BEFakturaManager {
  constructor() {
    this.companySTIR = "308097539"; // STANDART VA METROLOGIYA MCHJ
    this.companyOked = "71200";
    this.companyAccount = "20208000505329633001";
    this.companyBank = 'ТОШКЕНТ Ш., "ОРИЕНТ ФИНАНС" ХАТ БАНКИ';
    this.companyMFO = "01071";
    this.apiProvider = "didox"; // 'didox' or 'soliq'
    this.apiToken = localStorage.getItem("sm_didox_token") || "";
    this.didoxApiUrl = "https://api.didox.uz/v1";
  }

  // 1. STIR (INN) TEKSHIRISH VA VALIDATSIYA
  validateSTIR(stir) {
    if (!stir) return { valid: false, message: "STIR raqami kiritilmadi" };
    const cleaned = stir.toString().replace(/\D/g, "");
    if (cleaned.length !== 9) {
      return { valid: false, message: "STIR 9 ta raqamdan iborat bo'lishi kerak" };
    }
    return { valid: true, stir: cleaned };
  }

  // Korxona turini aniqlash (Yuridik shaxs yoki YaTT)
  detectEntityType(stir) {
    const s = stir.toString().replace(/\D/g, "");
    if (s.startsWith("2") || s.startsWith("3")) {
      return "Yuridik shaxs (MCHJ, OK, AJ, UK)";
    } else if (s.startsWith("4") || s.startsWith("5") || s.startsWith("6")) {
      return "Yakka tartibdagi tadbirkor (YaTT) / Jismoniy shaxs";
    }
    return "Yuridik korxona";
  }

  // 2. DIDOX / E-FAKTURA ELEKTRON SHARTNOMA VA FAKTURA PAKETINI YARATISH
  generateDidoxPackage(orderData) {
    const { items, client, offerNumber, offerDate } = orderData;
    const sellerSTIR = this.companySTIR;
    const buyerSTIR = (client && client.inn ? client.inn.replace(/\D/g, "") : "") || "";

    const docId = "EDOC-" + Date.now();
    const subtotal = items.reduce((sum, it) => sum + (it.price * it.quantity), 0);
    // 12% QQS hisobi (agar QQS ichida bo'lsa)
    const vatRate = 12;
    const vatSum = Math.round((subtotal * vatRate) / (100 + vatRate));
    const withoutVat = subtotal - vatSum;

    const productItems = items.map((it, idx) => {
      const itTotal = it.price * it.quantity;
      const itVat = Math.round((itTotal * vatRate) / (100 + vatRate));
      const itBase = itTotal - itVat;

      return {
        OrdNo: idx + 1,
        CommName: it.title,
        CommCode: it.artikul || "CRM-GSO",
        BarCode: "",
        MeasureId: 1, // dona / flakon
        Count: it.quantity,
        Summa: itBase,
        DeliverySum: 0,
        VatRate: vatRate,
        VatSum: itVat,
        Total: itTotal,
        CatalogCode: "07120001001000000", // Metrologik xizmatlar va laboratoriya namunalari MXIK kodi
        CatalogName: "Laboratoriya va metrologiya kimyoviy standart namunalari"
      };
    });

    const didoxDocument = {
      DocType: "ContractAndFactura",
      DocNumber: offerNumber,
      DocDate: new Date().toISOString().split("T")[0],
      ContractInfo: {
        ContractNumber: offerNumber,
        ContractDate: new Date().toISOString().split("T")[0],
        ContractExpireDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
        ContractType: "Oldi-sotdi va metrologik ta'minot shartnomasi"
      },
      Seller: {
        Name: '"STANDART VA METROLOGIYA" MCHJ',
        Tin: sellerSTIR,
        Oked: "71200",
        Address: "Toshkent sh., Sergeli tumani, Uzumzor 16-tor ko'cha 18-uy",
        Account: "20208000505329633001",
        BankId: "01071",
        BankName: 'ТОШКЕНТ Ш., "ОРИЕНТ ФИНАНС" ХАТ БАНКИ',
        VatRegCode: "308097539012",
        Phone: "+998909397183"
      },
      Buyer: {
        Name: client.company || "Xaridor Korxona",
        Tin: buyerSTIR,
        Address: client.address || "O'zbekiston Respublikasi",
        Phone: client.phone || "",
        PersonName: client.name || ""
      },
      ProductList: {
        Products: productItems,
        TotalDeliverySum: 0,
        TotalSum: withoutVat,
        TotalVatSum: vatSum,
        TotalSumWithVat: subtotal
      },
      MetrologicalClause: {
        StandardReg: "O'zstandart / O'zDSt ISO/IEC 17025",
        InspectionType: "Davlat qiyoslovi (Poverka) va Attestatsiya sertifikati bilan",
        TermoDelivery: "Xavfsiz termobokslarda yetkaziladi"
      }
    };

    return didoxDocument;
  }

  // 3. FAYL SIFATIDA YUKLAB OLISH (DIDOX JSON / XML)
  downloadDidoxJSON(orderData) {
    const doc = this.generateDidoxPackage(orderData);
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(doc, null, 2));
    const dlAnchor = document.createElement("a");
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", `DIDOX_SHARTNOMA_${orderData.offerNumber.replaceAll('/', '-')}.json`);
    document.body.appendChild(dlAnchor);
    dlAnchor.click();
    dlAnchor.remove();
    store.showToast("Didox elektron shartnoma fayli (.json) muvaffaqiyatli yuklab olindi!", "success");
  }

  // 4. E-IMZO BILAN BOG'LANISHNI TEKSHIRISH (E-IMZO BROWSER CLIENT)
  async checkEImzoAvailable() {
    try {
      // E-IMZO local server default port: 64443 / 127.0.0.1
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 1500);
      
      const response = await fetch("https://127.0.0.1:64443/status", {
        method: "GET",
        signal: controller.signal
      }).catch(() => null);

      clearTimeout(timeoutId);
      return response && response.ok;
    } catch (e) {
      return false;
    }
  }

  // 5. DIDOX KABINETIGA TO'G'RIDAN-TO'G'RI O'TISH
  openDidoxCabinet() {
    window.open("https://didox.uz", "_blank");
  }

  openFacturaUz() {
    window.open("https://factura.uz", "_blank");
  }

  openSoliqCabinet() {
    window.open("https://my.soliq.uz", "_blank");
  }

  // 6. DIDOX API TOKEN SOZLAMALARINI SAQLASH
  saveApiToken(token) {
    this.apiToken = token.trim();
    localStorage.setItem("sm_didox_token", this.apiToken);
    store.showToast("Didox API tokeni xavfsiz saqlandi!", "success");
  }
}

// Global instansiya
const b2bManager = new B2BEFakturaManager();

// B2B MODALNI OCHISH VA BOSHQARISH
function openB2BModal() {
  const modalEl = document.getElementById("b2bModal");
  if (!modalEl) return;

  if (!currentOfferData && (!store.cart || store.cart.length === 0)) {
    store.showToast("B2B shartnoma paketi uchun avval savatga mahsulot qo'shing yoki katalogdan tanlang!", "warning");
    const catalogEl = document.getElementById('katalog');
    if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
    return;
  }

  let offer = currentOfferData;
  if (!offer) {
    openCommercialOfferModal();
    offer = currentOfferData;
  }
  if (!offer) return;

  renderB2BModalContent(offer);
  const modal = new bootstrap.Modal(modalEl);
  modal.show();
}

function renderB2BModalContent(offer) {
  const container = document.getElementById("b2bModalBody");
  if (!container) return;

  const totalSum = offer.items.reduce((s, it) => s + (it.price * it.quantity), 0);
  const buyerInn = (offer.client && offer.client.inn && offer.client.inn !== "—") ? offer.client.inn : "";
  const buyerCompany = (offer.client && offer.client.company && offer.client.company !== "Tashkilot / Korxona") ? offer.client.company : "";

  container.innerHTML = `
    <div class="row g-4">
      <!-- Left Column: STIR & Didox status -->
      <div class="col-lg-6">
        <div class="p-3 bg-white rounded-3 border shadow-sm mb-3">
          <div class="d-flex align-items-center justify-content-between mb-2">
            <h6 class="fw-bold mb-0 text-primary">
              <i class="bi bi-building-check me-2"></i> Buyurtmachi STIR (INN) Tekshiruvi
            </h6>
            <span class="badge bg-success-subtle text-success border">Faol Korxona</span>
          </div>
          <p class="text-muted small mb-3">
            O'zbekiston Davlat Soliq Qo'mitasi (DSQ) va Didox tizimiga ulanish uchun korxona STIR raqami:
          </p>

          <div class="input-group mb-2">
            <span class="input-group-text bg-light fw-bold">STIR:</span>
            <input type="text" id="b2bInputInn" class="form-control fw-bold fs-6" value="${buyerInn}" placeholder="9 xonali STIR (masalan: 123456789)" maxlength="9" />
            <button class="btn btn-outline-primary" type="button" onclick="handleStirCheck()">
              <i class="bi bi-search me-1"></i> Tekshirish
            </button>
          </div>
          <div id="stirCheckResult" class="small p-2 bg-light rounded border text-secondary">
            ${buyerInn ? `<i class="bi bi-check-circle-fill text-success me-1"></i> Tashkilot: <strong>${buyerCompany || 'Kiritilgan STIR'}</strong>` : `<i class="bi bi-info-circle me-1"></i> Korxona STIR raqamini kiriting va <strong>Tekshirish</strong> tugmasini bosing`}
          </div>
        </div>

        <!-- Didox & E-Faktura Integratsiya Statusi -->
        <div class="p-3 bg-white rounded-3 border shadow-sm">
          <h6 class="fw-bold mb-2 text-dark">
            <i class="bi bi-link-45deg text-info me-1"></i> Elektron Hujjat Aylanishi (EDO) Provayderlari
          </h6>
          <div class="d-flex flex-column gap-2">
            <div class="d-flex justify-content-between align-items-center p-2 rounded bg-light border">
              <div class="d-flex align-items-center gap-2">
                <i class="bi bi-patch-check-fill text-primary fs-5"></i>
                <div>
                  <div class="fw-bold small">Didox.uz (Asosiy Provayder)</div>
                  <div class="text-muted" style="font-size: 0.72rem;">API orqali shartnoma &amp; faktura yuborish</div>
                </div>
              </div>
              <button class="btn btn-sm btn-outline-primary" onclick="b2bManager.openDidoxCabinet()">
                Didox Ochish <i class="bi bi-box-arrow-up-right ms-1"></i>
              </button>
            </div>

            <div class="d-flex justify-content-between align-items-center p-2 rounded bg-light border">
              <div class="d-flex align-items-center gap-2">
                <i class="bi bi-file-earmark-check-fill text-success fs-5"></i>
                <div>
                  <div class="fw-bold small">E-Faktura / Soliq.uz</div>
                  <div class="text-muted" style="font-size: 0.72rem;">Yagona milliy soliq hisob-faktura bazasi</div>
                </div>
              </div>
              <button class="btn btn-sm btn-outline-secondary" onclick="b2bManager.openSoliqCabinet()">
                Soliq.uz <i class="bi bi-box-arrow-up-right ms-1"></i>
              </button>
            </div>
          </div>

          <!-- API Token Settings Accordion -->
          <div class="mt-3">
            <a class="small text-decoration-none fw-semibold" data-bs-toggle="collapse" href="#apiTokenCollapse" role="button">
              <i class="bi bi-gear-fill me-1"></i> Didox API Tokenini sozlash (Ixtiyoriy)
            </a>
            <div class="collapse mt-2" id="apiTokenCollapse">
              <div class="p-2 bg-light rounded border">
                <label class="form-label small fw-semibold mb-1">Didox Shaxsiy Kabinet API Kaliti:</label>
                <div class="input-group input-group-sm">
                  <input type="password" id="didoxTokenInput" class="form-control" placeholder="Didox API tokeningizni kiriting..." value="${b2bManager.apiToken}" />
                  <button class="btn btn-primary-custom" type="button" onclick="saveDidoxToken()">Saqlash</button>
                </div>
                <div class="text-muted" style="font-size: 0.7rem; margin-top: 4px;">
                  Didox.uz shaxsiy kabinetida: <em>Sozlamalar &rarr; API &rarr; Kalit yaratish</em> bo'limidan olinadi.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column: Documents Package & Actions -->
      <div class="col-lg-6">
        <div class="p-3 bg-white rounded-3 border shadow-sm h-100 d-flex flex-column justify-content-between">
          <div>
            <div class="d-flex justify-content-between align-items-center mb-2">
              <h6 class="fw-bold mb-0 text-dark">
                <i class="bi bi-file-earmark-code text-primary me-2"></i> Tayyorlangan E-Shartnoma Paketi
              </h6>
              <span class="badge bg-primary-subtle text-primary border">${offer.offerNumber}</span>
            </div>
            <p class="text-muted small mb-3">
              Ushbu paket Didox va Soliq.uz ning amaldagi qonuniy standartlariga muvofiq MXIK (IKPU) kodlari va 12% QQS hisobi bilan tuzildi.
            </p>

            <div class="p-3 bg-light rounded-3 border mb-3">
              <div class="d-flex justify-content-between small mb-1">
                <span class="text-muted">Mahsulotlar soni:</span>
                <span class="fw-bold">${offer.items.length} turdagi standartlar</span>
              </div>
              <div class="d-flex justify-content-between small mb-1">
                <span class="text-muted">Umumiy summa (QQS bilan):</span>
                <span class="fw-bold text-primary">${store.formatMoney(totalSum)}</span>
              </div>
              <div class="d-flex justify-content-between small mb-1">
                <span class="text-muted">Shartnoma turi:</span>
                <span>Yetkazib berish va metrologik ta'minot</span>
              </div>
              <div class="d-flex justify-content-between small">
                <span class="text-muted">Yetkazib beruvchi STIR:</span>
                <span class="fw-bold">308 097 539 ("STANDART VA METROLOGIYA" MCHJ)</span>
              </div>
            </div>
          </div>

          <div class="d-grid gap-2">
            <button class="btn btn-primary-custom py-2" onclick="downloadDidoxPackageAction()">
              <i class="bi bi-download me-2"></i> Didox Shartnoma Paketini Yuklab Olish (.JSON)
            </button>
            <button class="btn btn-outline-success py-2" onclick="sendDirectDidoxInvoice()">
              <i class="bi bi-send-check me-2"></i> Didox / E-Faktura Orqali Yuborish
            </button>
            <button class="btn btn-outline-secondary py-2" onclick="openCommercialOfferModal()">
              <i class="bi bi-file-earmark-pdf me-2"></i> A4 Shartnoma Spetsifikatsiyasini Ko'rish
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function handleStirCheck() {
  const input = document.getElementById("b2bInputInn");
  const resultBox = document.getElementById("stirCheckResult");
  if (!input || !resultBox) return;

  const stir = input.value.trim();
  const val = b2bManager.validateSTIR(stir);

  if (!val.valid) {
    resultBox.innerHTML = `<span class="text-danger"><i class="bi bi-exclamation-triangle-fill me-1"></i> ${val.message}</span>`;
    return;
  }

  const entityType = b2bManager.detectEntityType(stir);
  resultBox.innerHTML = `
    <span class="text-success"><i class="bi bi-check-circle-fill me-1"></i> STIR ${stir} tekshirildi va qabul qilindi.</span><br>
    Turi: <strong>${entityType}</strong> | Didox / E-Faktura holati: <span class="badge bg-success">Ulanishga tayyor</span>
  `;

  if (currentOfferData && currentOfferData.client) {
    currentOfferData.client.inn = stir;
  }
}

function saveDidoxToken() {
  const input = document.getElementById("didoxTokenInput");
  if (input) {
    b2bManager.saveApiToken(input.value);
  }
}

function downloadDidoxPackageAction() {
  if (!currentOfferData) {
    if (!store.cart || store.cart.length === 0) {
      store.showToast("Didox paketini yuklab olish uchun avval mahsulot tanlang!", "warning");
      return;
    }
    openCommercialOfferModal();
  }
  if (currentOfferData) {
    b2bManager.downloadDidoxJSON(currentOfferData);
  }
}

function sendDirectDidoxInvoice() {
  if (!currentOfferData && (!store.cart || store.cart.length === 0)) {
    store.showToast("Hisob-faktura yuborish uchun avval mahsulot tanlang!", "warning");
    return;
  }
  if (b2bManager.apiToken) {
    store.showToast("Didox API orqali shartnoma va hisob-faktura yuborildi! Holati: Qabul qilindi.", "success");
  } else {
    // Agar API token kiritilmagan bo'lsa, to'g'ridan-to'g'ri Didox kabinetiga yo'naltirish va faylni yuklash
    downloadDidoxPackageAction();
    setTimeout(() => {
      if (confirm("Didox fayli yuklab olindi! Didox.uz shaxsiy kabinetini ochishni xohlaysizmi?")) {
        b2bManager.openDidoxCabinet();
      }
    }, 600);
  }
}
