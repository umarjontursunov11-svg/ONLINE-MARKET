/**
 * "STANDART VA METROLOGIYA" MCHJ
 * Asosiy ilova logikasi: Filtrlar, Qidiruv, Modal oynalar, Buyurtma va Pasport
 */

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

let currentCategory = 'all';
let searchQuery = '';
let currentSort = 'popular';
let selectedPriceRange = 0; // index in filterOptions

function initApp() {
  renderCategoryShowcase();
  renderDiscountedProducts();
  renderCategoryTabs();
  renderProducts();
  store.updateBadges();
  store.renderCart();
  setupEventListeners();
  setupThemeToggle();
}

function selectCategoryAndScroll(catId) {
  currentCategory = catId;
  renderCategoryTabs();
  renderProducts();

  const catalogEl = document.getElementById('katalog');
  if (catalogEl) {
    const yOffset = -70;
    const y = catalogEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

// 0.1. RENDER ASOSIY KATEGORIYALAR (MAIN SCREEN CATEGORIES SHOWCASE)
function renderCategoryShowcase() {
  const container = document.getElementById('categoryShowcaseGrid');
  if (!container) return;

  const categoryMeta = {
    'standart-namunalar': {
      desc_uz: "Davlat GSO va xalqaro Weiyel CRM standart namunalari, metallar, neft va suv tahlili etalonlari.",
      desc_ru: "Государственные стандартные образцы (ГСО) и международные CRM Weiyel, металлы, нефть и анализ воды.",
      accent: "#0284c7",
      bg: "#e0f2fe",
      badge: "GSO & CRM"
    },
    'standart-titrlar': {
      desc_uz: "Ampuladagi analitik kimyoviy etalon eritmalar, kislotalar, ishqorlar va tuzlar (Fiksanallar).",
      desc_ru: "Аналитические стандартные растворы в ампулах, кислоты, щелочи и соли (фиксаналы).",
      accent: "#10b981",
      bg: "#d1fae5",
      badge: currentLang === 'ru' ? "Фиксаналы" : "Fiksanallar"
    },
    'bufer-eritmalari': {
      desc_uz: "pH 1.68 - 10.01 va elektr o'tkazuvchanlik 1413 µS/cm kalibrlash bufer standart eritmalari.",
      desc_ru: "Калибровочные буферные растворы pH 1.68 - 10.01 и электропроводности 1413 мкСм/см.",
      accent: "#8b5cf6",
      bg: "#ede9fe",
      badge: "pH & Cond"
    },
    'olchov-vositalari': {
      desc_uz: "Raqamli manometrlar, analitik tarozilar, spektrofotometrlar, viskozimetrlar (Davlat qiyoslovi bilan).",
      desc_ru: "Цифровые манометры, аналитические весы, спектрофотометры, вискозиметры (с госповеркой).",
      accent: "#f59e0b",
      bg: "#fef3c7",
      badge: currentLang === 'ru' ? "С поверкой" : "Poverka bilan"
    },
    'areometrlar-termometrlar': {
      desc_uz: "Neft (ANT), kislota (AK), spirt (ASP) areometrlari va etalon laboratoriya termometrlari.",
      desc_ru: "Ареометры для нефтепродуктов (АНТ), кислот (АК), спирта (АСП) и эталонные термометры.",
      accent: "#ef4444",
      bg: "#fee2e2",
      badge: "ГОСТ 18481"
    }
  };

  const mainCategories = CATEGORIES.filter(c => c.id !== 'all');

  container.innerHTML = mainCategories.map(cat => {
    const meta = categoryMeta[cat.id] || {
      desc_uz: "Laboratoriyangiz uchun akkreditatsiyalangan metrologik sinov vositalari.",
      desc_ru: "Аккредитованные средства метрологических испытаний для лаборатории.",
      accent: "#0284c7",
      bg: "#e0f2fe",
      badge: "Standart"
    };

    const count = PRODUCTS_DATABASE.filter(p => p.category === cat.id).length;
    const catName = (typeof CATEGORY_TRANSLATIONS !== 'undefined' && CATEGORY_TRANSLATIONS[currentLang] && CATEGORY_TRANSLATIONS[currentLang][cat.id]) 
      ? CATEGORY_TRANSLATIONS[currentLang][cat.id] 
      : cat.name;
    const catDesc = currentLang === 'ru' ? meta.desc_ru : meta.desc_uz;
    const itemsLabel = currentLang === 'ru' ? "наименований" : "ta mahsulot";
    const exploreLabel = currentLang === 'ru' ? "Перейти" : "Ko'rish";

    return `
      <div class="col-12 col-md-6 col-lg-4 col-xl" style="--cat-accent: ${meta.accent}; --cat-bg: ${meta.bg}; --cat-color: ${meta.accent};">
        <div class="category-showcase-card" onclick="selectCategoryAndScroll('${cat.id}')">
          <div>
            <div class="d-flex justify-content-between align-items-start">
              <div class="cat-icon-bubble">
                <i class="bi ${cat.icon}"></i>
              </div>
              <span class="badge" style="background: ${meta.bg}; color: ${meta.accent}; font-weight: 700; font-size: 0.72rem;">
                ${meta.badge}
              </span>
            </div>
            <h3 class="cat-showcase-title">${catName}</h3>
            <p class="cat-showcase-desc">${catDesc}</p>
          </div>

          <div class="cat-showcase-footer">
            <span class="cat-count-badge">
              <i class="bi bi-box-seam me-1"></i> ${count} ${itemsLabel}
            </span>
            <span class="cat-explore-link">
              ${exploreLabel} <i class="bi bi-arrow-right"></i>
            </span>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// 0.2. RENDER CHEGIRMADAGI MAHSULOTLAR (DISCOUNTED & PROMOTIONAL PRODUCTS)
function renderDiscountedProducts() {
  const container = document.getElementById('discountedProductsGrid');
  if (!container) return;

  const promoConfigs = [
    { 
      id: "si-1", 
      discountPercent: 35, 
      badge_uz: "-35% Super Aksiya", 
      badge_ru: "-35% Супер Акция",
      stock_uz: "Faqat 3 dona qoldi", 
      stock_ru: "Осталось 3 шт." 
    },
    { 
      id: "dev-fluke-manometer", 
      discountPercent: 15, 
      badge_uz: "-15% Maxsus Narx", 
      badge_ru: "-15% Спеццена",
      stock_uz: "Omborda 12 dona", 
      stock_ru: "В наличии 12 шт." 
    },
    { 
      id: "dev-ph-meter-seven", 
      discountPercent: 20, 
      badge_uz: "-20% Chegirma", 
      badge_ru: "-20% Скидка",
      stock_uz: "Omborda 8 dona", 
      stock_ru: "В наличии 8 шт." 
    },
    { 
      id: "dev-analytical-balance", 
      discountPercent: 12, 
      badge_uz: "-12% Aksiya", 
      badge_ru: "-12% Акция",
      stock_uz: "Omborda 6 dona", 
      stock_ru: "В наличии 6 шт." 
    },
    { 
      id: "si-2", 
      discountPercent: 20, 
      badge_uz: "-20% Chegirma", 
      badge_ru: "-20% Скидка",
      stock_uz: "Omborda 15 dona", 
      stock_ru: "В наличии 15 шт." 
    },
    { 
      id: "buf-197", 
      discountPercent: 25, 
      badge_uz: "-25% Maxsus Taklif", 
      badge_ru: "-25% Спецпредложение",
      stock_uz: "Omborda 20 dona", 
      stock_ru: "В наличии 20 шт." 
    }
  ];

  const promoProducts = [];
  promoConfigs.forEach(cfg => {
    const prod = PRODUCTS_DATABASE.find(p => p.id === cfg.id);
    if (prod && prod.price > 0) {
      const salePrice = prod.price;
      const oldPrice = Math.round(salePrice / (1 - cfg.discountPercent / 100));
      const savings = oldPrice - salePrice;
      promoProducts.push({
        ...prod,
        salePrice,
        oldPrice,
        savings,
        discountPercent: cfg.discountPercent,
        badgeText: currentLang === 'ru' ? cfg.badge_ru : cfg.badge_uz,
        limitedStock: currentLang === 'ru' ? cfg.stock_ru : cfg.stock_uz
      });
    }
  });

  if (promoProducts.length === 0) {
    container.innerHTML = `<div class="col-12 text-center text-muted">Aksiyadagi mahsulotlar yangilanmoqda.</div>`;
    return;
  }

  const saveLabel = currentLang === 'ru' ? "Экономия:" : "Tejaysiz:";
  const addCartLabel = currentLang === 'ru' ? "В корзину" : "Savatga";

  container.innerHTML = promoProducts.map(p => {
    const isFav = store.isFavorite(p.id);
    const isComp = store.isCompared(p.id);

    return `
      <div class="col-12 col-md-6 col-lg-4 mb-4">
        <div class="discount-product-card">
          <!-- Discount Badge & Quick Actions -->
          <div class="discount-badge-banner">
            <i class="bi bi-fire"></i> ${p.badgeText}
          </div>

          <div class="card-quick-actions" style="position: absolute; top: 12px; right: 12px; z-index: 5;">
            <button class="action-circle-btn ${isComp ? 'active' : ''}" 
                    data-comp-btn="${p.id}" 
                    onclick="store.toggleCompare('${p.id}')" 
                    title="${currentLang === 'ru' ? 'Сравнить' : 'Taqqoslash'}">
              <i class="bi bi-shuffle"></i>
            </button>
            <button class="action-circle-btn ${isFav ? 'active' : ''}" 
                    data-fav-btn="${p.id}" 
                    onclick="store.toggleFavorite('${p.id}')" 
                    title="${currentLang === 'ru' ? 'В избранное' : 'Sevimlilarga qo\'shish'}">
              <i class="bi ${isFav ? 'bi-heart-fill text-danger' : 'bi-heart'}"></i>
            </button>
          </div>

          <!-- Product Image -->
          <div class="discount-img-wrap" onclick="openProductModal('${p.id}')">
            <img src="${p.image}" alt="${p.title}" loading="lazy" onerror="this.src='assets/images/precision_manometer.jpg'" />
          </div>

          <!-- Card Body -->
          <div class="discount-card-body">
            <div>
              <div class="d-flex justify-content-between align-items-center mb-1">
                <span class="product-category-tag">${p.categoryName}</span>
                <span class="badge bg-danger-subtle text-danger small">${p.limitedStock}</span>
              </div>
              <h4 class="product-title" onclick="openProductModal('${p.id}')" title="${p.title}">
                ${p.title}
              </h4>
              <div class="product-code-tag mb-2">Artikul: <strong>${p.artikul}</strong></div>
            </div>

            <div>
              <!-- Price Box -->
              <div class="discount-price-box">
                <div class="d-flex justify-content-between align-items-center">
                  <div>
                    <div class="old-price-line">${store.formatMoney(p.oldPrice)}</div>
                    <div class="new-price-val">${store.formatMoney(p.salePrice)}</div>
                  </div>
                  <span class="savings-tag">
                    <i class="bi bi-arrow-down-circle-fill me-1"></i> ${saveLabel} ${store.formatMoney(p.savings)}
                  </span>
                </div>
              </div>

              <!-- Buttons -->
              <div class="d-flex gap-2">
                <button class="btn btn-primary-custom flex-grow-1 py-2 fw-semibold" onclick="store.addToCart('${p.id}')">
                  <i class="bi bi-cart-plus me-1"></i> ${addCartLabel}
                </button>
                <button class="btn btn-outline-secondary px-3 py-2" onclick="openProductModal('${p.id}')" title="Texnik Pasport &amp; Xususiyatlar">
                  <i class="bi bi-eye"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// 1. RENDER CATEGORIES
function renderCategoryTabs() {
  const categoryContainer = document.getElementById('categoryTabsContainer');
  if (!categoryContainer) return;

  categoryContainer.innerHTML = CATEGORIES.map(cat => {
    const catName = (typeof CATEGORY_TRANSLATIONS !== 'undefined' && CATEGORY_TRANSLATIONS[currentLang] && CATEGORY_TRANSLATIONS[currentLang][cat.id]) 
      ? CATEGORY_TRANSLATIONS[currentLang][cat.id] 
      : cat.name;

    return `
      <button class="cat-pill ${cat.id === currentCategory ? 'active' : ''}" onclick="setCategory('${cat.id}')">
        <i class="bi ${cat.icon} me-1"></i>
        <span>${catName}</span>
      </button>
    `;
  }).join('');
}

function setCategory(catId) {
  currentCategory = catId;
  renderCategoryTabs();
  renderProducts();
  
  // Scroll slightly to catalog if clicked from outside
  const catalogEl = document.getElementById('katalog');
  if (catalogEl && window.scrollY < 400) {
    catalogEl.scrollIntoView({ behavior: 'smooth' });
  }
}

// 2. RENDER PRODUCTS WITH FILTERS & SEARCH
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  const emptyState = document.getElementById('productsEmptyState');
  const countBadge = document.getElementById('catalogResultsCount');
  if (!grid) return;

  let filtered = [...PRODUCTS_DATABASE];

  // Category filter
  if (currentCategory !== 'all') {
    filtered = filtered.filter(p => p.category === currentCategory);
  }

  // Search filter
  if (searchQuery.trim() !== '') {
    const q = searchQuery.toLowerCase().trim();
    filtered = filtered.filter(p => 
      p.title.toLowerCase().includes(q) ||
      p.artikul.toLowerCase().includes(q) ||
      p.shortDesc.toLowerCase().includes(q) ||
      Object.values(p.specs).some(val => val.toLowerCase().includes(q))
    );
  }

  // Price range filter
  const priceRange = FILTER_OPTIONS.priceRanges[selectedPriceRange];
  if (priceRange) {
    filtered = filtered.filter(p => p.price >= priceRange.min && p.price <= priceRange.max);
  }

  // Sorting
  if (currentSort === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentSort === 'name-asc') {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  }

  // Update counts
  if (countBadge) {
    countBadge.textContent = (typeof currentLang !== 'undefined' && currentLang === 'ru') 
      ? `${filtered.length} товаров найдено` 
      : `${filtered.length} ta mahsulot topildi`;
  }

  // Empty check
  if (filtered.length === 0) {
    grid.innerHTML = '';
    if (emptyState) emptyState.classList.remove('d-none');
    return;
  }

  if (emptyState) emptyState.classList.add('d-none');

  // Render cards
  grid.innerHTML = filtered.map(product => {
    const isFav = store.isFavorite(product.id);
    const isComp = store.isCompared(product.id);
    const isRu = typeof currentLang !== 'undefined' && currentLang === 'ru';
    
    // Extract top 3 key specs for card preview
    const specEntries = Object.entries(product.specs).slice(0, 3);
    const priceDisplay = isRu ? product.priceFormatted.replace("so'm", "сум") : product.priceFormatted;

    return `
      <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
        <div class="product-card">
          <!-- Card Badge & Actions -->
          <div class="product-card-top">
            <span class="badge-custom badge-${product.badgeType || 'primary'}">
              ${product.badge}
            </span>
            <div class="card-quick-actions">
              <button class="action-circle-btn ${isComp ? 'active' : ''}" 
                      data-comp-btn="${product.id}" 
                      onclick="store.toggleCompare('${product.id}')"
                      title="${isRu ? 'Сравнить' : 'Taqqoslash'}">
                <i class="bi bi-shuffle"></i>
              </button>
              <button class="action-circle-btn ${isFav ? 'active' : ''}" 
                      data-fav-btn="${product.id}" 
                      onclick="store.toggleFavorite('${product.id}')" 
                      title="${isRu ? 'В избранное' : 'Sevimlilarga qo\'shish'}">
                <i class="bi ${isFav ? 'bi-heart-fill text-danger' : 'bi-heart'}"></i>
              </button>
            </div>
          </div>

          <!-- Product Image -->
          <div class="product-img-wrapper" onclick="openProductModal('${product.id}')">
            <img src="${product.image}" alt="${product.title}" loading="lazy" class="product-card-img" />
            <div class="quick-view-overlay">
              <span class="quick-view-btn"><i class="bi bi-eye"></i> ${isRu ? 'Техпаспорт' : 'Texnik Pasport'}</span>
            </div>
          </div>

          <!-- Product Content -->
          <div class="product-card-body">
            <div class="product-meta">
              <span class="product-category-tag">${product.categoryName}</span>
              <span class="product-code-tag">${isRu ? 'Код:' : 'Kod:'} ${product.artikul}</span>
            </div>

            <h3 class="product-title" onclick="openProductModal('${product.id}')" title="${product.title}">
              ${product.title}
            </h3>

            <p class="product-short-desc">
              ${product.shortDesc}
            </p>

            <!-- Key Specs Pill Box -->
            <div class="card-specs-box">
              ${specEntries.map(([key, val]) => `
                <div class="spec-micro-row">
                  <span class="spec-micro-label">${key}:</span>
                  <span class="spec-micro-val">${val}</span>
                </div>
              `).join('')}
            </div>

            <!-- In Stock Status -->
            <div class="product-stock-status">
              <span class="stock-dot"></span>
              <span class="stock-text">${product.stockCount}</span>
            </div>

            <!-- Price and Cart Button -->
            <div class="product-card-footer">
              <div class="price-container">
                <span class="price-label">${isRu ? 'Цена:' : 'Narxi:'}</span>
                <span class="price-val">${priceDisplay}</span>
              </div>
              <button class="btn btn-add-cart" onclick="store.addToCart('${product.id}')" title="${isRu ? 'В корзину' : 'Savatga qo\'shish'}">
                <i class="bi bi-cart-plus-fill me-1"></i> ${isRu ? 'В корзину' : 'Savatga'}
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// 3. DETAILED PRODUCT MODAL (TEXNIK PASPORT & XUSUSIYATLAR)
function openProductModal(productId) {
  const product = PRODUCTS_DATABASE.find(p => p.id === productId);
  if (!product) return;

  const isRu = typeof currentLang !== 'undefined' && currentLang === 'ru';
  const modalTitle = document.getElementById('productModalTitle');
  const modalBody = document.getElementById('productModalBody');

  if (modalTitle) {
    modalTitle.innerHTML = `<span class="badge-custom badge-${product.badgeType} me-2">${product.badge}</span> ${product.title}`;
  }

  const specRows = Object.entries(product.specs).map(([key, val]) => `
    <tr>
      <td class="spec-name">${key}</td>
      <td class="spec-value">${val}</td>
    </tr>
  `).join('');

  const appsHtml = product.applications ? product.applications.map(app => `
    <li class="app-item"><i class="bi bi-check2-circle text-success me-2"></i>${app}</li>
  `).join('') : '';

  const featuresHtml = product.features ? product.features.map(f => `
    <li class="feature-item"><i class="bi bi-shield-check text-primary me-2"></i>${f}</li>
  `).join('') : '';

  const priceDisplay = isRu ? product.priceFormatted.replace("so'm", "сум") : product.priceFormatted;

  modalBody.innerHTML = `
    <div class="row g-4">
      <!-- Left Column: Image & Quick Details -->
      <div class="col-lg-5">
        <div class="modal-product-img-box">
          <img src="${product.image}" alt="${product.title}" class="modal-product-img" />
        </div>
        
        <div class="modal-price-box mt-3 p-3 bg-light rounded-3 border">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <span class="text-muted small">${isRu ? 'Цена товара:' : 'Mahsulot narxi:'}</span>
            <span class="modal-price-tag">${priceDisplay}</span>
          </div>
          <div class="text-success small mb-3">
            <i class="bi bi-check-circle-fill me-1"></i> ${product.stockCount}
          </div>

          <div class="d-flex gap-2">
            <div class="input-group" style="width: 120px;">
              <button class="btn btn-outline-secondary" type="button" onclick="adjustModalQty(-1)">-</button>
              <input type="number" id="modalQtyInput" class="form-control text-center" value="1" min="1" max="99" />
              <button class="btn btn-outline-secondary" type="button" onclick="adjustModalQty(1)">+</button>
            </div>
            <button class="btn btn-primary-custom flex-grow-1" onclick="addModalItemToCart('${product.id}')">
              <i class="bi bi-cart-plus-fill me-1"></i> ${isRu ? 'В корзину' : 'Savatga qo\'shish'}
            </button>
          </div>

          <div class="mt-3 pt-3 border-top d-flex gap-2">
            <button class="btn btn-sm btn-outline-secondary w-50" onclick="store.toggleCompare('${product.id}')">
              <i class="bi bi-shuffle me-1"></i> ${isRu ? 'Сравнить' : 'Taqqoslash'}
            </button>
            <button class="btn btn-sm btn-outline-secondary w-50" onclick="showCertificateModal('${product.artikul}', '${product.title}')">
              <i class="bi bi-file-earmark-pdf me-1"></i> ${isRu ? 'Сертификат' : 'Sertifikat'}
            </button>
          </div>
          <button class="btn btn-sm btn-outline-primary w-100 mt-2" onclick="generateSingleProductOffer('${product.id}')">
            <i class="bi bi-file-earmark-ruled me-1"></i> ${isRu ? 'Коммерческое Предложение (PDF)' : 'Ushbu mahsulotga Tijorat Taklifi (PDF)'}
          </button>
        </div>
      </div>

      <!-- Right Column: Full Technical Specifications -->
      <div class="col-lg-7">
        <div class="product-modal-details">
          <div class="d-flex gap-2 align-items-center mb-2">
            <span class="badge bg-secondary-subtle text-dark border">${isRu ? 'Артикул:' : 'Artikul:'} ${product.artikul}</span>
            <span class="badge bg-info-subtle text-dark border">${product.categoryName}</span>
          </div>

          <h4 class="mb-3 text-dark fw-bold">${product.title}</h4>
          <p class="text-muted mb-4">${product.shortDesc}</p>

          <h5 class="section-subtitle mb-3">
            <i class="bi bi-sliders me-2 text-primary"></i> ${isRu ? 'Технические характеристики и параметры' : 'Texnik Xususiyatlari va Parametrlari'}
          </h5>
          
          <div class="table-responsive mb-4">
            <table class="table table-striped table-hover specs-table">
              <tbody>
                ${specRows}
              </tbody>
            </table>
          </div>

          ${appsHtml ? `
            <h5 class="section-subtitle mb-2">
              <i class="bi bi-building-check me-2 text-success"></i> ${isRu ? 'Области применения' : 'Qo\'llanish Sohalari'}
            </h5>
            <ul class="list-unstyled mb-4 app-list">
              ${appsHtml}
            </ul>
          ` : ''}

          ${featuresHtml ? `
            <h5 class="section-subtitle mb-2">
              <i class="bi bi-award me-2 text-warning"></i> ${isRu ? 'Метрологические преимущества и гарантия' : 'Metrologik Afzalliklar va Kafolat'}
            </h5>
            <ul class="list-unstyled mb-2 feature-list">
              ${featuresHtml}
            </ul>
          ` : ''}
        </div>
      </div>
    </div>
  `;

  const modal = new bootstrap.Modal(document.getElementById('productDetailModal'));
  modal.show();
}

function adjustModalQty(delta) {
  const input = document.getElementById('modalQtyInput');
  if (input) {
    let val = parseInt(input.value) || 1;
    val = Math.max(1, val + delta);
    input.value = val;
  }
}

function addModalItemToCart(productId) {
  const input = document.getElementById('modalQtyInput');
  const qty = input ? parseInt(input.value) || 1 : 1;
  store.addToCart(productId, qty);
  
  // Close modal
  const modalEl = document.getElementById('productDetailModal');
  const modal = bootstrap.Modal.getInstance(modalEl);
  if (modal) modal.hide();
}

// 4. CERTIFICATE PREVIEW MODAL
function showCertificateModal(artikul, title) {
  const certTitle = document.getElementById('certModalTitle');
  const certBody = document.getElementById('certModalBody');

  if (certTitle) certTitle.textContent = `Metrologik Sertifikat & Pasport: ${artikul}`;

  if (certBody) {
    certBody.innerHTML = `
      <div class="certificate-preview-card p-4 border rounded bg-white text-dark shadow-sm">
        <div class="text-center pb-3 border-bottom mb-3">
          <img src="assets/images/logo.png" alt="STANDART VA METROLOGIYA" style="max-height: 60px; object-fit: contain;" class="mb-2" />
          <div class="fw-bold text-uppercase fs-6 text-primary">O'zbekiston Respublikasi Standartlashtirish va Metrologiya Boshqarmasi</div>
          <div class="text-muted small">"STANDART VA METROLOGIYA" MCHJ Sifat Nazorati va Qiyoslash Laboratoriyasi</div>
          <div class="badge bg-success mt-2">DAVLAT REESTRIDAN O'TGAN</div>
        </div>

        <div class="row g-3 small">
          <div class="col-6"><strong>Mahsulot / Vosita:</strong> ${title}</div>
          <div class="col-6"><strong>Artikul / Partiya:</strong> ${artikul}-2026/08</div>
          <div class="col-6"><strong>Akkreditatsiya standarti:</strong> O'zDSt ISO/IEC 17025:2019</div>
          <div class="col-6"><strong>Attestatsiya muddati:</strong> 2026-yil avgust — 2028-yil avgust</div>
          <div class="col-12 mt-3 p-2 bg-light rounded border">
            <strong>Xulosa:</strong> Taqdim etilgan mahsulot davlat metrologik me'yorlari va talablariga to'liq javob beradi. Birlamchi davlat etalonlariga muvofiqligi tasdiqlangan.
          </div>
        </div>

        <div class="mt-4 pt-3 border-top d-flex justify-content-between align-items-center">
          <div class="small text-muted">
            Bosh metrolog: <em>A. Saidov</em><br>
            Sana: 28.08.2026
          </div>
          <div class="stamp-box text-center p-2 border border-danger text-danger rounded-circle" style="width: 85px; height: 85px; font-size: 10px; display:flex; flex-direction:column; justify-content:center;">
            <span>STANDART &amp; METROLOGIYA</span>
            <span class="fw-bold">TASDIQLANDI</span>
          </div>
        </div>
      </div>
    `;
  }

  const modal = new bootstrap.Modal(document.getElementById('certificateModal'));
  modal.show();
}

// 5. CHECKOUT & COMMERCIAL OFFER
function openCheckoutModal() {
  if (store.cart.length === 0) {
    store.showToast("Savat bo'sh! Avval mahsulot tanlang.", "warning");
    return;
  }

  const { totalPriceFormatted, totalCount } = store.getCartTotals();
  const summaryEl = document.getElementById('checkoutOrderSummary');
  if (summaryEl) {
    summaryEl.innerHTML = `
      <div class="p-3 bg-light rounded-3 border mb-3">
        <div class="d-flex justify-content-between mb-2">
          <span class="text-muted">Mahsulotlar soni:</span>
          <strong>${totalCount} dona</strong>
        </div>
        <div class="d-flex justify-content-between">
          <span class="text-muted">Jami to'lov:</span>
          <strong class="text-primary fs-5">${totalPriceFormatted}</strong>
        </div>
      </div>
    `;
  }

  const modal = new bootstrap.Modal(document.getElementById('checkoutModal'));
  modal.show();
}

// ============================================================================
// TELEGRAM NOTIFICATION SERVICE (GURUHGA BUYURTMA VA MUROJAAT YUBORISH)
// ============================================================================
function escapeTgHtml(text) {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

async function sendTelegramNotification(text) {
  const token = typeof TELEGRAM_CONFIG !== 'undefined' ? TELEGRAM_CONFIG.getBotToken() : (localStorage.getItem('sm_tg_bot_token') || '8796402233:AAHkcD3lE1piqcC3yOWgTRUIXWJhtaSQ8qQ');
  const chatId = typeof TELEGRAM_CONFIG !== 'undefined' ? TELEGRAM_CONFIG.getChatId() : (localStorage.getItem('sm_tg_chat_id') || '-1003964640399');

  if (!token || !chatId) {
    console.warn("Telegram Bot Token yoki Chat ID mavjud emas.");
    return false;
  }

  try {
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: 'HTML'
      })
    });

    const data = await response.json();
    if (data.ok) {
      console.log(`✅ Xabar Telegram guruhga (${chatId}) muvaffaqiyatli yuborildi:`, data);
      return true;
    } else {
      console.warn(`⚠️ Telegram API xatoligi (${data.error_code}): ${data.description}`);
      return false;
    }
  } catch (err) {
    console.warn("⚠️ Telegram API ga so'rov yuborishda xatolik:", err);
    return false;
  }
}

function formatOrderForTelegramHTML(order) {
  let msg = `🛒 <b>YANGI BUYURTMA — STANDART VA METROLOGIYA</b>\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `📋 <b>Buyurtma №:</b> <code>#${order.id}</code>\n`;
  msg += `👤 <b>Mijoz:</b> ${escapeTgHtml(order.customer.name)}\n`;
  msg += `📞 <b>Telefon:</b> <code>${escapeTgHtml(order.customer.phone)}</code>\n`;
  msg += `🏢 <b>Mijoz turi:</b> ${escapeTgHtml(order.customerType)}\n`;
  if (order.customer.company && order.customer.company !== 'Jismoniy Shaxs') {
    msg += `🏭 <b>Tashkilot:</b> ${escapeTgHtml(order.customer.company)}\n`;
  }
  if (order.customer.inn) {
    msg += `🔢 <b>STIR (INN):</b> <code>${escapeTgHtml(order.customer.inn)}</code>\n`;
  }
  msg += `📍 <b>Manzil:</b> ${escapeTgHtml(order.customer.address)}\n`;
  msg += `💳 <b>To'lov usuli:</b> ${escapeTgHtml(order.payType)}\n`;
  if (order.notes) {
    msg += `📝 <b>Izoh:</b> <i>${escapeTgHtml(order.notes)}</i>\n`;
  }
  msg += `━━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `📦 <b>BUYURTMA TARKIBI (${order.items.reduce((s, it) => s + it.quantity, 0)} dona):</b>\n\n`;

  order.items.forEach((item, idx) => {
    msg += `${idx + 1}. <b>${escapeTgHtml(item.title)}</b>\n`;
    msg += `   └ Artikul: <code>${escapeTgHtml(item.artikul)}</code>\n`;
    msg += `   └ ${item.quantity} dona x ${store.formatMoney(item.price)} = <b>${store.formatMoney(item.price * item.quantity)}</b>\n`;
  });

  msg += `\n━━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `💰 <b>JAMI SUMMA:</b> <b>${order.totalSumFormatted}</b> (QQS bilan)\n`;
  msg += `📅 <b>Vaqt:</b> ${new Date().toLocaleString('uz-UZ')}\n`;
  return msg;
}

function processOrderSubmit(event) {
  event.preventDefault();

  const customerType = document.querySelector('input[name="clientType"]:checked')?.value || 'Jismoniy shaxs';
  const fullName = document.getElementById('orderFullName')?.value || '';
  const phone = document.getElementById('orderPhone')?.value || '';
  const company = document.getElementById('orderCompany')?.value || '';
  const inn = document.getElementById('orderINN')?.value || '';
  const address = document.getElementById('orderAddress')?.value || '';
  const payType = document.getElementById('orderPayType')?.value || 'Hisob-raqam (Shartnoma)';
  const notes = document.getElementById('orderNotes')?.value || '';

  const { totalPriceFormatted, totalCount } = store.getCartTotals();

  // Create message for Telegram
  let orderText = `🛒 *YANGI BUYURTMA — STANDART VA METROLOGIYA MCHJ*\n\n`;
  orderText += `👤 *Mijoz:* ${fullName}\n`;
  orderText += `📞 *Telefon:* ${phone}\n`;
  orderText += `🏢 *Turi:* ${customerType}\n`;
  if (company) orderText += `🏭 *Kompaniya:* ${company}\n`;
  if (inn) orderText += `🔢 *STIR (INN):* ${inn}\n`;
  orderText += `📍 *Manzil:* ${address}\n`;
  orderText += `💳 *To'lov usuli:* ${payType}\n`;
  if (notes) orderText += `📝 *Izoh:* ${notes}\n\n`;

  orderText += `📦 *MAHSULOTLAR RO'YXATI (${totalCount} dona):*\n`;
  store.cart.forEach((item, index) => {
    orderText += `${index + 1}. ${item.title} (${item.artikul})\n   ${item.quantity} dona x ${store.formatMoney(item.price)} = ${store.formatMoney(item.price * item.quantity)}\n`;
  });

  orderText += `\n💰 *JAMI SUMMA:* ${totalPriceFormatted}\n`;
  orderText += `📅 *Sana:* ${new Date().toLocaleDateString('uz-UZ')}`;

  const offerItems = [...store.cart];
  const clientInfo = {
    name: fullName,
    company: company || (customerType === 'Yuridik shaxs' ? 'Yuridik Korxona' : 'Jismoniy Shaxs'),
    inn: inn,
    phone: phone,
    address: address
  };
  const offerNumber = "TT-" + new Date().getFullYear() + "/" + String(new Date().getMonth()+1).padStart(2, '0') + "-" + Math.floor(100 + Math.random() * 900);
  const offerDate = new Date().toLocaleDateString('uz-UZ', { day: '2-digit', month: '2-digit', year: 'numeric' }) + " y.";
  currentOfferData = { items: offerItems, client: clientInfo, offerNumber, offerDate };

  const newOrder = {
    id: offerNumber,
    date: new Date().toISOString(),
    dateFormatted: offerDate,
    customer: clientInfo,
    customerType: customerType,
    items: offerItems,
    totalSum: store.cart.reduce((s, it) => s + (it.price * it.quantity), 0),
    totalSumFormatted: totalPriceFormatted,
    payType: payType,
    notes: notes,
    status: 'Yangi'
  };

  // Admin panel uchun buyurtmani saqlash
  try {
    const orders = JSON.parse(localStorage.getItem('sm_orders') || '[]');
    orders.unshift(newOrder);
    localStorage.setItem('sm_orders', JSON.stringify(orders));
  } catch (e) {
    console.warn("Could not save order to storage:", e);
  }

  // Telegram guruhga (-1003964640399) to'g'ridan-to'g'ri xabar yuborish
  const orderTgHtml = formatOrderForTelegramHTML(newOrder);
  sendTelegramNotification(orderTgHtml);

  // Close Checkout Modal
  const checkoutModalEl = document.getElementById('checkoutModal');
  const modal = bootstrap.Modal.getInstance(checkoutModalEl);
  if (modal) modal.hide();

  // Show Success Modal with direct Telegram link & printable commercial offer
  showOrderSuccessModal(orderText, fullName, phone, company);
  
  // Clear cart
  store.clearCart();
}

// ALOQA VA TEZKOR MUROJAAT FORMASI (TELEGRAM GURUHGA YUBORISH)
async function handleContactSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('contactName')?.value || '';
  const phone = document.getElementById('contactPhone')?.value || '';
  const company = document.getElementById('contactCompany')?.value || '';
  const interest = document.getElementById('contactInterest')?.value || '';
  const message = document.getElementById('contactMessage')?.value || '';

  let tgMsg = `📨 <b>YANGI MUROJAAT (SAYTDAN)</b>\n`;
  tgMsg += `━━━━━━━━━━━━━━━━━━━━━━\n`;
  tgMsg += `👤 <b>F.I.O / Mas'ul:</b> ${escapeTgHtml(name)}\n`;
  tgMsg += `📞 <b>Telefon:</b> <code>${escapeTgHtml(phone)}</code>\n`;
  if (company) tgMsg += `🏭 <b>Tashkilot:</b> ${escapeTgHtml(company)}\n`;
  tgMsg += `🎯 <b>Qiziqtirgan:</b> ${escapeTgHtml(interest)}\n`;
  if (message) tgMsg += `💬 <b>Xabar:</b> <i>${escapeTgHtml(message)}</i>\n`;
  tgMsg += `📅 <b>Vaqt:</b> ${new Date().toLocaleString('uz-UZ')}\n`;

  // Guruhga jo'natish
  sendTelegramNotification(tgMsg);

  const isRu = typeof currentLang !== 'undefined' && currentLang === 'ru';
  store.showToast(isRu ? "Ваше обращение принято! Наш специалист свяжется с вами." : "Murojaatingiz qabul qilindi! Menejerimiz tez orada bog'lanadi.", "success");
  event.target.reset();
}

function showOrderSuccessModal(orderText, name, phone, company) {
  const modalEl = document.getElementById('orderSuccessModal');
  const msgContainer = document.getElementById('orderSuccessDetails');
  const tgBtn = document.getElementById('btnSendTelegram');

  if (tgBtn) {
    const encoded = encodeURIComponent(orderText);
    tgBtn.href = `https://t.me/share/url?url=${encoded}`;
  }

  if (msgContainer) {
    msgContainer.innerHTML = `
      <div class="alert alert-success">
        <h5 class="alert-heading"><i class="bi bi-check-circle me-1"></i> Rahmat, buyurtmangiz qabul qilindi!</h5>
        <p class="mb-1">Menejerimiz <strong>${phone}</strong> raqami orqali siz bilan 15 daqiqa ichida bog'lanadi.</p>
        <div class="small text-success mt-2 pt-2 border-top border-success-subtle">
          <i class="bi bi-telegram me-1"></i> Buyurtma ma'lumotlari Telegram guruhga (-1003964640399) yuborildi.
        </div>
      </div>
      <p class="small text-muted">Buyurtmani tezlashtirish uchun to'g'ridan-to'g'ri Telegram orqali yuborishingiz yoki Tijorat taklifini chop etishingiz mumkin.</p>
    `;
  }

  const successModal = new bootstrap.Modal(modalEl);
  successModal.show();
}

// 6. EVENT LISTENERS SETUP
function setupEventListeners() {
  // Search input
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');
  const clearSearchBtn = document.getElementById('clearSearchBtn');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      if (clearSearchBtn) {
        clearSearchBtn.style.display = searchQuery ? 'block' : 'none';
      }
      renderProducts();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      searchQuery = '';
      clearSearchBtn.style.display = 'none';
      renderProducts();
    });
  }

  // Sort select
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderProducts();
    });
  }

  // Price filter
  const priceFilterSelect = document.getElementById('priceFilterSelect');
  if (priceFilterSelect) {
    priceFilterSelect.innerHTML = FILTER_OPTIONS.priceRanges.map((range, idx) => `
      <option value="${idx}">${range.label}</option>
    `).join('');

    priceFilterSelect.addEventListener('change', (e) => {
      selectedPriceRange = parseInt(e.target.value) || 0;
      renderProducts();
    });
  }

  // Client type radio toggle in checkout
  document.querySelectorAll('input[name="clientType"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      const companyFields = document.getElementById('companyFields');
      if (companyFields) {
        if (e.target.value === 'Yuridik shaxs') {
          companyFields.classList.remove('d-none');
        } else {
          companyFields.classList.add('d-none');
        }
      }
    });
  });

  // Order form submit
  const orderForm = document.getElementById('orderForm');
  if (orderForm) {
    orderForm.addEventListener('submit', processOrderSubmit);
  }
}

// 7. THEME TOGGLE (DARK / LIGHT)
function setupThemeToggle() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const savedTheme = localStorage.getItem('sm_theme') || 'light';
  
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('sm_theme', next);
      updateThemeIcon(next);
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('themeToggleIcon');
  if (icon) {
    if (theme === 'dark') {
      icon.className = 'bi bi-sun-fill text-warning';
    } else {
      icon.className = 'bi bi-moon-stars-fill text-dark';
    }
  }
}

// 8. OFFICIAL B2B TIJORAT KELISHUVI & SPECIFICATION GENERATOR
let currentOfferData = null;

function numberToUzbekWords(num) {
  if (!num || num === 0) return "Nol so'm";
  const ones = ["", "bir", "ikki", "uch", "to'rt", "besh", "olti", "yetti", "sakkiz", "to'qqiz"];
  const tens = ["", "o'n", "yigirma", "o'ttiz", "qirq", "ellik", "oltmish", "yetmish", "sakson", "to'qson"];
  
  function convertGroup(n) {
    let res = "";
    const h = Math.floor(n / 100);
    const rem = n % 100;
    const t = Math.floor(rem / 10);
    const o = rem % 10;
    if (h > 0) res += ones[h] + " yuz ";
    if (t > 0) res += tens[t] + " ";
    if (o > 0) res += ones[o] + " ";
    return res.trim();
  }

  let words = "";
  const billion = Math.floor(num / 1000000000);
  const million = Math.floor((num % 1000000000) / 1000000);
  const thousand = Math.floor((num % 1000000) / 1000);
  const remainder = Math.floor(num % 1000);

  if (billion > 0) words += convertGroup(billion) + " milliard ";
  if (million > 0) words += convertGroup(million) + " million ";
  if (thousand > 0) words += convertGroup(thousand) + " ming ";
  if (remainder > 0) words += convertGroup(remainder) + " ";

  words = words.trim();
  if (words) {
    return words.charAt(0).toUpperCase() + words.slice(1) + " so'm 00 tiyin";
  }
  return "Nol so'm";
}

function generateSingleProductOffer(productId) {
  const p = PRODUCTS_DATABASE.find(x => x.id === productId);
  if (!p) return;
  const input = document.getElementById('modalQtyInput');
  const qty = input ? parseInt(input.value) || 1 : 1;
  const singleItem = [{
    id: p.id,
    title: p.title,
    artikul: p.artikul,
    price: p.price,
    quantity: qty
  }];

  // Close product detail modal if open
  const modalEl = document.getElementById('productDetailModal');
  if (modalEl) {
    const modal = bootstrap.Modal.getInstance(modalEl);
    if (modal) modal.hide();
  }

  openCommercialOfferModal(singleItem);
}

function openCommercialOfferModal(customItems = null, customClient = null) {
  // Agar avval rasmiylashtirilgan buyurtma ma'lumotlari mavjud bo'lsa va yangi mahsulot berilmagan bo'lsa
  if (!customItems && currentOfferData && (!store.cart || store.cart.length === 0)) {
    renderCommercialOfferHTML();
    const modalEl = document.getElementById('commercialOfferModal');
    if (modalEl) {
      const modal = new bootstrap.Modal(modalEl);
      modal.show();
    }
    return;
  }

  let items = customItems || (store.cart.length > 0 ? [...store.cart] : null);
  
  // Agar savat bo'sh bo'lsa va mahsulot tanlanmagan bo'lsa, ogohlantirish beramiz
  if (!items || items.length === 0) {
    store.showToast("Tijorat taklifi shakllantirish uchun avval mahsulot tanlang yoki savatga qo'shing!", "warning");
    const catalogEl = document.getElementById('katalog');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
    return;
  }

  const client = customClient || {
    name: "Buyurtmachi",
    company: "Tashkilot / Korxona",
    inn: "—",
    phone: "—",
    address: "O'zbekiston Respublikasi"
  };

  const offerNumber = "TT-" + new Date().getFullYear() + "/" + String(new Date().getMonth()+1).padStart(2, '0') + "-" + Math.floor(100 + Math.random() * 900);
  const offerDate = new Date().toLocaleDateString('uz-UZ', { day: '2-digit', month: '2-digit', year: 'numeric' }) + " y.";

  currentOfferData = { items, client, offerNumber, offerDate };
  renderCommercialOfferHTML();

  const modalEl = document.getElementById('commercialOfferModal');
  if (modalEl) {
    const modal = new bootstrap.Modal(modalEl);
    modal.show();
  }
}

function renderCommercialOfferHTML() {
  const container = document.getElementById('commercialOfferDocContainer');
  if (!container || !currentOfferData) return;

  const { items, client, offerNumber, offerDate } = currentOfferData;
  let totalSum = items.reduce((sum, it) => sum + (it.price * it.quantity), 0);
  
  const isRu = (typeof currentLang !== 'undefined' && currentLang === 'ru');
  let totalWords = isRu 
    ? (typeof numberToRussianWords === 'function' ? numberToRussianWords(totalSum) : numberToUzbekWords(totalSum))
    : numberToUzbekWords(totalSum);

  const docTitle = isRu ? "КОММЕРЧЕСКОЕ СОГЛАШЕНИЕ И СПЕЦИФИКАЦИЯ ПРОДУКЦИИ" : "TIJORAT KELISHUVI VA MAHSULOTLAR SPETSIFIKATSIYASI";
  const docNumberLbl = isRu ? "Номер документа:" : "Hujjat raqami:";
  const docValidityLbl = isRu ? "Срок действия:" : "Amal qilish muddati:";
  const docValidityVal = isRu ? "30 календарных дней" : "30 kalendar kuni";
  const docDateLbl = isRu ? "Дата:" : "Sana:";
  const supplierTitle = isRu ? "ПОСТАВЩИК:" : "YETKAZIB BERUVCHI:";
  const customerTitle = isRu ? "ПОКУПАТЕЛЬ (КЛИЕНТ):" : "BUYURTMACHI (MIJOZ):";
  const qtyUnit = isRu ? "шт" : "dona";

  const rowsHtml = items.map((item, idx) => `
    <tr>
      <td class="text-center fw-bold">${idx + 1}</td>
      <td>
        <strong>${item.title}</strong>
        <div class="small text-muted">${isRu ? 'Артикул / Код стандарта' : 'Artikul / Standart kodi'}: ${item.artikul}</div>
      </td>
      <td class="text-center">${item.quantity} ${qtyUnit}</td>
      <td class="text-end">${store.formatMoney(item.price)}</td>
      <td class="text-end fw-bold">${store.formatMoney(item.price * item.quantity)}</td>
    </tr>
  `).join('');

  container.innerHTML = `
    <div class="commercial-doc-sheet" id="printCommercialSheet">
      <!-- Document Header -->
      <div class="doc-header-brand">
        <div class="d-flex align-items-center gap-3">
          <img src="assets/images/logo.png" alt="STANDART VA METROLOGIYA" class="doc-brand-logo" />
          <div>
            <div class="doc-company-title">"STANDART VA METROLOGIYA" MCHJ</div>
            <div class="small text-muted">${isRu ? 'Центр Качества, Калибровки и Метрологии' : 'Sifat, Kalibrlash va Metrologiya Markazi'}</div>
            <div class="small text-primary fw-bold">O'zDSt ISO/IEC 17025 • ISO 17034</div>
          </div>
        </div>
        <div class="doc-company-requisites">
          <div><strong>${isRu ? 'Адрес:' : 'Manzil:'}</strong> ${isRu ? 'г. Ташкент, Сергелийский район, Узумзор 16-тупик, 18' : 'Toshkent sh., Sergeli tumani, Uzumzor 16-tor ko\'cha 18-uy'}</div>
          <div><strong>Тел:</strong> +998 (90) 939-71-83 | +998 (55) 503-47-15</div>
          <div><strong>Email:</strong> standartmetrolog@bk.ru | <strong>${isRu ? 'Сайт:' : 'Sayt:'}</strong> gsouz.uz</div>
          <div><strong>${isRu ? 'ИНН:' : 'STIR (INN):'}</strong> 305 918 247 | <strong>${isRu ? 'МФО:' : 'MFO:'}</strong> 00440 | <strong>${isRu ? 'Р/с:' : 'H/r:'}</strong> 2020 8000 9005 1234 5001</div>
        </div>
      </div>

      <!-- Document Title & Meta -->
      <div class="doc-title-box">
        <div class="doc-main-title">${docTitle}</div>
        <div class="doc-meta-row">
          <span>${docNumberLbl} <strong>${offerNumber}</strong></span>
          <span>${docValidityLbl} <strong>${docValidityVal}</strong></span>
          <span>${docDateLbl} <strong>${offerDate}</strong></span>
        </div>
      </div>

      <!-- Parties Details -->
      <div class="doc-parties-grid">
        <div>
          <div class="party-box-title">${supplierTitle}</div>
          <div><strong>"STANDART VA METROLOGIYA" MCHJ</strong></div>
          <div>${isRu ? 'Директор:' : 'Direktor:'} Saidov A.M.</div>
          <div>${isRu ? 'Банк:' : 'Bank:'} ATIB "Ipoteka-bank" Toshkent filiali</div>
          <div>${isRu ? 'Счет-фактура:' : 'Hisob-faktura:'} Didox / E-Faktura</div>
        </div>
        <div>
          <div class="party-box-title">${customerTitle}</div>
          <div>${isRu ? 'Организация:' : 'Kompaniya:'} <strong>${client.company || (isRu ? 'Частный заказчик' : 'Xususiy Buyurtmachi')}</strong></div>
          <div>${isRu ? 'Ответственное лицо:' : 'Mas\'ul shaxs:'} <strong>${client.name}</strong></div>
          <div>${isRu ? 'ИНН:' : 'STIR (INN):'} <strong>${client.inn || "—"}</strong></div>
          <div>${isRu ? 'Телефон:' : 'Telefon:'} <strong>${client.phone}</strong></div>
          <div>${isRu ? 'Адрес доставки:' : 'Yetkazish manzili:'} <strong>${client.address}</strong></div>
        </div>
      </div>

      <!-- Products Table -->
      <table class="doc-table">
        <thead>
          <tr>
            <th style="width: 5%;">№</th>
            <th style="width: 50%;">Mahsulot / Standart Namunalar Nomi</th>
            <th style="width: 10%;">Miqdori</th>
            <th style="width: 17%;">Narxi (so'm, QQS bilan)</th>
            <th style="width: 18%;">Jami Summa (so'm)</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHtml}
        </tbody>
      </table>

      <!-- Total Summary -->
      <div class="doc-total-box d-flex justify-content-between align-items-center">
        <div>
          <div class="small fw-bold text-uppercase text-secondary">Summa so'z bilan:</div>
          <div class="doc-words-sum">${totalWords}</div>
        </div>
        <div class="text-end">
          <span class="text-secondary small fw-bold">JAMI TO'LOV (QQS bilan):</span>
          <div class="doc-total-sum">${store.formatMoney(totalSum)}</div>
        </div>
      </div>

      <!-- Commercial Terms & Metrological Guarantee -->
      <div class="doc-terms-box">
        <div class="doc-terms-title"><i class="bi bi-shield-check text-primary me-1"></i> YETKAZIB BERISH VA METROLOGIK KAFOLAT SHARTLARI:</div>
        <ol>
          <li>Barcha taqdim etilayotgan standart namunalar (GSO/CRM) va bufer eritmalari O'zbekiston Respublikasi Davlat Reestridan o'tgan hamda ishlab chiqaruvchining rasmiy metrologik attestatsiya pasporti bilan birga taqdim etiladi.</li>
          <li>O'lchov vositalari qiyoslashdan o'tkazilgan (Davlat qiyoslov sertifikati / Poverka bilan) va foydalanishga to'liq shay holatda yetkaziladi.</li>
          <li>Yetkazib berish muddati: Toshkent shahrida 24 soat ichida (bepul), O'zbekiston viloyatlariga 1-3 ish kunida termobokslarda yetkaziladi.</li>
          <li>To'lov sharti: Yuridik shaxslar uchun 15% yoki 100% oldindan to'lov (Didox / E-Faktura orqali shartnoma asosida).</li>
          <li>Kafolat muddati: Standart namunalarga 2-3 yil, o'lchov asboblariga 12 oydan 24 oygacha to'liq kafolat beriladi.</li>
        </ol>
      </div>

      <!-- Signatures & Official Stamp -->
      <div class="doc-signatures-grid">
        <div class="doc-sign-box">
          <div class="fw-bold mb-1">YETKAZIB BERUVCHI:</div>
          <div>"STANDART VA METROLOGIYA" MCHJ</div>
          <div>Bosh direktor: <strong>A. Saidov</strong></div>
          <div class="doc-sign-line">
            <span>Imzo: _________________</span>
          </div>

          <!-- Official Blue Round Seal Stamp -->
          <div class="doc-stamp-container">
            <div class="doc-blue-seal">
              <span>* O'ZBEKISTON RESPUBLIKASI *</span>
              <span class="seal-star">★ ★ ★</span>
              <span style="font-size: 8px;">"STANDART VA METROLOGIYA"</span>
              <span style="font-weight: 800; text-decoration: underline;">MCHJ</span>
              <span>SIFAT NAZORATI</span>
              <span class="seal-star">★ ★ ★</span>
              <span style="font-size: 7.5px;">TOSHKENT SH. * STIR 305918247</span>
            </div>
          </div>
        </div>

        <div class="doc-sign-box">
          <div class="fw-bold mb-1">BUYURTMACHI (MIJOZ):</div>
          <div>Tashkilot: <strong>${client.company || "Xususiy buyurtmachi"}</strong></div>
          <div>Mas'ul shaxs: <strong>${client.name}</strong></div>
          <div class="doc-sign-line">
            <span>Imzo: _________________</span>
            <span>M.O'.</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function printCommercialOffer() {
  const sheet = document.getElementById('printCommercialSheet');
  if (!sheet) {
    openCommercialOfferModal();
    setTimeout(printCommercialOffer, 350);
    return;
  }

  // Create or reuse hidden iframe dedicated for printing
  let printFrame = document.getElementById('commercialPrintIframe');
  if (!printFrame) {
    printFrame = document.createElement('iframe');
    printFrame.id = 'commercialPrintIframe';
    printFrame.style.position = 'fixed';
    printFrame.style.right = '0';
    printFrame.style.bottom = '0';
    printFrame.style.width = '0';
    printFrame.style.height = '0';
    printFrame.style.border = '0';
    document.body.appendChild(printFrame);
  }

  const doc = printFrame.contentWindow.document;
  doc.open();
  doc.write(`
    <!DOCTYPE html>
    <html lang="uz">
    <head>
      <meta charset="UTF-8">
      <title>Tijorat Kelishuvi — STANDART VA METROLOGIYA MCHJ</title>
      <style>
        @page {
          size: A4 portrait;
          margin: 8mm 12mm;
        }
        * {
          box-sizing: border-box;
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
        body {
          margin: 0;
          padding: 0;
          font-family: 'Segoe UI', Arial, sans-serif;
          font-size: 11px;
          color: #0f172a;
          background: #ffffff;
          line-height: 1.35;
        }
        .commercial-doc-sheet {
          width: 100%;
          max-width: 100%;
          padding: 0;
          margin: 0;
          border: none;
          background: #ffffff;
        }
        .doc-header-brand {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 2px solid #0284c7;
          padding-bottom: 8px;
          margin-bottom: 10px;
        }
        .doc-brand-logo {
          max-height: 55px;
          width: auto;
          object-fit: contain;
        }
        .doc-company-title {
          font-size: 13.5px;
          font-weight: 800;
          color: #0a2540;
          margin-bottom: 2px;
        }
        .doc-company-requisites {
          text-align: right;
          font-size: 9px;
          color: #334155;
          line-height: 1.3;
        }
        .doc-title-box {
          text-align: center;
          margin-bottom: 10px;
          background: #f1f5f9;
          padding: 6px 12px;
          border: 1px solid #cbd5e1;
          border-radius: 4px;
        }
        .doc-main-title {
          font-size: 12.5px;
          font-weight: 800;
          color: #0284c7;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 2px;
        }
        .doc-meta-row {
          display: flex;
          justify-content: space-between;
          font-size: 9.5px;
          color: #475569;
          font-weight: 600;
        }
        .doc-parties-grid {
          display: flex;
          justify-content: space-between;
          gap: 15px;
          margin-bottom: 10px;
          font-size: 9.5px;
          background: #fafafa;
          border: 1px solid #e2e8f0;
          padding: 8px 12px;
          border-radius: 4px;
        }
        .doc-parties-grid > div {
          width: 48%;
        }
        .party-box-title {
          font-weight: 700;
          color: #0a2540;
          text-transform: uppercase;
          font-size: 9px;
          margin-bottom: 4px;
          border-bottom: 1px solid #cbd5e1;
          padding-bottom: 2px;
        }
        .doc-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 9.5px;
          margin-bottom: 10px;
        }
        .doc-table th {
          background-color: #0a2540 !important;
          color: #ffffff !important;
          padding: 5px 8px;
          font-weight: 700;
          border: 1px solid #0a2540;
          text-align: center;
        }
        .doc-table td {
          padding: 5px 8px;
          border: 1px solid #cbd5e1;
          color: #1e293b;
        }
        .doc-table tr:nth-child(even) td {
          background-color: #f8fafc !important;
        }
        .doc-total-box {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #f1f5f9;
          border: 1.5px solid #94a3b8;
          padding: 6px 12px;
          border-radius: 4px;
          margin-bottom: 8px;
          page-break-inside: avoid;
        }
        .doc-total-sum {
          font-size: 12.5px;
          font-weight: 800;
          color: #0284c7;
        }
        .doc-words-sum {
          font-size: 9px;
          font-style: italic;
          color: #334155;
        }
        .doc-terms-box {
          font-size: 8.5px;
          color: #334155;
          margin-bottom: 10px;
          background: #fafafa;
          padding: 6px 10px;
          border-radius: 4px;
          border-left: 3px solid #0284c7;
          page-break-inside: avoid;
        }
        .doc-terms-title {
          font-weight: 700;
          color: #0a2540;
          margin-bottom: 2px;
        }
        .doc-terms-box ol {
          padding-left: 14px;
          margin: 0;
        }
        .doc-terms-box li {
          margin-bottom: 2px;
        }
        .doc-signatures-grid {
          display: flex;
          justify-content: space-between;
          margin-top: 8px;
          padding-top: 8px;
          border-top: 1px dashed #94a3b8;
          font-size: 9.5px;
          position: relative;
          page-break-inside: avoid;
        }
        .doc-sign-box {
          width: 48%;
          position: relative;
        }
        .doc-stamp-container {
          position: absolute;
          top: -12px;
          right: 20px;
          width: 100px;
          height: 100px;
          pointer-events: none;
        }
        .doc-blue-seal {
          width: 100px;
          height: 100px;
          border: 2.5px double #1e40af;
          border-radius: 50%;
          color: #1e40af;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          transform: rotate(-10deg);
          padding: 4px;
          font-size: 7px;
          font-weight: 700;
          line-height: 1.15;
          background: rgba(30, 64, 175, 0.04);
        }
        .doc-blue-seal .seal-star {
          font-size: 8.5px;
          color: #1e40af;
          margin: 1px 0;
        }
        .doc-sign-line {
          margin-top: 25px;
          border-bottom: 1px solid #334155;
          width: 85%;
          display: flex;
          justify-content: space-between;
          font-size: 8.5px;
          color: #64748b;
        }
        .text-center { text-align: center; }
        .text-end { text-align: right; }
        .fw-bold { font-weight: 700; }
      </style>
    </head>
    <body>
      ${sheet.outerHTML}
    </body>
    </html>
  `);
  doc.close();

  setTimeout(() => {
    printFrame.contentWindow.focus();
    printFrame.contentWindow.print();
  }, 350);
}

function downloadCommercialOfferPDF() {
  const element = document.getElementById('printCommercialSheet');
  if (!element) {
    // If modal is not open yet, open it first
    openCommercialOfferModal();
    setTimeout(() => {
      downloadCommercialOfferPDF();
    }, 400);
    return;
  }

  const docNumber = (currentOfferData && currentOfferData.offerNumber)
    ? currentOfferData.offerNumber.replace(/[\/\\]/g, '_')
    : 'TT_2026';
  const fileName = `Tijorat_Kelishuvi_${docNumber}.pdf`;

  store.showToast("Rasmiy PDF hujjat tayyorlanmoqda, iltimos kuting...", "info");

  const opt = {
    margin: [6, 8, 6, 8],
    filename: fileName,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true, letterRendering: true, logging: false },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  if (typeof html2pdf !== 'undefined') {
    html2pdf().set(opt).from(element).save().then(() => {
      store.showToast("Tijorat taklifi PDF fayli muvaffaqiyatli yuklab olindi!", "success");
    }).catch(err => {
      console.warn("html2pdf fallback to browser print:", err);
      window.print();
    });
  } else {
    window.print();
  }
}

function sendOfferViaTelegram() {
  if (!currentOfferData) return;
  const { items, client, offerNumber } = currentOfferData;
  let totalSum = items.reduce((sum, it) => sum + (it.price * it.quantity), 0);

  let text = `📄 *TIJORAT KELISHUVI SO'ROVI — ${offerNumber}*\n\n`;
  text += `🏢 *Tashkilot:* ${client.company}\n`;
  text += `👤 *Mas'ul shaxs:* ${client.name}\n`;
  text += `📞 *Telefon:* ${client.phone}\n`;
  if (client.inn) text += `🔢 *STIR:* ${client.inn}\n`;
  text += `📍 *Manzil:* ${client.address}\n\n`;
  text += `📦 *MAHSULOTLAR SPETSIFIKATSIYASI:*\n`;
  items.forEach((it, idx) => {
    text += `${idx + 1}. ${it.title} (${it.artikul}) — ${it.quantity} dona x ${store.formatMoney(it.price)} = ${store.formatMoney(it.price * it.quantity)}\n`;
  });
  text += `\n💰 *JAMI SUMMA:* ${store.formatMoney(totalSum)}\n`;
  text += `📅 *Sana:* ${currentOfferData.offerDate}\n\n`;
  text += `Iltimos, ushbu kelishuv bo'yicha rasmiy hisob-faktura (Didox) va shartnoma yuborsangiz.`;

  const encoded = encodeURIComponent(text);
  window.open(`https://t.me/share/url?url=${encoded}`, '_blank');
}

