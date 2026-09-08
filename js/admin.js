/**
 * "STANDART VA METROLOGIYA" MCHJ
 * Admin Panel & Analytics Logic (Mahsulotlar, Ombor tahlili, Savdo ko'rsatkichlari)
 */

class AdminManager {
  constructor() {
    this.currentTab = 'dashboard';
    this.searchQuery = '';
    this.selectedCategory = 'all';
    this.selectedStockFilter = 'all';
    this.currentPage = 1;
    this.pageSize = 12;
    this.editingProductId = null;
    this.tempImageDataUrl = null;
    this.orders = this.loadOrders();
  }

  init() {
    this.checkAuth();
    this.setupEventListeners();
    this.renderMetrics();
    this.renderProductsTable();
    this.renderWarehouseAnalytics();
    this.renderSalesAnalytics();
    this.setupTheme();
  }

  // 1. AUTHENTICATION (XAVFSIZLIK)
  checkAuth() {
    const isAuth = sessionStorage.getItem('sm_admin_logged');
    const authModalEl = document.getElementById('adminAuthModal');
    if (!isAuth && authModalEl) {
      const modal = new bootstrap.Modal(authModalEl, { backdrop: 'static', keyboard: false });
      modal.show();
    }
  }

  handleLogin(password) {
    // Standart admin paroli: admin2026 yoki standart
    if (password === 'admin2026' || password === 'admin' || password === '1234') {
      sessionStorage.setItem('sm_admin_logged', 'true');
      const authModalEl = document.getElementById('adminAuthModal');
      const modal = bootstrap.Modal.getInstance(authModalEl);
      if (modal) modal.hide();
      this.showToast("Admin panelga muvaffaqiyatli kirdingiz!", "success");
      return true;
    } else {
      this.showToast("Parol noto'g'ri! Iltimos qaytadan urinib ko'ring.", "danger");
      return false;
    }
  }

  logout() {
    sessionStorage.removeItem('sm_admin_logged');
    window.location.reload();
  }

  // 2. BUYURTMALARNI YUKLASH VA TAYYORLASH
  loadOrders() {
    try {
      const saved = localStorage.getItem('sm_orders');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.warn("Could not load orders:", e);
    }

    // Namunaviy rasmiy metrologik buyurtmalar (Agar saytda hali yangi buyurtma qilinmagan bo'lsa)
    return [
      {
        id: "TT-2026/09-842",
        date: "2026-09-07T11:20:00.000Z",
        dateFormatted: "07.09.2026 y.",
        customer: {
          name: "Karimov Sherzod",
          company: "Navoiy KMK Sinov Markazi",
          inn: "200123456",
          phone: "+998 93 120-45-67",
          address: "Navoiy shahri, Navoiy ko'chasi 12-uy"
        },
        customerType: "Yuridik shaxs",
        items: [
          { title: "Yuqori aniqlikdagi raqamli manometr (Fluke CPC-800)", price: 9800000, quantity: 2 },
          { title: "pH 4.01 Kalibrlash bufer eritmasi (500 ml)", price: 195000, quantity: 5 }
        ],
        totalSum: 20575000,
        totalSumFormatted: "20 575 000 so'm",
        payType: "Hisob-raqam (Shartnoma)",
        status: "Yetkazildi"
      },
      {
        id: "TT-2026/09-719",
        date: "2026-09-06T14:45:00.000Z",
        dateFormatted: "06.09.2026 y.",
        customer: {
          name: "Azizova Nigora",
          company: "O'zbekneftgaz Laboratoriya Majmuasi",
          inn: "302987654",
          phone: "+998 90 852-14-78",
          address: "Buxoro viloyati, Qorako'l tumani"
        },
        customerType: "Yuridik shaxs",
        items: [
          { title: "Og'ir metallar aralashmasi standart namunasi (GSO 7240-96)", price: 850000, quantity: 4 },
          { title: "Elektr o'tkazuvchanlik bufer eritmasi (1413 µS/cm)", price: 240000, quantity: 6 }
        ],
        totalSum: 4840000,
        totalSumFormatted: "4 840 000 so'm",
        payType: "Hisob-raqam (Shartnoma)",
        status: "Didox Faktura Yuborildi"
      },
      {
        id: "TT-2026/09-531",
        date: "2026-09-05T09:15:00.000Z",
        dateFormatted: "05.09.2026 y.",
        customer: {
          name: "Rustam Mahmudov",
          company: "Farm Sifat Standart MCHJ",
          inn: "305112233",
          phone: "+998 97 741-25-89",
          address: "Toshkent sh., Yunusobod tumani"
        },
        customerType: "Yuridik shaxs",
        items: [
          { title: "Laboratoriya analitik elektron tarozisi (0.0001g)", price: 28500000, quantity: 1 }
        ],
        totalSum: 28500000,
        totalSumFormatted: "28 500 000 so'm",
        payType: "Hisob-raqam (Shartnoma)",
        status: "Tasdiqlandi"
      }
    ];
  }

  saveOrders() {
    try {
      localStorage.setItem('sm_orders', JSON.stringify(this.orders));
    } catch (e) {
      console.error("Error saving orders:", e);
    }
  }

  // 3. DASHBOARD UMUMIY METRIKALARINI HISOBLASH
  renderMetrics() {
    const totalProducts = PRODUCTS_DATABASE.length;
    
    // Ombordagi taxminiy umumiy summa
    const totalInventoryValue = PRODUCTS_DATABASE.reduce((sum, p) => {
      const pPrice = typeof p.price === 'number' ? p.price : 0;
      return sum + (pPrice * 5); // O'rtacha 5 dona ombor zaxirasi asosida
    }, 0);

    const inStockCount = PRODUCTS_DATABASE.filter(p => p.inStock).length;
    const outOfStockCount = totalProducts - inStockCount;

    // Jami buyurtmalar va aylanma
    const totalOrdersCount = this.orders.length;
    const totalSalesVolume = this.orders.reduce((sum, o) => sum + (o.totalSum || 0), 0);

    // Dom elementlarini yangilash
    document.getElementById('metricTotalProducts').textContent = totalProducts;
    document.getElementById('metricInventoryValue').textContent = this.formatMoney(totalInventoryValue);
    document.getElementById('metricTotalOrders').textContent = totalOrdersCount;
    document.getElementById('metricTotalSales').textContent = this.formatMoney(totalSalesVolume);
  }

  // 4. MAHSULOTLAR RO'YXATINI JADVALDA CHIQARISH
  renderProductsTable() {
    const tableBody = document.getElementById('adminProductsTableBody');
    const paginationContainer = document.getElementById('adminPagination');
    const countInfo = document.getElementById('tableCountInfo');
    if (!tableBody) return;

    let list = [...PRODUCTS_DATABASE];

    // Qidiruv
    if (this.searchQuery.trim() !== '') {
      const q = this.searchQuery.toLowerCase().trim();
      list = list.filter(p => 
        p.title.toLowerCase().includes(q) || 
        p.artikul.toLowerCase().includes(q) ||
        (p.categoryName && p.categoryName.toLowerCase().includes(q))
      );
    }

    // Kategoriya filtri
    if (this.selectedCategory !== 'all') {
      list = list.filter(p => p.category === this.selectedCategory);
    }

    // Ombor zaxira filtri
    if (this.selectedStockFilter === 'instock') {
      list = list.filter(p => p.inStock);
    } else if (this.selectedStockFilter === 'outstock') {
      list = list.filter(p => !p.inStock);
    }

    const totalFound = list.length;
    const totalPages = Math.ceil(totalFound / this.pageSize) || 1;
    this.currentPage = Math.min(this.currentPage, totalPages);

    const startIdx = (this.currentPage - 1) * this.pageSize;
    const pageItems = list.slice(startIdx, startIdx + this.pageSize);

    if (countInfo) {
      countInfo.textContent = `Jami ${totalFound} tadan ${startIdx + 1}-${Math.min(startIdx + this.pageSize, totalFound)} ko'rsatilmoqda`;
    }

    if (pageItems.length === 0) {
      tableBody.innerHTML = `
        <tr>
          <td colspan="7" class="text-center py-5 text-muted">
            <i class="bi bi-search fs-2 mb-2 d-block"></i>
            Mahsulot topilmadi
          </td>
        </tr>
      `;
      if (paginationContainer) paginationContainer.innerHTML = '';
      return;
    }

    tableBody.innerHTML = pageItems.map((p, idx) => `
      <tr>
        <td class="text-center text-muted fw-bold">${startIdx + idx + 1}</td>
        <td>
          <img src="${p.image}" alt="${p.title}" class="product-thumb-sm" onerror="this.src='assets/images/precision_manometer.jpg'" />
        </td>
        <td>
          <div class="product-title-cell" title="${p.title}">${p.title}</div>
          <div class="product-sub-code"><span class="badge bg-light text-dark border me-1">${p.artikul}</span> ID: ${p.id}</div>
        </td>
        <td>
          <span class="badge bg-primary-subtle text-primary border">${p.categoryName || p.category}</span>
        </td>
        <td class="fw-bold text-dark text-nowrap">
          ${p.price > 0 ? this.formatMoney(p.price) : '<span class="text-muted">Kelishuv</span>'}
        </td>
        <td>
          <button class="btn btn-sm ${p.inStock ? 'badge-stock-active' : 'badge-stock-out'} border-0" onclick="admin.toggleStock('${p.id}')">
            <i class="bi ${p.inStock ? 'bi-check-circle-fill' : 'bi-dash-circle-fill'} me-1"></i>
            ${p.inStock ? 'Mavjud' : 'Tugagan'}
          </button>
        </td>
        <td class="text-end text-nowrap">
          <button class="btn btn-sm btn-outline-primary me-1" onclick="admin.openEditModal('${p.id}')" title="Tahrirlash va Rasm yangilash">
            <i class="bi bi-pencil-square"></i>
          </button>
          <button class="btn btn-sm btn-outline-danger" onclick="admin.deleteProduct('${p.id}')" title="O'chirish">
            <i class="bi bi-trash3"></i>
          </button>
        </td>
      </tr>
    `).join('');

    // Pagination
    if (paginationContainer) {
      this.renderPagination(paginationContainer, totalPages);
    }
  }

  renderPagination(container, totalPages) {
    let html = `
      <li class="page-item ${this.currentPage === 1 ? 'disabled' : ''}">
        <a class="page-link" href="javascript:void(0)" onclick="admin.setPage(${this.currentPage - 1})">&laquo;</a>
      </li>
    `;

    const maxVisible = 5;
    let startPage = Math.max(1, this.currentPage - 2);
    let endPage = Math.min(totalPages, startPage + maxVisible - 1);
    if (endPage - startPage < maxVisible - 1) {
      startPage = Math.max(1, endPage - maxVisible + 1);
    }

    for (let p = startPage; p <= endPage; p++) {
      html += `
        <li class="page-item ${p === this.currentPage ? 'active' : ''}">
          <a class="page-link" href="javascript:void(0)" onclick="admin.setPage(${p})">${p}</a>
        </li>
      `;
    }

    html += `
      <li class="page-item ${this.currentPage === totalPages ? 'disabled' : ''}">
        <a class="page-link" href="javascript:void(0)" onclick="admin.setPage(${this.currentPage + 1})">&raquo;</a>
      </li>
    `;

    container.innerHTML = html;
  }

  setPage(page) {
    this.currentPage = page;
    this.renderProductsTable();
  }

  // 5. TAHRIRLASH VA RASM YANGILASH MODALI
  openEditModal(productId = null) {
    this.editingProductId = productId;
    this.tempImageDataUrl = null;

    const modalTitle = document.getElementById('productModalTitle');
    const imgPreview = document.getElementById('modalImagePreview');
    const imageInput = document.getElementById('productImageUrl');

    if (productId) {
      const p = PRODUCTS_DATABASE.find(x => x.id === productId);
      if (!p) return;

      modalTitle.textContent = "Mahsulotni Tahrirlash & Rasm Yangilash";
      document.getElementById('productIdInput').value = p.id;
      document.getElementById('productTitleInput').value = p.title;
      document.getElementById('productArtikulInput').value = p.artikul;
      document.getElementById('productCategorySelect').value = p.category;
      document.getElementById('productPriceInput').value = p.price;
      document.getElementById('productInStockSelect').value = p.inStock ? "true" : "false";
      document.getElementById('productStockCountInput').value = p.stockCount || "Omborda mavjud";
      document.getElementById('productBadgeInput').value = p.badge || "";
      document.getElementById('productShortDescInput').value = p.shortDesc || "";

      imageInput.value = p.image || "";
      imgPreview.src = p.image || "assets/images/precision_manometer.jpg";
    } else {
      modalTitle.textContent = "Yangi Mahsulot Qo'shish";
      document.getElementById('productIdInput').value = "prod-" + Date.now();
      document.getElementById('productTitleInput').value = "";
      document.getElementById('productArtikulInput').value = "GSO-" + Math.floor(1000 + Math.random() * 9000);
      document.getElementById('productCategorySelect').value = "standart-namunalar";
      document.getElementById('productPriceInput').value = 250000;
      document.getElementById('productInStockSelect').value = "true";
      document.getElementById('productStockCountInput').value = "Omborda 10 dona mavjud";
      document.getElementById('productBadgeInput').value = "Yangi";
      document.getElementById('productShortDescInput').value = "";

      imageInput.value = "assets/images/standard_samples.jpg";
      imgPreview.src = "assets/images/standard_samples.jpg";
    }

    const modal = new bootstrap.Modal(document.getElementById('productEditModal'));
    modal.show();
  }

  handleImageFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      this.showToast("Iltimos, rasm fayli tanlang!", "warning");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      this.tempImageDataUrl = e.target.result;
      document.getElementById('modalImagePreview').src = this.tempImageDataUrl;
      document.getElementById('productImageUrl').value = this.tempImageDataUrl;
      this.showToast("Rasm muvaffaqiyatli tanlandi! Saqlash tugmasini bosing.", "info");
    };
    reader.readAsDataURL(file);
  }

  saveProductForm() {
    const id = document.getElementById('productIdInput').value.trim();
    const title = document.getElementById('productTitleInput').value.trim();
    const artikul = document.getElementById('productArtikulInput').value.trim();
    const category = document.getElementById('productCategorySelect').value;
    const price = parseFloat(document.getElementById('productPriceInput').value) || 0;
    const inStock = document.getElementById('productInStockSelect').value === "true";
    const stockCount = document.getElementById('productStockCountInput').value.trim();
    const badge = document.getElementById('productBadgeInput').value.trim() || "Standart";
    const shortDesc = document.getElementById('productShortDescInput').value.trim();
    const image = document.getElementById('productImageUrl').value.trim() || "assets/images/standard_samples.jpg";

    if (!title || !artikul) {
      this.showToast("Mahsulot nomi va artikuli to'ldirilishi shart!", "danger");
      return;
    }

    const catObj = CATEGORIES.find(c => c.id === category);
    const categoryName = catObj ? catObj.name : "Standartlar";

    if (this.editingProductId) {
      // Tahrirlash
      const index = PRODUCTS_DATABASE.findIndex(p => p.id === this.editingProductId);
      if (index > -1) {
        PRODUCTS_DATABASE[index] = {
          ...PRODUCTS_DATABASE[index],
          title,
          artikul,
          category,
          categoryName,
          price,
          priceFormatted: price > 0 ? this.formatMoney(price) : "Buyurtma asosida",
          inStock,
          stockCount,
          badge,
          shortDesc,
          image: this.tempImageDataUrl || image
        };
        this.showToast(`"${title.substring(0, 25)}..." muvaffaqiyatli yangilandi!`, "success");
      }
    } else {
      // Yangi qo'shish
      const newProduct = {
        id,
        title,
        artikul,
        category,
        categoryName,
        badge,
        badgeType: "primary",
        price,
        priceFormatted: price > 0 ? this.formatMoney(price) : "Buyurtma asosida",
        inStock,
        stockCount,
        image: this.tempImageDataUrl || image,
        shortDesc: shortDesc || `${title}. Rasmiy davlat standarti va qiyoslash pasporti bilan.`,
        specs: {
          "Artikul": artikul,
          "Kategoriya": categoryName,
          "Sertifikat": "Metrologik attestatsiya pasporti bilan",
          "Kafolat": "24 oy"
        },
        applications: ["Metrologiya va standartlashtirish laboratoriyalari"],
        features: ["Davlat reestridan o'tgan"]
      };
      PRODUCTS_DATABASE.unshift(newProduct);
      this.showToast(`Yangi mahsulot qo'shildi!`, "success");
    }

    // Saqlash va yangilash
    saveProductsDatabase(PRODUCTS_DATABASE);
    this.renderMetrics();
    this.renderProductsTable();
    this.renderWarehouseAnalytics();

    const modalEl = document.getElementById('productEditModal');
    const modal = bootstrap.Modal.getInstance(modalEl);
    if (modal) modal.hide();
  }

  deleteProduct(productId) {
    const p = PRODUCTS_DATABASE.find(x => x.id === productId);
    if (!p) return;

    if (confirm(`Haqiqatdan ham "${p.title}" mahsulotini o'chirmoqchimisiz?`)) {
      PRODUCTS_DATABASE = PRODUCTS_DATABASE.filter(x => x.id !== productId);
      saveProductsDatabase(PRODUCTS_DATABASE);
      this.renderMetrics();
      this.renderProductsTable();
      this.renderWarehouseAnalytics();
      this.showToast("Mahsulot muvaffaqiyatli o'chirildi", "info");
    }
  }

  toggleStock(productId) {
    const p = PRODUCTS_DATABASE.find(x => x.id === productId);
    if (!p) return;
    p.inStock = !p.inStock;
    p.stockCount = p.inStock ? "Omborda mavjud" : "Zaxira tugagan";
    saveProductsDatabase(PRODUCTS_DATABASE);
    this.renderProductsTable();
    this.renderWarehouseAnalytics();
    this.showToast(`"${p.title.substring(0, 20)}..." zaxira holati o'zgartirildi`, "info");
  }

  // 6. OMBOR TAHLILI (WAREHOUSE ANALYTICS)
  renderWarehouseAnalytics() {
    const container = document.getElementById('warehouseCategoryStats');
    const lowStockContainer = document.getElementById('warehouseLowStockList');
    if (!container) return;

    // Kategoriyalar bo'yicha hisoblash
    const catCounts = {};
    CATEGORIES.filter(c => c.id !== 'all').forEach(c => {
      catCounts[c.id] = { name: c.name, count: 0, totalValue: 0, outOfStock: 0 };
    });

    let totalVal = 0;
    PRODUCTS_DATABASE.forEach(p => {
      const c = p.category;
      if (catCounts[c]) {
        catCounts[c].count++;
        catCounts[c].totalValue += (p.price || 0) * 5;
        if (!p.inStock) catCounts[c].outOfStock++;
      }
      totalVal += (p.price || 0) * 5;
    });

    container.innerHTML = Object.entries(catCounts).map(([catId, data]) => {
      const pct = Math.round((data.count / PRODUCTS_DATABASE.length) * 100) || 0;
      return `
        <div class="p-3 bg-light rounded-3 border mb-3">
          <div class="d-flex justify-content-between align-items-center mb-1">
            <span class="fw-bold">${data.name}</span>
            <span class="badge bg-primary">${data.count} xil mahsulot (${pct}%)</span>
          </div>
          <div class="progress mb-2" style="height: 6px;">
            <div class="progress-bar bg-primary" role="progressbar" style="width: ${pct}%"></div>
          </div>
          <div class="d-flex justify-content-between small text-muted">
            <span>Zaxira summasi: <strong>${this.formatMoney(data.totalValue)}</strong></span>
            <span>Tugaganlar: <strong class="${data.outOfStock > 0 ? 'text-danger' : 'text-success'}">${data.outOfStock} ta</strong></span>
          </div>
        </div>
      `;
    }).join('');

    // Kam qolgan yoki tugagan mahsulotlar
    const lowStockItems = PRODUCTS_DATABASE.filter(p => !p.inStock || (p.stockCount && p.stockCount.includes("1 dona"))).slice(0, 8);
    if (lowStockContainer) {
      if (lowStockItems.length === 0) {
        lowStockContainer.innerHTML = `<div class="p-3 text-center text-success small"><i class="bi bi-check-circle me-1"></i> Barcha mahsulotlar yetarli zaxirada mavjud!</div>`;
      } else {
        lowStockContainer.innerHTML = lowStockItems.map(p => `
          <div class="d-flex justify-content-between align-items-center p-2 border-bottom">
            <div class="d-flex align-items-center gap-2">
              <img src="${p.image}" class="rounded" style="width: 32px; height: 32px; object-fit: cover;" />
              <div>
                <div class="small fw-semibold text-truncate" style="max-width: 280px;">${p.title}</div>
                <div class="text-muted" style="font-size: 0.72rem;">${p.artikul} • ${p.categoryName}</div>
              </div>
            </div>
            <button class="btn btn-sm btn-outline-success py-0 px-2" onclick="admin.toggleStock('${p.id}')" style="font-size: 0.75rem;">
              <i class="bi bi-plus"></i> Zaxiraga qo'shish
            </button>
          </div>
        `).join('');
      }
    }
  }

  // 7. SAVDO KO'RSATKICHLARI VA BUYURTMALAR (SALES ANALYTICS)
  renderSalesAnalytics() {
    const ordersTable = document.getElementById('adminOrdersTableBody');
    const chartContainer = document.getElementById('salesChartContainer');

    if (ordersTable) {
      ordersTable.innerHTML = this.orders.map(o => `
        <tr>
          <td class="fw-bold">${o.id}</td>
          <td>${o.dateFormatted}</td>
          <td>
            <div class="fw-semibold">${o.customer.name}</div>
            <div class="small text-muted">${o.customer.company || "Xususiy"} • ${o.customer.phone}</div>
          </td>
          <td>${o.items ? o.items.length : 1} turdagi tovar</td>
          <td class="fw-bold text-primary">${o.totalSumFormatted}</td>
          <td>
            <span class="badge ${o.status === 'Yetkazildi' ? 'bg-success' : (o.status === 'Didox Faktura Yuborildi' ? 'bg-info' : 'bg-warning')}">
              ${o.status}
            </span>
          </td>
          <td class="text-end">
            <select class="form-select form-select-sm d-inline-block w-auto" onchange="admin.updateOrderStatus('${o.id}', this.value)">
              <option value="Yangi" ${o.status === 'Yangi' ? 'selected' : ''}>Yangi</option>
              <option value="Tasdiqlandi" ${o.status === 'Tasdiqlandi' ? 'selected' : ''}>Tasdiqlandi</option>
              <option value="Didox Faktura Yuborildi" ${o.status === 'Didox Faktura Yuborildi' ? 'selected' : ''}>Didox Faktura</option>
              <option value="Yetkazildi" ${o.status === 'Yetkazildi' ? 'selected' : ''}>Yetkazildi</option>
            </select>
          </td>
        </tr>
      `).join('');
    }

    if (chartContainer) {
      this.renderSvgSalesChart(chartContainer);
    }
  }

  renderSvgSalesChart(container) {
    const monthlyData = [
      { month: "Aprel", sum: 48500000 },
      { month: "May", sum: 62000000 },
      { month: "Iyun", sum: 78400000 },
      { month: "Iyul", sum: 59200000 },
      { month: "Avgust", sum: 88900000 },
      { month: "Sentyabr", sum: 96400000 }
    ];

    const maxVal = Math.max(...monthlyData.map(d => d.sum));
    const chartHeight = 180;
    const barWidth = 44;

    const bars = monthlyData.map((d, i) => {
      const height = Math.round((d.sum / maxVal) * chartHeight);
      const y = chartHeight - height + 20;
      const x = 35 + i * 82;

      return `
        <g class="chart-bar-group" data-title="${d.month}: ${this.formatMoney(d.sum)}">
          <rect x="${x}" y="${y}" width="${barWidth}" height="${height}" rx="6" fill="url(#barGradient)" />
          <text x="${x + barWidth/2}" y="${y - 8}" text-anchor="middle" font-size="10" font-weight="700" fill="#0284c7">
            ${Math.round(d.sum / 1000000)} mln
          </text>
          <text x="${x + barWidth/2}" y="${chartHeight + 38}" text-anchor="middle" font-size="11" font-weight="600" fill="#64748b">
            ${d.month}
          </text>
        </g>
      `;
    }).join('');

    container.innerHTML = `
      <svg width="100%" height="240" viewBox="0 0 540 240" style="overflow: visible;">
        <defs>
          <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#0284c7" />
            <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.75" />
          </linearGradient>
        </defs>
        <!-- Grid lines -->
        <line x1="20" y1="20" x2="520" y2="20" stroke="#e2e8f0" stroke-dasharray="3 3" />
        <line x1="20" y1="110" x2="520" y2="110" stroke="#e2e8f0" stroke-dasharray="3 3" />
        <line x1="20" y1="200" x2="520" y2="200" stroke="#cbd5e1" stroke-width="1.5" />
        ${bars}
      </svg>
    `;
  }

  updateOrderStatus(orderId, newStatus) {
    const o = this.orders.find(x => x.id === orderId);
    if (o) {
      o.status = newStatus;
      this.saveOrders();
      this.renderSalesAnalytics();
      this.showToast(`Buyurtma ${orderId} holati yangilandi: ${newStatus}`, "success");
    }
  }

  // 8. EKSPORT VA REZERV NUSXA
  exportDatabaseJSON() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(PRODUCTS_DATABASE, null, 2));
    const dl = document.createElement("a");
    dl.setAttribute("href", dataStr);
    dl.setAttribute("download", `MAHSULOTLAR_BAZASI_${new Date().toISOString().split("T")[0]}.json`);
    document.body.appendChild(dl);
    dl.click();
    dl.remove();
    this.showToast("Mahsulotlar ma'lumotlar bazasi (.json) yuklab olindi!", "success");
  }

  resetCatalogToDefault() {
    if (confirm("Diqqat! Barcha o'zgartirishlar bekor qilinadi va zavod sozlamalariga qaytariladi. Davom etasizmi?")) {
      resetProductsDatabase();
      this.init();
      this.showToast("Katalog boshlang'ich holatga qaytarildi!", "info");
    }
  }

  // 9. EVENT LISTENERS
  setupEventListeners() {
    // Navigation
    document.querySelectorAll('[data-tab]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const tab = btn.getAttribute('data-tab');
        this.switchTab(tab);
      });
    });

    // Search
    const searchInput = document.getElementById('adminSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value;
        this.currentPage = 1;
        this.renderProductsTable();
      });
    }

    // Category filter
    const catSelect = document.getElementById('adminCatSelect');
    if (catSelect) {
      catSelect.addEventListener('change', (e) => {
        this.selectedCategory = e.target.value;
        this.currentPage = 1;
        this.renderProductsTable();
      });
    }

    // Stock filter
    const stockSelect = document.getElementById('adminStockSelect');
    if (stockSelect) {
      stockSelect.addEventListener('change', (e) => {
        this.selectedStockFilter = e.target.value;
        this.currentPage = 1;
        this.renderProductsTable();
      });
    }

    // Image URL input live preview
    const imgUrlInput = document.getElementById('productImageUrl');
    if (imgUrlInput) {
      imgUrlInput.addEventListener('input', (e) => {
        const preview = document.getElementById('modalImagePreview');
        if (preview && e.target.value) {
          preview.src = e.target.value;
        }
      });
    }

    // Mobile sidebar toggle
    const menuBtn = document.getElementById('adminMenuToggle');
    const sidebar = document.getElementById('adminSidebar');
    if (menuBtn && sidebar) {
      menuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
      });
    }
  }

  switchTab(tabId) {
    this.currentTab = tabId;
    document.querySelectorAll('[data-tab]').forEach(b => {
      if (b.getAttribute('data-tab') === tabId) {
        b.classList.add('active');
      } else {
        b.classList.remove('active');
      }
    });

    document.querySelectorAll('.tab-section').forEach(sec => {
      if (sec.id === `section-${tabId}`) {
        sec.classList.remove('d-none');
      } else {
        sec.classList.add('d-none');
      }
    });

    // Mobile sidebar auto-close
    const sidebar = document.getElementById('adminSidebar');
    if (sidebar && window.innerWidth < 992) {
      sidebar.classList.remove('open');
    }
  }

  // UTILITIES
  formatMoney(num) {
    if (!num) return "0 so'm";
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " so'm";
  }

  showToast(message, type = "info") {
    let container = document.getElementById('adminToastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'adminToastContainer';
      container.style.position = 'fixed';
      container.style.top = '20px';
      container.style.right = '20px';
      container.style.zIndex = '9999';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `alert alert-${type} shadow-lg py-2 px-3 mb-2 rounded-3 d-flex align-items-center gap-2`;
    toast.style.minWidth = '280px';
    toast.innerHTML = `<i class="bi bi-info-circle-fill"></i> <div>${message}</div>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.transition = 'opacity 0.4s ease';
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 400);
    }, 3200);
  }

  setupTheme() {
    const saved = localStorage.getItem('sm_theme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);
  }
}

// Global Admin Instance
let admin = null;
document.addEventListener('DOMContentLoaded', () => {
  admin = new AdminManager();
  admin.init();
});
