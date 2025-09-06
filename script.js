// Data produk dummy
const PRODUCTS = [
  {
    id: "Madu-01",
    name: "Madu Sehat Lambung An-Nasr",
    category: "Madu",
    price: 60000,
    rating: 4.8,
    image: "images/1.jpeg",
    desc: "Madu Sehat Lambung An Nasr untuk kesehatan lambung kita.",
    benefits: [
      "Membantu mengurangi gangguan lambung",
      "Menjaga stamina",
      "Kaya antioksidan",
    ],
  },
  {
    id: "Madu-02",
    name: "Zalfira Dates Honey",
    category: "Madu",
    price: 24000,
    rating: 4.7,
    image: "images/2.jpeg",
    desc: "Baik untuk Kesehatan Anak.",
    benefits: [
      "Meningkatkan nafsu makan",
      "Menjaga kesehatan anak",
      "Menyegarkan badan",
    ],
  },
  {
    id: "Suplemen-01",
    name: "Habatussauda' Hulbah 4 in 1 60 kapsul ",
    category: "Suplemen",
    price: 50000,
    rating: 4.8,
    image: "images/3.jpeg",
    desc: "Membantu memelihara Daya Tahan Tubuh.",
    benefits: [
      "Meningkatkan Daya Tahan Tubuh",
      "Mendukung metabolisme",
      "Antioksidan tinggi",
    ],
  },
  {
    id: "Madu-03",
    name: "Madu Batuk An-Nasr",
    category: "Madu",
    price: 40000,
    rating: 4.7,
    image: "images/4.jpeg",
    desc: "Membantu untuk meredakan batuk.",
    benefits: [
      "Membantu meredakan batuk",
      "Mengurangi batuk berdahak",
      "Menyegarkan tenggorokan",
    ],
  },
  {
    id: "Madu-04",
    name: "Madu Mazalt Gold",
    category: "Madu",
    price: 27000,
    rating: 4.7,
    image: "images/5.jpeg",
    desc: "Baik Untuk Kesehatan Anak.",
    benefits: [
      "Meningkatkan nafsu makan Anak",
      "Menjaga Suplement Anak",
      "Menjaga Daya Tahan Tubuh Anak",
    ],
  },
  {
    id: "Madu-05",
    name: "Madu Kurma Ajaban Gold",
    category: "Madu",
    price: 30000,
    rating: 4.7,
    image: "images/6.jpeg",
    desc: "Baik Untuk Kesehatan Anak.",
    benefits: [
      "Meningkatkan nafsu makan Anak",
      "Menjaga Suplement Anak",
      "Menjaga Daya Tahan Tubuh Anak",
    ],
  },
  {
    id: "SUP-01",
    name: "Habatussauda' SPR 200 kapsul",
    category: "Suplemen",
    price: 90000,
    rating: 4.9,
    image: "images/7.jpeg",
    desc: "Membantu Memelihara daya tahan tubuh.",
    benefits: [
      "Mendukung imunitas",
      "Antioksidan alami",
      "Menjaga Daya Tahan Tubuh",
    ],
  },
  {
    id: "SUP-02",
    name: "Habatussauda' Hulbah 4 in 1 200 Kapsul",
    category: "Suplemen",
    price: 95000,
    rating: 4.7,
    image: "images/8.jpeg",
    desc: "Membantu Memelihara daya tahan tubuh.",
    benefits: [
      "Mendukung imunitas",
      "Antioksidan alami",
      "Menjaga Daya Tahan Tubuh",
    ],
  },
  {
    id: "SUP-01",
    name: "Habatussauda' SPR 60 Kapsul",
    category: "Suplemen",
    price: 50000,
    rating: 4.9,
    image: "images/9.jpeg",
    desc: "Membantu Memelihara daya tahan tubuh.",
    benefits: ["Antioksidan", "Mendukung vitalitas", "Seduhan hangat nikmat"],
  },
  {
    id: "SUP-02",
    name: "Habbatussauda' SPR 120 Kapsul",
    category: "Suplemen",
    price: 70000,
    rating: 4.7,
    image: "images/10.jpeg",
    desc: "Membantu Memelihara daya tahan tubuh.",
    benefits: ["Antioksidan", "Mendukung vitalitas", "Seduhan hangat nikmat"],
  },
  {
    id: "Madu-06",
    name: "Sari Kurma Al-Sabira",
    category: "Madu",
    price: 29000,
    rating: 4.8,
    image: "images/11.jpeg",
    desc: "Baik untuk Suplemen Kesehatan dan Menambah Stamina.",
    benefits: ["Antioksidan", "Mendukung vitalitas", "Menambah Stamina"],
  },
  {
    id: "SUP-02",
    name: "Habbatussauda' Hulbah 4 in 1 100 Kapsul ",
    category: "Suplemen",
    price: 65000,
    rating: 4.8,
    image: "images/12.jpeg",
    desc: "Membantu Memelihara daya tahan tubuh.",
    benefits: [
      "Mendukung imunitas",
      "Antioksidan alami",
      "Menjaga Daya Tahan Tubuh",
    ],
  },
];

const state = {
  query: '',
  category: 'Semua',
  sort: 'popular',
  cart: {}, // id -> qty
};

const currency = value => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(value);

function uniqueCategories() {
  const set = new Set(PRODUCTS.map(p => p.category));
  return ['Semua', ...Array.from(set)];
}

function filterAndSortProducts() {
  let items = PRODUCTS.filter(p =>
    (!state.query || p.name.toLowerCase().includes(state.query)) &&
    (state.category === 'Semua' || p.category === state.category)
  );

  switch (state.sort) {
    case 'price_asc': items.sort((a, b) => a.price - b.price); break;
    case 'price_desc': items.sort((a, b) => b.price - a.price); break;
    case 'name_asc': items.sort((a, b) => a.name.localeCompare(b.name)); break;
    default: items.sort((a, b) => b.rating - a.rating); break; // popular by rating
  }
  return items;
}

function renderChips() {
  const wrap = document.getElementById('categoryChips');
  wrap.innerHTML = '';
  uniqueCategories().forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'chip';
    btn.type = 'button';
    btn.role = 'tab';
    btn.setAttribute('aria-selected', String(state.category === cat));
    btn.textContent = cat;
    btn.addEventListener('click', () => {
      state.category = cat;
      document.querySelectorAll('.chip').forEach(c => c.setAttribute('aria-selected', 'false'));
      btn.setAttribute('aria-selected', 'true');
      renderProducts();
    });
    wrap.appendChild(btn);
  });
}

function productCard(product) {
  const { id, name, category, price, rating, image } = product;
  const card = document.createElement('article');
  card.className = 'card';
  card.innerHTML = `
    <div class="card-media">
      <img src="${image}" alt="${name}" loading="lazy" />
    </div>
    <div class="card-body">
      <h4 class="card-title">${name}</h4>
      <div class="card-meta">
        <span>${category} • ⭐ ${rating}</span>
        <span class="price">${currency(price)}</span>
      </div>
      <div class="card-actions">
        <button class="btn ghost" data-id="${id}" data-action="detail">Detail</button>
        <button class="btn primary" data-id="${id}" data-action="add">Tambah</button>
      </div>
    </div>
  `;
  return card;
}

function renderProducts() {
  const grid = document.getElementById('productGrid');
  // Skeleton loading feel
  grid.innerHTML = '';
  const skeletons = Array.from({ length: 8 }).map(() => {
    const sk = document.createElement('div');
    sk.className = 'card';
    sk.innerHTML = `<div class="card-media" style="background:linear-gradient(90deg,#0e1214, #111518, #0e1214); background-size:200% 100%; animation: shimmer 1.2s infinite linear;"></div><div class="card-body"><div class="card-title" style="height:18px; background:#151a1c; border-radius:8px;"></div><div class="card-meta" style="height:16px; opacity:.6;"></div><div class="card-actions"><span class="btn ghost" style="pointer-events:none; opacity:.5;">Detail</span><span class="btn" style="pointer-events:none; opacity:.5;">Tambah</span></div></div>`;
    return sk;
  });
  skeletons.forEach(s => grid.appendChild(s));

  const items = filterAndSortProducts();
  if (items.length === 0) {
    const empty = document.createElement('div');
    empty.style.gridColumn = '1 / -1';
    empty.style.opacity = '0.8';
    empty.textContent = 'Tidak ada produk yang cocok.';
    grid.innerHTML = '';
    grid.appendChild(empty);
    return;
  }
  // Render with small delay for shimmer effect
  setTimeout(() => {
    grid.innerHTML = '';
    items.forEach(p => grid.appendChild(productCard(p)));
    attachCardTilt();
  }, 200);
}

function updateCartBadge() {
  const count = Object.values(state.cart).reduce((a, b) => a + b, 0);
  document.getElementById('cartCount').textContent = String(count);
  const floating = document.getElementById('floatingCount');
  if (floating) floating.textContent = String(count);
}

function addToCart(id, qty = 1) {
  state.cart[id] = (state.cart[id] || 0) + qty;
  updateCartBadge();
  renderCart();
  showToast('Ditambahkan', 'Produk masuk ke keranjang.');
}

function removeFromCart(id) {
  delete state.cart[id];
  updateCartBadge();
  renderCart();
}

function changeQty(id, delta) {
  const next = (state.cart[id] || 0) + delta;
  if (next <= 0) removeFromCart(id); else { state.cart[id] = next; renderCart(); updateCartBadge(); }
}

function cartEntries() {
  return Object.entries(state.cart).map(([id, qty]) => ({ product: PRODUCTS.find(p => p.id === id), qty }));
}

function renderCart() {
  const wrap = document.getElementById('cartItems');
  wrap.innerHTML = '';
  const entries = cartEntries();
  let subtotal = 0;
  if (entries.length === 0) {
    const empty = document.createElement('p');
    empty.style.opacity = '0.8';
    empty.textContent = 'Keranjang masih kosong.';
    wrap.appendChild(empty);
  } else {
    entries.forEach(({ product, qty }) => {
      const line = document.createElement('div');
      line.className = 'cart-item';
      const lineTotal = product.price * qty; subtotal += lineTotal;
      line.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <div>
          <h5 class="title">${product.name}</h5>
          <div style="opacity:.75">${currency(product.price)} • ⭐ ${product.rating}</div>
        </div>
        <div style="display:grid; gap:6px; justify-items:end;">
          <div class="qty" role="group" aria-label="Ubah jumlah">
            <button aria-label="Kurangi" data-action="dec" data-id="${product.id}">−</button>
            <span>${qty}</span>
            <button aria-label="Tambah" data-action="inc" data-id="${product.id}">+</button>
          </div>
          <div style="font-weight:700; color:var(--green-300)">${currency(lineTotal)}</div>
          <button class="ghost" data-action="remove" data-id="${product.id}">Hapus</button>
        </div>
      `;
      wrap.appendChild(line);
    });
  }
  document.getElementById('cartSubtotal').textContent = currency(subtotal);
}

function openCart() {
  const dlg = document.getElementById('cartModal');
  if (!dlg.open) dlg.showModal();
}
function closeCart() {
  const dlg = document.getElementById('cartModal');
  if (dlg.open) dlg.close();
}

function attachEvents() {
  // Search
  const search = document.getElementById('searchInput');
  search.addEventListener('input', (e) => {
    state.query = e.target.value.toLowerCase().trim();
    renderProducts();
  });
  document.getElementById('clearSearch').addEventListener('click', () => {
    search.value = '';
    state.query = '';
    renderProducts();
    search.focus();
  });

  // Sort
  document.getElementById('sortSelect').addEventListener('change', (e) => {
    state.sort = e.target.value;
    renderProducts();
  });

  // Grid delegation: add to cart/detail
  document.getElementById('productGrid').addEventListener('click', (e) => {
    const target = e.target.closest('button');
    if (!target) return;
    const id = target.getAttribute('data-id');
    const action = target.getAttribute('data-action');
    if (action === 'add') { addToCart(id, 1); openCart(); }
    if (action === 'detail') { openProductModal(id); }
  });

  // Cart button and modal controls
  document.getElementById('cartButton').addEventListener('click', openCart);
  document.getElementById('floatingCart').addEventListener('click', openCart);
  document.getElementById('closeCart').addEventListener('click', closeCart);
  document.getElementById('cartModal').addEventListener('click', (e) => {
    const dlg = e.currentTarget;
    const rect = dlg.getBoundingClientRect();
    const clickedOutside = e.clientY < rect.top || e.clientY > rect.bottom || e.clientX < rect.left || e.clientX > rect.right;
    if (clickedOutside) closeCart();
  });
  document.getElementById('cartItems').addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;
    const id = btn.getAttribute('data-id');
    const action = btn.getAttribute('data-action');
    if (action === 'inc') changeQty(id, +1);
    if (action === 'dec') changeQty(id, -1);
    if (action === 'remove') removeFromCart(id);
  });

  document.getElementById('checkoutBtn').addEventListener('click', () => {
    if (Object.keys(state.cart).length === 0) return alert('Keranjang masih kosong.');
    const entries = cartEntries();
    const subtotal = entries.reduce((s, e) => s + e.product.price * e.qty, 0);
    const order = { ts: Date.now(), subtotal, items: entries };
    try { localStorage.setItem('lastOrder', JSON.stringify(order)); } catch {}
    state.cart = {}; // reset cart
    updateCartBadge();
    renderCart();
    const dlg = document.getElementById('cartModal'); if (dlg.open) dlg.close();
    window.location.href = 'success.html';
  });

  document.getElementById('toTop').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function init() {
  document.getElementById('year').textContent = new Date().getFullYear();
  renderChips();
  renderProducts();
  renderCart();
  updateCartBadge();
  attachEvents();
  observeReveal();
  handleHeaderScroll();
}

document.addEventListener('DOMContentLoaded', init);

// Modern interactions
function observeReveal() {
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) e.target.classList.add('visible');
    }
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.06 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

function handleHeaderScroll() {
  const header = document.querySelector('.site-header');
  const onScroll = () => {
    if (window.scrollY > 6) header.classList.add('scrolled'); else header.classList.remove('scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

function attachCardTilt() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    let raf = 0;
    const onMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        card.style.transform = `perspective(700px) rotateX(${(-y*4).toFixed(2)}deg) rotateY(${(x*4).toFixed(2)}deg) translateY(-3px)`;
      });
    };
    const reset = () => { card.style.transform = ''; };
    card.addEventListener('mousemove', onMove);
    card.addEventListener('mouseleave', reset);
  });
}

function showToast(title, message) {
  const wrap = document.getElementById('toastWrap');
  const el = document.createElement('div');
  el.className = 'toast';
  el.innerHTML = `<span class="title">${title}</span><span style="opacity:.8">${message}</span>`;
  wrap.appendChild(el);
  setTimeout(() => {
    el.style.transition = 'transform .2s ease, opacity .2s ease';
    el.style.transform = 'translateY(6px)';
    el.style.opacity = '0';
    setTimeout(() => el.remove(), 220);
  }, 1400);
}

// Newsletter
document.addEventListener('submit', (e) => {
  if (e.target && e.target.id === 'newsletterForm') {
    e.preventDefault();
    const email = document.getElementById('newsletterEmail').value.trim();
    if (!email) return;
    showToast('Terdaftar', 'Kami akan mengirimkan newsletter ke ' + email);
    e.target.reset();
  }
});

// Keyframes for shimmer
const styleTag = document.createElement('style');
styleTag.innerHTML = `@keyframes shimmer{0%{background-position:0% 0}100%{background-position:200% 0}}`;
document.head.appendChild(styleTag);

// Product detail modal logic
let currentProductId = null;
function openProductModal(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  currentProductId = id;
  const dlg = document.getElementById('productModal');
  document.getElementById('pmTitle').textContent = 'Detail Produk';
  document.getElementById('pmImage').src = product.image;
  document.getElementById('pmImage').alt = product.name;
  document.getElementById('pmCategory').textContent = product.category;
  document.getElementById('pmRating').textContent = `⭐ ${product.rating}`;
  document.getElementById('pmName').textContent = product.name;
  document.getElementById('pmPrice').textContent = currency(product.price);
  document.getElementById('pmDesc').textContent = product.desc || '';
  const ul = document.getElementById('pmBenefits');
  ul.innerHTML = '';
  (product.benefits || []).forEach(b => {
    const li = document.createElement('li');
    li.textContent = b;
    ul.appendChild(li);
  });
  document.getElementById('pmQty').textContent = '1';
  if (!dlg.open) dlg.showModal();
}

document.getElementById('pmClose').addEventListener('click', () => {
  const dlg = document.getElementById('productModal');
  if (dlg.open) dlg.close();
});

document.getElementById('pmInc').addEventListener('click', () => {
  const el = document.getElementById('pmQty');
  el.textContent = String(parseInt(el.textContent, 10) + 1);
});
document.getElementById('pmDec').addEventListener('click', () => {
  const el = document.getElementById('pmQty');
  const v = Math.max(1, parseInt(el.textContent, 10) - 1);
  el.textContent = String(v);
});
document.getElementById('pmAdd').addEventListener('click', () => {
  const qty = parseInt(document.getElementById('pmQty').textContent, 10) || 1;
  if (currentProductId) addToCart(currentProductId, qty);
  const dlg = document.getElementById('productModal');
  if (dlg.open) dlg.close();
  openCart();
});


