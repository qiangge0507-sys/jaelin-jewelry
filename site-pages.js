function ensureChrome() {
  if (!document.querySelector(".site-header")) {
    document.body.insertAdjacentHTML("afterbegin", `
      <div class="delivery-bar">Lagos delivery only / 目前仅支持拉各斯地区配送</div>
      <header class="site-header">
        <div class="container">
          <div class="nav-shell">
            <a class="brand" href="index.html" aria-label="Jaelin Jewelry Home"><img src="assets/jaelin-logo.jpg" alt="Jaelin Jewelry logo"></a>
            <nav class="desktop-nav" aria-label="Primary navigation">
              <a href="index.html">Home 首页</a>
              <a href="collection.html">Products 产品</a>
              <a href="new-arrivals.html">New Arrivals 新品</a>
              <a href="gift-guide.html">Gift Guide 礼物指南</a>
              <a href="about.html">About 品牌故事</a>
              <a href="contact.html">Contact 联系</a>
            </nav>
            <div class="nav-actions">
              <button class="icon-btn" type="button" data-open-cart aria-label="Cart">
                <svg class="icon" viewBox="0 0 24 24"><path d="M6 8h14l-1.2 11H7.2L6 8z"></path><path d="M9 8a3 3 0 0 1 6 0"></path></svg>
                <span class="count-badge" data-cart-count>0</span>
              </button>
              <a class="btn btn-primary" href="collection.html">Shop Now 立即选购</a>
              <button class="icon-btn hamburger" data-menu-toggle aria-label="Open menu" aria-expanded="false"><svg class="icon" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"></path></svg></button>
            </div>
          </div>
        </div>
      </header>
      <nav class="mobile-menu" data-mobile-menu aria-label="Mobile navigation">
        <a href="index.html">Home 首页</a><a href="collection.html">Products 产品</a><a href="new-arrivals.html">New Arrivals 新品</a><a href="gift-guide.html">Gift Guide 礼物指南</a><a href="about.html">About 品牌故事</a><a href="contact.html">Contact 联系</a>
      </nav>`);
  }
  if (!document.querySelector(".site-footer")) {
    document.body.insertAdjacentHTML("beforeend", `
      <footer class="site-footer">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-logo"><img src="assets/jaelin-logo.jpg" alt="Jaelin Jewelry logo"><p>Priceless Beauty / 无价的美</p></div>
            <div class="footer-col"><h4>Shop 选购</h4><a href="collection.html#necklaces">Necklaces 项链</a><a href="collection.html#bracelets">Bracelets 手链</a><a href="collection.html#rings">Rings 戒指</a><a href="collection.html#earrings">Stud Earrings 耳钉</a></div>
            <div class="footer-col"><h4>Service 服务</h4><a href="gift-guide.html">Gift Guide 礼物指南</a><a href="contact.html">WhatsApp Order WhatsApp 下单</a><p>Lagos delivery only 仅配送拉各斯</p></div>
            <div class="footer-col"><h4>Contact 联系</h4><p>Lagos, Nigeria</p><p>WhatsApp: 9121333331</p><p>Jaelin Jewelry</p></div>
          </div>
          <div class="copyright">© 2026 Jaelin Jewelry. All rights reserved.</div>
        </div>
      </footer>
      <div class="cart-drawer" data-cart-drawer aria-hidden="true">
        <div class="cart-panel" role="dialog" aria-label="Shopping cart">
          <div class="cart-head"><h3>Cart 购物车</h3><button class="icon-btn" type="button" data-close-cart aria-label="Close cart">×</button></div>
          <div class="cart-items" data-cart-items></div>
          <div class="cart-foot">
            <div class="cart-total"><span>Total 合计</span><strong data-cart-total>₦0</strong></div>
            <p class="muted">Orders are confirmed on WhatsApp. Delivery is available in Lagos only.<br>订单将通过 WhatsApp 确认，目前仅支持拉各斯地区配送。</p>
            <button class="btn btn-primary" type="button" data-checkout>Checkout on WhatsApp 通过 WhatsApp 下单</button>
          </div>
        </div>
      </div>
      <div class="toast" data-toast></div>`);
  }
}

ensureChrome();

const toast = document.querySelector("[data-toast]");
const cartDrawer = document.querySelector("[data-cart-drawer]");
const cartItemsNode = document.querySelector("[data-cart-items]");
const cartTotalNode = document.querySelector("[data-cart-total]");
const cartCounts = document.querySelectorAll("[data-cart-count]");
const WHATSAPP_NUMBER = "2349121333331";

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2400);
}

function getCart() {
  try {
    return JSON.parse(localStorage.getItem("jaelinCart") || "[]");
  } catch {
    return [];
  }
}

function setCart(cart) {
  localStorage.setItem("jaelinCart", JSON.stringify(cart));
  renderCart();
}

function productById(id) {
  return (window.JAELIN_PRODUCTS || JAELIN_PRODUCTS).find((product) => product.id === id);
}

function addToCart(id) {
  const product = productById(id);
  if (!product) return;
  const cart = getCart();
  const existing = cart.find((item) => item.id === id);
  if (existing) existing.qty += 1;
  else cart.push({ id, qty: 1 });
  setCart(cart);
  openCart();
  showToast(`${product.nameEn} added / 已加入购物车`);
}

function removeFromCart(id) {
  setCart(getCart().filter((item) => item.id !== id));
}

function updateQty(id, delta) {
  const cart = getCart().map((item) => item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item);
  setCart(cart);
}

function openCart() {
  if (!cartDrawer) return;
  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
}

function closeCart() {
  if (!cartDrawer) return;
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
}

function checkoutWhatsApp() {
  const cart = getCart();
  if (!cart.length) {
    showToast("Your cart is empty / 购物车为空");
    return;
  }
  const lines = cart.map((item, index) => {
    const product = productById(item.id);
    return `${index + 1}. ${product.nameEn} / ${product.nameZh} x${item.qty} - ${product.priceLabel}`;
  });
  const total = cart.reduce((sum, item) => sum + (productById(item.id)?.price || 0) * item.qty, 0);
  const text = [
    "Hello Jaelin Jewelry, I would like to order:",
    "您好 Jaelin Jewelry，我想下单：",
    "",
    ...lines,
    "",
    `Total / 合计: ₦${total.toLocaleString("en-NG")}`,
    "Delivery / 配送: Lagos only 拉各斯地区",
    "",
    "Please confirm availability and delivery fee. 请确认库存和配送费。"
  ].join("\n");
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
}

function renderCart() {
  const cart = getCart();
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  cartCounts.forEach((node) => { node.textContent = String(count); });
  if (!cartItemsNode) return;

  if (!cart.length) {
    cartItemsNode.innerHTML = `<p class="cart-empty">Your cart is empty.<br>购物车为空。</p>`;
    if (cartTotalNode) cartTotalNode.textContent = "₦0";
    return;
  }

  cartItemsNode.innerHTML = cart.map((item) => {
    const product = productById(item.id);
    if (!product) return "";
    return `
      <article class="cart-line">
        <img src="${product.image}" alt="${product.nameEn}">
        <div>
          <h4>${product.nameEn}</h4>
          <p>${product.nameZh}</p>
          <strong>${product.priceLabel}</strong>
          <div class="qty">
            <button type="button" data-qty="${product.id}" data-delta="-1">−</button>
            <span>${item.qty}</span>
            <button type="button" data-qty="${product.id}" data-delta="1">+</button>
            <button type="button" data-remove="${product.id}">Remove 删除</button>
          </div>
        </div>
      </article>`;
  }).join("");
  const total = cart.reduce((sum, item) => sum + (productById(item.id)?.price || 0) * item.qty, 0);
  if (cartTotalNode) cartTotalNode.textContent = `₦${total.toLocaleString("en-NG")}`;
}

function productCard(product, badge = "") {
  return `
    <article class="product-card" id="${product.id}" data-product-card data-category="${product.category}">
      <a class="product-media" href="collection.html#${product.id}" aria-label="${product.nameEn}">
        <img src="${product.image}" alt="${product.nameEn}">
      </a>
      <div class="product-info">
        ${badge ? `<span class="badge">${badge}</span>` : ""}
        <p class="product-category">${product.categoryEn} / ${product.categoryZh}</p>
        <h3>${product.nameEn}<span>${product.nameZh}</span></h3>
        <p>${product.detailEn}<br>${product.detailZh}</p>
        <p class="price">${product.priceLabel}</p>
        <div class="card-actions">
          <button class="btn btn-primary" type="button" data-add-cart="${product.id}">Add to Cart 加入购物车</button>
          <button class="heart" type="button" data-wishlist aria-label="Wishlist">♡</button>
        </div>
      </div>
    </article>`;
}

function renderProducts() {
  document.querySelectorAll("[data-products]").forEach((grid) => {
    const mode = grid.dataset.products;
    let products = [...JAELIN_PRODUCTS];
    if (mode === "home") {
      products = ["necklaces", "bracelets", "rings", "earrings"].flatMap((category) => JAELIN_PRODUCTS.filter((p) => p.category === category).slice(0, 2));
    } else if (mode === "new") {
      products = JAELIN_PRODUCTS.slice(-24).reverse();
    } else if (grid.dataset.category) {
      products = products.filter((product) => product.category === grid.dataset.category);
    }
    grid.innerHTML = products.map((product, index) => productCard(product, index < 4 ? "New 新品" : "")).join("");
  });
}

function applyFilters(category) {
  document.querySelectorAll("[data-product-card]").forEach((card) => {
    card.hidden = category !== "all" && card.dataset.category !== category;
  });
  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === category);
  });
}

const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    const open = mobileMenu.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });
}

document.addEventListener("click", (event) => {
  const add = event.target.closest("[data-add-cart]");
  if (add) addToCart(add.dataset.addCart);

  const cartOpen = event.target.closest("[data-open-cart]");
  if (cartOpen) openCart();

  const close = event.target.closest("[data-close-cart]");
  if (close) closeCart();

  const checkout = event.target.closest("[data-checkout]");
  if (checkout) checkoutWhatsApp();

  const qty = event.target.closest("[data-qty]");
  if (qty) updateQty(qty.dataset.qty, Number(qty.dataset.delta));

  const remove = event.target.closest("[data-remove]");
  if (remove) removeFromCart(remove.dataset.remove);

  const filter = event.target.closest("[data-filter]");
  if (filter) applyFilters(filter.dataset.filter);

  const heart = event.target.closest("[data-wishlist]");
  if (heart) {
    heart.classList.toggle("active");
    if (heart.classList.contains("heart")) heart.textContent = heart.classList.contains("active") ? "♥" : "♡";
    showToast("Saved to wishlist / 已收藏");
  }
});

document.querySelectorAll("[data-contact-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = form.querySelector("[name='name']")?.value.trim();
    const message = form.querySelector("[name='message']")?.value.trim();
    const text = `Hello Jaelin Jewelry, my name is ${name || ""}. ${message || "I would like to ask about your jewelry."}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  });
});

renderProducts();
renderCart();
