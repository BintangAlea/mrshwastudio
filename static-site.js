const products = [
    { id: 1, series: 'Peony Signature', name: 'Grand Peony Bouquet', slug: 'grand-peony-bouquet', category: 'Bouquet', size: 'XL', price: 850000, description: 'Harga tertera adalah untuk buket saja. Tersedia ukuran S - XL. Ukuran final menyesuaikan jenis kuncup/mekar bunga Peony. Bisa tambah paper bag atau ambil paket lengkap dengan harga khusus. Khusus pengiriman area Surabaya dan Sidoarjo.', image: 'aset/jpg/grand_peony.jpg', gallery: ['aset/jpg/grand_peony2.jpg', 'aset/jpg/grand_peony3.jpg'], featured: 1 },
    { id: 1, series: 'Peony Signature', name: 'Ethereal Ivory Peony Bouquet', slug: 'ethereal-ivory-peony-bouquet', category: 'Bouquet', size: 'Medium', price: 230000, description: 'Harga tertera adalah untuk buket saja. Tersedia ukuran S - XL. Bisa tambah paper bag atau ambil paket lengkap dengan harga khusus. Khusus pengiriman area Surabaya dan Sidoarjo.', image: 'aset/jpg/ethereal_ivory_peony.jpg', featured: 0 },
    { id: 1, series: 'Peony Signature', name: 'Korean Peony Bouquet', slug: 'petite-peony-bouquet', category: 'Bouquet', size: 'Small', price: 235000, description: 'Harga tertera adalah untuk buket saja. Tersedia ukuran S - XL. Bisa tambah paper bag atau ambil paket lengkap dengan harga khusus. Khusus pengiriman area Surabaya dan Sidoarjo.', image: 'aset/jpg/korean_peonyb.jpg', gallery: ['aset/jpg/korean_peony2b.jpg'], featured: 0 },
    { id: 1, series: 'Peony Signature', name: 'Blush Peony Bloom Box', slug: 'blush-peony-bloom-box', category: 'Bloom Box', size: 'All Size', price: 270000, description: 'Rangkaian eksklusif lengkap dengan box bundar premium. Khusus pengiriman area Surabaya dan Sidoarjo.', image: 'aset/jpg/blush_peony_bloom_box.jpg', gallery: ['aset/jpg/blush_peony_bloom_box2.jpg', 'aset/jpg/blush_peony_bloom_box3.jpg'], featured: 1 },
    { id: 2, series: 'Spring Sonata', name: 'Thumbelina Pastel Bouquet', slug: 'thumbelina-pastel-bouquet', category: 'Bouquet', size: 'Medium', price: 250000, description: 'Rangkaian campuran bunga segar bernuansa soft pastel dengan pita organza yang manis. Harga tertera adalah untuk buket saja. Bisa tambah paper bag atau ambil paket lengkap dengan harga khusus. Khusus pengiriman area Surabaya dan Sidoarjo.', image: 'aset/jpg/thumbelina_pastel.jpg', gallery: ['aset/jpg/thumbelina_pastel2.jpg', 'aset/jpg/thumbelina_pastel3c.jpg'], featured: 1 },
    { id: 2, series: 'Spring Sonata', name: 'Fresh Spring Meadow Box', slug: 'fresh-spring-meadow-box', category: 'Hand Sleeve Box', size: 'All Size', price: 175000, description: 'Rangkaian fresh mix pastel color dalam kemasan sleeve box eksklusif. Khusus pengiriman area Surabaya dan Sidoarjo.', image: 'aset/jpg/fresh_spring_meadow.jpg', gallery: ['aset/jpg/fresh_spring_meadow2.jpeg'], featured: 0 },
    { id: 2, series: 'Spring Sonata', name: 'Fresh Spring Cone', slug: 'fresh-spring-cone', category: 'Cone Box', size: 'Medium', price: 175000, description: 'Rangkaian bunga fresh spring cerah dalam kemasan cone eksklusif. Harga tertera adalah untuk rangkaian saja. Bisa tambah item lain atau ambil paket lengkap dengan harga khusus. Khusus pengiriman area Surabaya dan Sidoarjo.', image: 'aset/jpg/blush_spring_cone.jpg', gallery: ['aset/jpg/blush_spring_cone2.jpeg'], featured: 0 },
    { id: 3, series: 'Classic Timeless', name: 'Serenity Bloom', slug: 'serenity-bloom', category: 'Paper Bag Bouquet', size: 'Medium', price: 180000, description: 'Rangkaian bunga klasik bernuansa hangat di dalam kraft paper bag eksklusif berpita satin Mrs. Hwa. Harga tertera adalah untuk rangkaian saja. Bisa tambah item lain atau ambil paket lengkap dengan harga khusus. Khusus pengiriman area Surabaya dan Sidoarjo.', image: 'aset/jpg/korean_peony3a.jpg', gallery: ['aset/jpg/korean_peony4a.jpg', 'aset/jpg/korean_peony5a.jpg', 'aset/jpg/fresh_spring_serenity.jpg'], featured: 1 },
    { id: 1, series: 'Peony Signature', name: 'Blush Peony Cone', slug: 'blush-peony-cone', category: 'Cone Box', size: 'Medium', price: 160000, description: 'Rangkaian bunga Peony segar dalam kemasan cone eksklusif. Harga tertera adalah untuk rangkaian saja. Bisa tambah item lain atau ambil paket lengkap dengan harga khusus. Khusus pengiriman area Surabaya dan Sidoarjo.', image: 'aset/jpg/blush_peony_cone.jpg', gallery: ['aset/jpg/blush_peony_cone2.jpeg', 'aset/jpg/blush_spring_cone.jpg', 'aset/jpg/blush_spring_cone2.jpeg'], featured: 0 },
    { id: 4, series: 'Custom Studio', name: 'The Bloom Christmas Box', slug: 'the-bloom-christmas-box', category: 'Gift Box', size: 'Small', price: 190000, description: 'Rangkaian bunga eksklusif berbentuk kubah padat dalam box silinder putih minimalis. Desain dapat dikustomisasi untuk berbagai perayaan spesial. Harga tertera adalah untuk ukuran small. Khusus pengiriman area Surabaya dan Sidoarjo.', image: 'aset/jpg/bloom_christmas.jpg', gallery: ['aset/jpg/bloom_christmas3.jpg'], featured: 1 }
];

const categories = [...new Set(products.map((product) => product.series))];
const money = (value) => `Rp${value.toLocaleString('id-ID')}`;
const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;' }[character]));

function renderHeader(variant = 'home') {
    const left = variant === 'product'
        ? '<a class="header-back" href="home.html"><i class="bi bi-arrow-left"></i><span>Back to shop</span></a>'
        : '<button class="menu-toggle" type="button" aria-label="Buka menu"><i class="bi bi-list"></i></button>';
    const order = variant === 'product' ? '#place-order' : '#how-to-order';
    return `<header class="shared-header">${left}<a class="header-brand" href="home.html">Mrs. Hwa <span>화</span></a><a class="header-order" href="${order}">Order here</a></header>`;
}

function renderFooter() {
    return `<footer class="shared-footer"><div class="footer-brand"><img src="aset/logo.png" alt="Mrs. Hwa"><div class="footer-socials" aria-label="Social media"><a href="https://wa.me/62881026265388" aria-label="WhatsApp" target="_blank" rel="noopener"><i class="bi bi-whatsapp"></i></a><a href="https://instagram.com/mrshwastudio" aria-label="Instagram" target="_blank" rel="noopener"><i class="bi bi-instagram"></i></a><a href="https://tiktok.com/@mrshwastudio.id" aria-label="TikTok" target="_blank" rel="noopener"><i class="bi bi-tiktok"></i></a></div></div><p class="footer-copy">© 2026 Mrs. Hwa Studio</p><nav class="footer-links"><a href="#how-to-order" data-footer-action="how-to-order">How to order</a><a href="#custom-inquiries" data-footer-action="custom-inquiries">Custom inquiries</a></nav></footer>`;
}

function renderCustomModal() {
    return `<div class="custom-modal" id="custom-inquiry-modal" aria-hidden="true"><div class="custom-modal-backdrop" data-modal-close></div><div class="custom-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="custom-inquiry-title"><button class="custom-modal-close" type="button" aria-label="Tutup pop up" data-modal-close><i class="bi bi-x-lg"></i></button><h2 id="custom-inquiry-title">Custom Inquiries</h2><p>Any requested bouquet? Contact us and we will craft it for you.</p><a class="whatsapp-button" href="https://wa.me/62881026265388?text=${encodeURIComponent('Halo Mrs. Hwa, saya ingin bertanya tentang custom bouquet.')}" target="_blank" rel="noopener"><i class="bi bi-whatsapp"></i> Contact Us</a></div></div>`;
}

function renderMenu() {
    return `<aside class="menu-overlay" id="site-menu" aria-hidden="true"><div class="menu-header"><button class="menu-close" type="button" aria-label="Tutup menu"><i class="bi bi-x-lg"></i></button><a class="menu-brand" href="home.html">Mrs. Hwa <span>화</span></a><button class="menu-search" type="button" aria-label="Cari"><i class="bi bi-search"></i></button></div><nav class="menu-content"><div class="menu-title">Shop</div>${categories.map((category) => `<a class="menu-link" href="#catalog">${escapeHtml(category)}</a>`).join('')}<button class="how-order-toggle" type="button" aria-expanded="false">How to order <i class="bi bi-chevron-up"></i></button><div class="how-order-content" id="how-to-order"><ol><li>Choose Your Bloom: Pilih buket atau rangkaian bunga favoritmu.</li><li>Send Inquiry: Klik tombol Place Your Order untuk terhubung ke WhatsApp.</li><li>Confirm &amp; Pay: Kami akan mengonfirmasi slot dan detail pembayaran.</li></ol></div><a class="menu-link" href="#contact">Contact Us</a></nav></aside>`;
}

function initializeOpening() {
    const opening = document.getElementById('opening-screen');
    if (!opening) return;
    setTimeout(() => {
        opening.classList.add('is-hiding');
        setTimeout(() => { window.location.href = 'home.html'; }, 620);
    }, 2400);
}

function initializeMenu() {
    const toggle = document.querySelector('.menu-toggle');
    const menu = document.getElementById('site-menu');
    if (!toggle || !menu) return null;
    const close = menu.querySelector('.menu-close');
    const setOpen = (open) => { menu.classList.toggle('is-open', open); menu.setAttribute('aria-hidden', String(!open)); document.body.classList.toggle('overflow-hidden', open); };
    toggle.addEventListener('click', () => setOpen(true));
    close.addEventListener('click', () => setOpen(false));
    menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setOpen(false)));
    const order = document.querySelector('.header-order');
    const how = menu.querySelector('.how-order-toggle');
    const openHowOrder = () => { setOpen(true); if (how.getAttribute('aria-expanded') !== 'true') how.click(); };
    if (order && how) order.addEventListener('click', (event) => { event.preventDefault(); openHowOrder(); });
    how.addEventListener('click', () => { const isOpen = how.getAttribute('aria-expanded') === 'true'; how.setAttribute('aria-expanded', String(!isOpen)); menu.querySelector('#how-to-order').classList.toggle('d-block', !isOpen); });
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape') setOpen(false); });
    return { openHowOrder };
}

function initializeFooterLinks(menuApi) {
    const modal = document.getElementById('custom-inquiry-modal');
    const setModal = (open) => { if (!modal) return; modal.classList.toggle('is-open', open); modal.setAttribute('aria-hidden', String(!open)); document.body.classList.toggle('overflow-hidden', open); };
    document.querySelectorAll('[data-footer-action]').forEach((link) => link.addEventListener('click', (event) => {
        event.preventDefault();
        const action = link.dataset.footerAction;
        if (action === 'custom-inquiries') { setModal(true); return; }
        if (action === 'how-to-order') {
            if (menuApi) menuApi.openHowOrder();
            else window.location.href = `home.html#how-to-order`;
        }
    }));
    if (modal) {
        modal.querySelectorAll('[data-modal-close]').forEach((el) => el.addEventListener('click', () => setModal(false)));
        document.addEventListener('keydown', (event) => { if (event.key === 'Escape') setModal(false); });
    }
}

function initializeHeroTransition() {
    const hero = document.querySelector('.hero-grid');
    if (!hero) return;
    const update = () => { const bottom = hero.getBoundingClientRect().bottom; const progress = Math.min(Math.max((window.innerHeight * .9 - bottom) / (window.innerHeight * .55), 0), 1); document.documentElement.style.setProperty('--hero-transition', progress); document.documentElement.style.setProperty('--hero-scale', 1 + progress * .025); document.documentElement.style.setProperty('--hero-blur', `${progress * 8}px`); document.documentElement.style.setProperty('--hero-opacity', 1 - progress * .42); };
    window.addEventListener('scroll', update, { passive: true }); window.addEventListener('resize', update); update();
}

function renderHome() {
    const app = document.getElementById('app');
    app.innerHTML = `${renderHeader()}<div class="site-shell"><main class="hero-grid"><article class="hero-panel"><img src="aset/home/home1.jpg" alt="Mrs. Hwa bouquet"></article><article class="hero-panel hero-panel--center"><video class="hero-video" src="aset/home/home2.mp4" muted loop playsinline preload="metadata"></video><button class="hero-play-button" type="button" aria-label="Putar video"><i class="bi bi-play-fill"></i></button><div class="center-copy">Timeless<br>blooms.<br>Crafted in<br>elegance.</div><div class="korean-copy">영원한 피어남,<br>우아한 완성.</div></article><article class="hero-panel"><img src="aset/home/home3.jpeg" alt="Mrs. Hwa bouquet"></article></main></div><section class="catalog-section" id="catalog"><nav class="catalog-nav"><a href="home.html#catalog">All</a>${categories.map((category) => `<a href="home.html?category=${encodeURIComponent(category)}#catalog">${escapeHtml(category)}</a>`).join('')}</nav><form class="catalog-controls" id="catalog-form"><select class="form-select catalog-filter" name="category"><option value="all">All categories</option>${categories.map((category) => `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`).join('')}</select><select class="form-select catalog-filter" name="sort"><option value="featured">Featured</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option><option value="name">Name: A to Z</option></select><button class="btn btn-dark" type="submit">Apply</button></form><div class="row catalog-grid" id="product-grid"></div></section>${renderFooter()}${renderMenu()}${renderCustomModal()}`;
    const params = new URLSearchParams(window.location.search); const selectedCategory = params.get('category') || 'all'; const selectedSort = params.get('sort') || 'featured'; const category = app.querySelector('[name="category"]'); const sort = app.querySelector('[name="sort"]'); category.value = categories.includes(selectedCategory) ? selectedCategory : 'all'; sort.value = selectedSort;
    const renderCards = () => { let list = products.filter((product) => category.value === 'all' || product.series === category.value); if (sort.value === 'price-low') list.sort((a,b) => a.price-b.price); if (sort.value === 'price-high') list.sort((a,b) => b.price-a.price); if (sort.value === 'name') list.sort((a,b) => a.name.localeCompare(b.name)); if (sort.value === 'featured') list.sort((a,b) => b.featured-a.featured); app.querySelector('#product-grid').innerHTML = list.map((product) => `<div class="col-sm-6 col-lg-4 mb-4"><a class="catalog-card card h-100 border-0" href="product.html?slug=${product.slug}"><div class="catalog-card-image"><img src="${product.image}" alt="${escapeHtml(product.name)}"></div><div class="card-body px-0"><p class="catalog-card-title mb-1">${escapeHtml(product.name)}</p><small class="text-secondary">${escapeHtml(product.series)} · ${money(product.price)}</small></div></a></div>`).join(''); };
    app.querySelector('#catalog-form').addEventListener('submit', (event) => { event.preventDefault(); history.replaceState({}, '', `home.html?category=${encodeURIComponent(category.value)}&sort=${sort.value}#catalog`); renderCards(); }); renderCards(); const menuApi = initializeMenu(); initializeFooterLinks(menuApi); initializeHeroTransition(); initializeHeroVideo();
    if (window.location.hash === '#how-to-order' && menuApi) menuApi.openHowOrder();
}

function initializeHeroVideo() {
    const video = document.querySelector('.hero-video');
    const button = document.querySelector('.hero-play-button');
    if (!video || !button) return;
    button.addEventListener('click', () => { video.hidden = false; video.play(); button.classList.add('is-hidden'); });
    video.addEventListener('pause', () => button.classList.remove('is-hidden'));
}

function renderProduct() {
    const slug = new URLSearchParams(window.location.search).get('slug'); const product = products.find((item) => item.slug === slug) || products[0]; const message = encodeURIComponent(`Halo Mrs. Hwa, saya ingin memesan ${product.name}. Apakah bisa dibantu untuk ketersediaannya`); const app = document.getElementById('app');
    const gallery = (product.gallery && product.gallery.length) ? product.gallery : [product.image]; const tileOne = gallery[0] || product.image; const tileTwo = gallery[1] || gallery[0] || product.image;
    app.innerHTML = `<div class="product-shell">${renderHeader('product')}<main><section class="product-content"><div class="product-information"><div class="product-copy"><h1>${escapeHtml(product.name)}</h1><p class="product-series">${escapeHtml(product.series)}</p><p class="product-meta">Category : ${escapeHtml(product.category)}<br>Size : ${escapeHtml(product.size)}</p><p class="product-description">${escapeHtml(product.description)}</p></div><div class="product-purchase" id="place-order"><div class="product-price">${money(product.price)}</div><a class="whatsapp-button" href="https://wa.me/62881026265388?text=${message}" target="_blank" rel="noreferrer"><i class="bi bi-whatsapp"></i> Place Your Order</a></div></div><div class="product-visual-column"><div class="product-main-image"><img src="${product.image}" alt="${escapeHtml(product.name)}"></div><section class="gallery-section"><h2 class="gallery-heading">${escapeHtml(product.series)} Details</h2><div class="gallery-feature"><img src="${product.image}" alt="${escapeHtml(product.name)} detail"></div><div class="row g-3"><div class="col-md-6"><div class="gallery-tile"><img src="${tileOne}" alt="${escapeHtml(product.name)}"></div><p class="gallery-caption">Soft bloom, thoughtfully wrapped.</p></div><div class="col-md-6"><div class="gallery-tile"><img src="${tileTwo}" alt="${escapeHtml(product.name)} detail"></div><p class="gallery-caption">A timeless gesture in bloom.</p></div></div></section></div></section></main>${renderFooter()}${renderCustomModal()}</div>`;
    const footer = app.querySelector('.shared-footer'); const information = app.querySelector('.product-information'); if (window.innerWidth > 767 && 'IntersectionObserver' in window) new IntersectionObserver(([entry]) => information.classList.toggle('footer-visible', entry.isIntersecting), { threshold: .01 }).observe(footer);
    initializeFooterLinks(null);
}

function init() { if (document.body.dataset.page === 'opening') initializeOpening(); if (document.body.dataset.page === 'home') renderHome(); if (document.body.dataset.page === 'product') renderProduct(); }
init();
