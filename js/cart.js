/**
 * "STANDART VA METROLOGIYA" MCHJ
 * Savat (Cart), Sevimlilar (Favorites) va Taqqoslash (Compare) boshqaruvi
 */

class StoreState {
  constructor() {
    this.cart = this.loadFromStorage('sm_cart', []);
    this.favorites = this.loadFromStorage('sm_favorites', []);
    this.compareList = this.loadFromStorage('sm_compare', []);
    this.currency = "so'm";
    this.companyPhone = "+998 90 939-71-83";
    this.telegramUsername = "standartgso_uz";
  }

  loadFromStorage(key, fallback) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : fallback;
    } catch (e) {
      console.warn("Storage loading error:", e);
      return fallback;
    }
  }

  saveToStorage(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.warn("Storage saving error:", e);
    }
  }

  // CART OPERATIONS
  addToCart(productId, qty = 1) {
    const product = PRODUCTS_DATABASE.find(p => p.id === productId);
    if (!product) return;
    // Buyurtma asosidagi mahsulotning narxi yo'q — savat o'rniga ariza oynasi
    if (product.onOrder) {
      if (typeof openOrderRequest === 'function') openOrderRequest(productId);
      return;
    }

    const existingIndex = this.cart.findIndex(item => item.id === productId);
    if (existingIndex > -1) {
      this.cart[existingIndex].quantity += qty;
    } else {
      this.cart.push({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        artikul: product.artikul,
        categoryName: product.categoryName,
        quantity: qty
      });
    }

    this.saveToStorage('sm_cart', this.cart);
    this.updateBadges();
    this.renderCart();
    this.showToast(`"${product.title.substring(0, 30)}..." savatga qo'shildi!`, "success");
  }

  updateQuantity(productId, delta) {
    const itemIndex = this.cart.findIndex(item => item.id === productId);
    if (itemIndex > -1) {
      this.cart[itemIndex].quantity += delta;
      if (this.cart[itemIndex].quantity <= 0) {
        this.cart.splice(itemIndex, 1);
      }
      this.saveToStorage('sm_cart', this.cart);
      this.updateBadges();
      this.renderCart();
    }
  }

  removeFromCart(productId) {
    this.cart = this.cart.filter(item => item.id !== productId);
    this.saveToStorage('sm_cart', this.cart);
    this.updateBadges();
    this.renderCart();
    this.showToast("Mahsulot savatdan olib tashlandi", "info");
  }

  clearCart() {
    this.cart = [];
    this.saveToStorage('sm_cart', this.cart);
    this.updateBadges();
    this.renderCart();
  }

  getCartTotals() {
    const totalCount = this.cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    return {
      totalCount,
      totalPrice,
      totalPriceFormatted: this.formatMoney(totalPrice)
    };
  }

  // FAVORITES
  toggleFavorite(productId) {
    const product = PRODUCTS_DATABASE.find(p => p.id === productId);
    if (!product) return;

    const index = this.favorites.indexOf(productId);
    if (index > -1) {
      this.favorites.splice(index, 1);
      this.showToast("Sevimlilardan olib tashlandi", "info");
    } else {
      this.favorites.push(productId);
      this.showToast(`"${product.title.substring(0, 30)}..." sevimlilarga qo'shildi`, "success");
    }
    this.saveToStorage('sm_favorites', this.favorites);
    this.updateBadges();
    this.renderFavorites();
  }

  isFavorite(productId) {
    return this.favorites.includes(productId);
  }

  // COMPARE
  toggleCompare(productId) {
    const product = PRODUCTS_DATABASE.find(p => p.id === productId);
    if (!product) return;

    const index = this.compareList.indexOf(productId);
    if (index > -1) {
      this.compareList.splice(index, 1);
      this.showToast("Taqqoslashdan olib tashlandi", "info");
    } else {
      if (this.compareList.length >= 4) {
        this.showToast("Bir vaqtning o'zida ko'pi bilan 4 ta mahsulotni taqqoslash mumkin!", "warning");
        return;
      }
      this.compareList.push(productId);
      this.showToast(`"${product.title.substring(0, 30)}..." taqqoslashga qo'shildi`, "success");
    }
    this.saveToStorage('sm_compare', this.compareList);
    this.updateBadges();
    this.renderCompare();
  }

  isCompared(productId) {
    return this.compareList.includes(productId);
  }

  formatMoney(num) {
    const curr = (typeof currentLang !== 'undefined' && currentLang === 'ru') ? "сум" : this.currency;
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " " + curr;
  }

  // BADGE UPDATES
  updateBadges() {
    const { totalCount } = this.getCartTotals();
    const cartBadges = document.querySelectorAll('.cart-badge-count');
    cartBadges.forEach(badge => {
      badge.textContent = totalCount;
      badge.style.display = totalCount > 0 ? 'inline-flex' : 'none';
    });

    const favBadges = document.querySelectorAll('.fav-badge-count');
    favBadges.forEach(badge => {
      badge.textContent = this.favorites.length;
      badge.style.display = this.favorites.length > 0 ? 'inline-flex' : 'none';
    });

    const compBadges = document.querySelectorAll('.compare-badge-count');
    compBadges.forEach(badge => {
      badge.textContent = this.compareList.length;
      badge.style.display = this.compareList.length > 0 ? 'inline-flex' : 'none';
    });

    // Update heart and compare buttons in product cards
    document.querySelectorAll('[data-fav-btn]').forEach(btn => {
      const id = btn.getAttribute('data-fav-btn');
      if (this.isFavorite(id)) {
        btn.classList.add('active');
        btn.innerHTML = '<i class="bi bi-heart-fill text-danger"></i>';
      } else {
        btn.classList.remove('active');
        btn.innerHTML = '<i class="bi bi-heart"></i>';
      }
    });

    document.querySelectorAll('[data-comp-btn]').forEach(btn => {
      const id = btn.getAttribute('data-comp-btn');
      if (this.isCompared(id)) {
        btn.classList.add('active');
        btn.title = "Taqqoslashdan chiqarish";
      } else {
        btn.classList.remove('active');
        btn.title = "Taqqoslashga qo'shish";
      }
    });
  }

  // RENDER CART DRAWER
  renderCart() {
    const cartContainer = document.getElementById('cartItemsList');
    const emptyState = document.getElementById('cartEmptyState');
    const cartFooter = document.getElementById('cartFooter');
    const cartTotalAmount = document.getElementById('cartTotalAmount');

    if (!cartContainer) return;

    if (this.cart.length === 0) {
      if (cartContainer) cartContainer.innerHTML = '';
      if (emptyState) emptyState.classList.remove('d-none');
      if (cartFooter) cartFooter.classList.add('d-none');
      return;
    }

    if (emptyState) emptyState.classList.add('d-none');
    if (cartFooter) cartFooter.classList.remove('d-none');

    const { totalPriceFormatted } = this.getCartTotals();
    if (cartTotalAmount) cartTotalAmount.textContent = totalPriceFormatted;

    cartContainer.innerHTML = this.cart.map(item => `
      <div class="cart-item-card">
        <img src="${item.image}" alt="${item.title}" class="cart-item-img" />
        <div class="cart-item-info">
          <div class="cart-item-cat">${item.categoryName} • ${item.artikul}</div>
          <h4 class="cart-item-title">${item.title}</h4>
          <div class="cart-item-price">${this.formatMoney(item.price)}</div>
          
          <div class="cart-item-actions">
            <div class="qty-counter">
              <button class="qty-btn" onclick="store.updateQuantity('${item.id}', -1)">-</button>
              <span class="qty-val">${item.quantity}</span>
              <button class="qty-btn" onclick="store.updateQuantity('${item.id}', 1)">+</button>
            </div>
            <div class="cart-item-subtotal">
              ${this.formatMoney(item.price * item.quantity)}
            </div>
            <button class="cart-remove-btn" onclick="store.removeFromCart('${item.id}')" title="O'chirish">
              <i class="bi bi-trash3"></i>
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  // RENDER FAVORITES MODAL
  renderFavorites() {
    const favContainer = document.getElementById('favoritesItemsList');
    const favEmpty = document.getElementById('favoritesEmptyState');
    if (!favContainer) return;

    const favProducts = PRODUCTS_DATABASE.filter(p => this.favorites.includes(p.id));

    if (favProducts.length === 0) {
      favContainer.innerHTML = '';
      if (favEmpty) favEmpty.classList.remove('d-none');
      return;
    }

    if (favEmpty) favEmpty.classList.add('d-none');

    favContainer.innerHTML = favProducts.map(p => `
      <div class="fav-item-row">
        <img src="${p.image}" alt="${p.title}" class="fav-item-img" />
        <div class="fav-item-details">
          <span class="fav-item-code">${p.artikul}</span>
          <h4 class="fav-item-title">${p.title}</h4>
          <div class="fav-item-price">${p.priceFormatted}</div>
        </div>
        <div class="fav-item-controls">
          <button class="btn btn-sm btn-primary-custom" onclick="store.addToCart('${p.id}');">
            <i class="bi bi-cart-plus"></i> Savatga
          </button>
          <button class="btn btn-sm btn-outline-danger" onclick="store.toggleFavorite('${p.id}')">
            <i class="bi bi-trash"></i>
          </button>
        </div>
      </div>
    `).join('');
  }

  // RENDER COMPARE MODAL
  renderCompare() {
    const compareContainer = document.getElementById('compareContent');
    const compareEmpty = document.getElementById('compareEmptyState');
    if (!compareContainer) return;

    const comparedProducts = PRODUCTS_DATABASE.filter(p => this.compareList.includes(p.id));

    if (comparedProducts.length === 0) {
      compareContainer.innerHTML = '';
      if (compareEmpty) compareEmpty.classList.remove('d-none');
      return;
    }

    if (compareEmpty) compareEmpty.classList.add('d-none');

    // Collect unique spec keys across compared products
    const specKeys = new Set();
    comparedProducts.forEach(p => {
      Object.keys(p.specs).forEach(k => specKeys.add(k));
    });

    let headerHtml = `
      <div class="compare-table-wrapper">
        <table class="table table-bordered compare-table">
          <thead>
            <tr>
              <th class="spec-label-col">Texnik parametrlar</th>
              ${comparedProducts.map(p => `
                <th class="product-col">
                  <div class="compare-product-header">
                    <button class="btn-close-compare" onclick="store.toggleCompare('${p.id}')">×</button>
                    <img src="${p.image}" alt="${p.title}" class="compare-thumb" />
                    <h5 class="compare-title">${p.title}</h5>
                    <div class="compare-price">${p.priceFormatted}</div>
                    <button class="btn btn-sm btn-primary-custom w-100 mt-2" onclick="store.addToCart('${p.id}')">
                      <i class="bi bi-cart-plus"></i> Savatga
                    </button>
                  </div>
                </th>
              `).join('')}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="fw-bold">Kategoriya</td>
              ${comparedProducts.map(p => `<td>${p.categoryName}</td>`).join('')}
            </tr>
            <tr>
              <td class="fw-bold">Artikul / Kod</td>
              ${comparedProducts.map(p => `<td><span class="badge bg-light text-dark border">${p.artikul}</span></td>`).join('')}
            </tr>
            ${Array.from(specKeys).map(key => `
              <tr>
                <td class="fw-semibold text-muted">${key}</td>
                ${comparedProducts.map(p => `<td>${p.specs[key] || '<span class="text-muted">—</span>'}</td>`).join('')}
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;

    compareContainer.innerHTML = headerHtml;
  }

  // TOAST NOTIFICATION
  showToast(message, type = "info") {
    let container = document.getElementById('toastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toastContainer';
      container.className = 'toast-container-custom';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `custom-toast toast-${type} animate-slide-in`;
    
    let icon = "bi-info-circle-fill";
    if (type === "success") icon = "bi-check-circle-fill";
    if (type === "warning") icon = "bi-exclamation-triangle-fill";
    if (type === "danger") icon = "bi-x-circle-fill";

    toast.innerHTML = `
      <i class="bi ${icon} toast-icon"></i>
      <span class="toast-text">${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('animate-slide-out');
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }
}

// Global Store Instance
const store = new StoreState();
