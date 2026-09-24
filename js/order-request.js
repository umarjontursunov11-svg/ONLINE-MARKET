/**
 * "Buyurtma asosida" mahsulotlar uchun ariza yuborish.
 * Narxi yo'q (onOrder) mahsulotlar savatga qo'shilmaydi — mijoz ariza qoldiradi,
 * ariza menejerlar Telegram guruhiga yuboriladi (sendTelegramNotification, app.js).
 */

let orderRequestProductId = null;

function openOrderRequest(productId) {
  const product = PRODUCTS_DATABASE.find(p => p.id === productId);
  if (!product) return;
  orderRequestProductId = productId;
  const isRu = typeof currentLang !== 'undefined' && currentLang === 'ru';

  // Mahsulot oynasi ochiq bo'lsa, avval u to'liq yopilsin (ikki modal bir vaqtda ochilmasin)
  const detailEl = document.getElementById('productDetailModal');
  if (detailEl && detailEl.classList.contains('show')) {
    detailEl.addEventListener('hidden.bs.modal', () => openOrderRequest(productId), { once: true });
    bootstrap.Modal.getInstance(detailEl)?.hide();
    return;
  }

  const specs = product.specs || {};
  const facts = ['Qadoq (fasovka)', 'Konsentratsiya', 'Tozaligi', 'Tarkibi', 'CAS raqami']
    .filter(k => specs[k])
    .map(k => `<span class="order-fact"><small>${k}</small>${escapeTgHtml(specs[k])}</span>`)
    .join('');

  document.getElementById('orderRequestProduct').innerHTML = `
    <div class="order-req-product">
      <span class="badge-custom badge-order">${isRu ? (product.badge_ru || product.badge) : product.badge}</span>
      <h6 class="fw-bold mt-2 mb-1">${escapeTgHtml(product.title)}</h6>
      <div class="small text-muted mb-2">${isRu ? 'Код' : 'Kod'}: <code>${escapeTgHtml(product.artikul)}</code> · ${escapeTgHtml(isRu ? (product.categoryName_ru || product.categoryName) : product.categoryName)}</div>
      ${facts ? `<div class="order-facts">${facts}</div>` : ''}
    </div>`;

  const form = document.getElementById('orderRequestForm');
  form.reset();
  document.getElementById('orderReqQty').value = 1;
  const btn = document.getElementById('orderReqSubmit');
  btn.disabled = false;

  bootstrap.Modal.getOrCreateInstance(document.getElementById('orderRequestModal')).show();
}

async function submitOrderRequest(event) {
  event.preventDefault();
  const product = PRODUCTS_DATABASE.find(p => p.id === orderRequestProductId);
  if (!product) return;
  const isRu = typeof currentLang !== 'undefined' && currentLang === 'ru';
  const val = id => (document.getElementById(id)?.value || '').trim();

  const name = val('orderReqName');
  const phone = val('orderReqPhone');
  const company = val('orderReqCompany');
  const qty = val('orderReqQty') || '1';
  const comment = val('orderReqComment');

  const specs = product.specs || {};
  let msg = `📝 <b>YANGI ARIZA — BUYURTMA ASOSIDA</b>\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `📦 <b>Mahsulot:</b> ${escapeTgHtml(product.title)}\n`;
  msg += `🔖 <b>Artikul:</b> <code>${escapeTgHtml(product.artikul)}</code>\n`;
  msg += `🗂 <b>Bo'lim:</b> ${escapeTgHtml(product.categoryName)}\n`;
  ['Qadoq (fasovka)', 'Konsentratsiya', 'Tozaligi', 'Tarkibi', 'CAS raqami'].forEach(k => {
    if (specs[k]) msg += `▫️ <b>${k}:</b> ${escapeTgHtml(specs[k])}\n`;
  });
  msg += `🔢 <b>Miqdori:</b> ${escapeTgHtml(qty)}\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `👤 <b>F.I.O:</b> ${escapeTgHtml(name)}\n`;
  msg += `📞 <b>Telefon:</b> <code>${escapeTgHtml(phone)}</code>\n`;
  if (company) msg += `🏭 <b>Tashkilot:</b> ${escapeTgHtml(company)}\n`;
  if (comment) msg += `💬 <b>Izoh:</b> <i>${escapeTgHtml(comment)}</i>\n`;
  msg += `📅 <b>Vaqt:</b> ${new Date().toLocaleString('uz-UZ')}\n`;

  const btn = document.getElementById('orderReqSubmit');
  btn.disabled = true;
  const ok = await sendTelegramNotification(msg);
  btn.disabled = false;

  if (ok) {
    bootstrap.Modal.getInstance(document.getElementById('orderRequestModal'))?.hide();
    store.showToast(isRu
      ? 'Заявка отправлена! Менеджер свяжется с вами и сообщит цену и срок поставки.'
      : "Ariza yuborildi! Menejer siz bilan bog'lanib, narx va yetkazib berish muddatini aytadi.", 'success');
  } else {
    const phoneNo = (typeof COMPANY_INFO !== 'undefined' && COMPANY_INFO.phones[0]) || '';
    store.showToast(isRu
      ? `Не удалось отправить заявку. Позвоните нам: ${phoneNo}`
      : `Arizani yuborib bo'lmadi. Iltimos, qo'ng'iroq qiling: ${phoneNo}`, 'warning');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('orderRequestForm')?.addEventListener('submit', submitOrderRequest);
});
