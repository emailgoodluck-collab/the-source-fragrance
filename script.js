const business = { inquiryEmail: 'erhirhievera@gmail.com' };
const products = [
  { name: 'Al Haramain Amber Oud', family: 'Amber · woods · unisex', notes: 'Rosemary, citrus, cedar, amber', profile: 'A polished amber-wood signature with a bright opening and resinous warmth.', price: 140000, image: './assets/products/al-haramain-amber-oud.jpg' },
  { name: 'Stronger With You', family: 'Amber · vanilla · spice', notes: 'Cardamom, chestnut, vanilla', profile: 'A sweet-spiced evening profile with a smooth gourmand finish.', price: 230000, image: './assets/products/stronger-with-you.jpg' },
  { name: 'Rasasi Hawas Ice', family: 'Aquatic · citrus · woods', notes: 'Apple, bergamot, plum, driftwood', profile: 'A cool aromatic-aquatic choice for fresh, clean daily wear.', price: 70000, image: './assets/products/rasasi-hawas-ice.jpg' },
  { name: 'Club de Nuit Impériale', family: 'Floral · vanilla · musk', notes: 'Litchi, Turkish rose, vanilla', profile: 'A luminous floral-gourmand with soft woods and an elegant finish.', price: 65000, image: './assets/products/club-de-nuit-imperiale.jpg' },
  { name: 'Reef 33', family: 'Saffron · rosemary · oud', notes: 'Royal saffron, rosemary, oud', profile: 'A focused, smoky-spiced unisex scent for dressed-up moments.', price: 110000, image: './assets/products/reef-33.jpg' },
  { name: 'Club de Nuit Intense Man', family: 'Citrus · woods · musk', notes: 'Pineapple, birch, musk', profile: 'A sharp citrus-fruit opening that settles into smoky woods.', price: 65000, image: './assets/products/club-de-nuit-intense-man.jpg' },
  { name: "Supremacy Collector's Edition", family: 'Fruity · birch · ambergris', notes: 'Pineapple, apple, birch, ambergris', profile: 'A confident fruity-woody profile with a dry, modern backbone.', price: 110000, image: './assets/products/supremacy-collectors-edition.png' },
  { name: 'Lattafa Vintage Radio', family: 'Plum · palo santo · oud', notes: 'Lavender, plum, palo santo', profile: 'A warm aromatic wood scent with a plush, slightly smoky core.', price: 55000, image: './assets/products/lattafa-vintage-radio.webp' },
  { name: 'Afnan 9PM Night Out', family: 'Apple · vanilla · tonka', notes: 'Apple, cinnamon, vanilla, tonka', profile: 'A playful amber-vanilla option made for a warm night out.', price: 75000, image: './assets/products/afnan-9pm.png' },
  { name: 'Lattafa Nebras', family: 'Berries · cocoa · vanilla', notes: 'Red berries, cocoa, vanilla', profile: 'A sweet, creamy berry-gourmand with a soft musky base.', price: 50000, image: './assets/products/lattafa-nebras.jpg' },
  { name: 'Lattafa Maahir', family: 'Saffron · jasmine · vanilla', notes: 'Red berries, saffron, sandalwood', profile: 'A floral-amber composition with warm woods and vanilla depth.', price: 45000, image: './assets/products/lattafa-maahir.jpg' },
  { name: 'Afnan 9PM', family: 'Apple · vanilla · amber', notes: 'Apple, cinnamon, vanilla, amber', profile: 'A familiar amber-vanilla evening scent with a bright fruity lift.', price: 55000, image: './assets/products/afnan-9pm.png' },
  { name: 'Afnan Supremacy in Oud', family: 'Oud · spice · musk', notes: 'Saffron, nutmeg, oud, patchouli', profile: 'A deep spiced-oud expression for formal evenings and cooler air.', price: 80000, image: 'https://fragarabic.com/cdn/shop/files/Supremacy_in_Oud_Afnan_Eau_de_Parfum_Unisex.webp?v=1770130565&width=2048' },
  { name: 'Afnan 9PM Rebel', family: 'Fruit · vanilla · woods', notes: 'Mandarin, pineapple, vanilla, caramel', profile: 'A red-framed fruity amber scent with a more playful, rebellious mood.', price: 65000, image: 'https://hiddensamples.com/cdn/shop/files/iklrf9g9_1000x1000.jpg?v=1740677541' },
  { name: 'Afnan Supremacy Not Only Intense', family: 'Fruity · amber · moss', notes: 'Bergamot, apple, black currant, ambergris', profile: 'A crisp fruity-amber extrait with mossy, spicy depth.', price: 85000, image: 'https://us.afnan.com/cdn/shop/files/SupremacyIntense-Product-01.jpg?v=1775552949&width=2048' },
  { name: 'Lattafa Badee Al Oud For Glory', family: 'Oud · patchouli · musk', notes: 'Saffron, lavender, oud, patchouli', profile: 'A bold black-and-gold oud profile with a dry, smoky warmth.', price: 45000, image: 'https://www.lattafa-usa.com/cdn/shop/files/1_5a4baf04-76ee-43c9-9751-4ac43d7aba74_grande.png?v=1747556003' },
  { name: 'Gentleman Givenchy', family: 'Woody · floral · vanilla', notes: 'Pepper, lavender, iris, black vanilla', profile: 'A tailored woody-floral scent with a dark vanilla finish.', price: 200000, image: 'https://www.givenchybeauty.com/dw/image/v2/BBZW_PRD/on/demandware.static/-/Sites-givenchy-beauty-master/default/dwd065e813/images/P011117/3274872424982_P011117_GENTLEMAN-EDP-60ML_4.png?sh=800&strip=false&sw=800' },
  { name: 'Lattafa Khamrah', family: 'Gourmand · spice · amber', notes: 'Cinnamon, dates, praline, vanilla', profile: 'A rich aromatic-spicy gourmand with a date-and-praline heart.', price: 45000, image: 'https://lattafa.com/wp-content/uploads/2024/05/2-60.jpg' },
  { name: 'Valentino Uomo Born in Roma', family: 'Aromatic · vetiver · mineral', notes: 'Violet leaf, sage, vetiver, ginger', profile: 'A modern mineral-aromatic fragrance with a sharp Roman edge.', price: 220000, image: 'https://media.marionnaud.fr/medias/sys_master/prd-images/h69/hb6/12396181848094/prd-back-101736412_2000x2000/prd-back-101736412-2000x2000.png' },
  { name: 'Club de Nuit Lionheart', family: 'Tobacco · honey · vanilla', notes: 'Lavender, vanilla, honey, tobacco', profile: 'A warm sweet tobacco scent with a plush, confident finish.', price: 75000, image: 'https://www.parfimo.it/data/cache/thumb_min500_max1000-min500_max1000-12/products/504665/1749034836/armaf-club-de-nuit-lionheart-eau-de-parfum-uomo-100-ml-626793.jpg' },
  { name: 'Versace Eros', family: 'Aromatic · vanilla · woods', notes: 'Mint, green apple, tonka, vanilla', profile: 'A vivid fresh-sweet classic with citrus energy and a warm woody base.', price: 150000, image: 'https://priveperfumes.com/cdn/shop/files/perfume-versace-eros-edt-m-100-ml-1-prive-perfumes.webp?v=1776856081&width=2000' }
].map(product => ({ ...product, stock: 'in-stock', status: 'Available now' }));

const grid = document.querySelector('#product-grid');
const cart = [];
const cartCount = document.querySelector('#cart-count');
const cartDialog = document.querySelector('#cart-dialog');
const inquiryDialog = document.querySelector('#inquiry-dialog');
const money = new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 });

function render(filter = 'all') {
  grid.innerHTML = products.filter(product => filter === 'all' || product.stock === filter).map(product => `<article class="product-card product-card-image"><img class="product-image" src="${product.image}" alt="${product.name} perfume bottle" loading="lazy" /><button data-add-product="${product.name}" aria-label="Add ${product.name} to cart">+</button><div class="product-meta"><p>${product.family}</p><h3>${product.name}</h3><p class="product-notes">${product.notes}</p><p class="product-bio">${product.profile}</p><div><span class="price">${money.format(product.price)}</span><span>Add to cart ↗</span></div></div></article>`).join('');
}

function renderCart() {
  const items = document.querySelector('#cart-items');
  const total = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = total;
  items.innerHTML = cart.length ? cart.map(item => `<div class="cart-line"><div><strong>${item.name}</strong><span>${money.format(item.price)} each</span></div><div class="cart-quantity"><button data-decrease="${item.name}" aria-label="Remove one ${item.name}">-</button><span>${item.quantity}</span><button data-increase="${item.name}" aria-label="Add one ${item.name}">+</button></div></div>`).join('') : '<p>Your cart is currently empty.</p>';
}

function addToCart(name) {
  const product = products.find(item => item.name === name);
  const existing = cart.find(item => item.name === name);
  if (existing) existing.quantity += 1;
  else cart.push({ ...product, quantity: 1 });
  renderCart();
}

render();
renderCart();
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('[data-filter]').forEach(item => item.classList.remove('active')); button.classList.add('active'); render(button.dataset.filter); }));
grid.addEventListener('click', event => { const button = event.target.closest('[data-add-product]'); if (button) addToCart(button.dataset.addProduct); });
document.querySelectorAll('[data-open-cart]').forEach(button => button.addEventListener('click', () => cartDialog.showModal()));
document.querySelectorAll('[data-close-cart]').forEach(button => button.addEventListener('click', () => cartDialog.close()));
document.querySelectorAll('[data-open-inquiry]').forEach(button => button.addEventListener('click', () => inquiryDialog.showModal()));
document.querySelectorAll('[data-close-inquiry]').forEach(button => button.addEventListener('click', () => inquiryDialog.close()));
document.querySelector('#cart-items').addEventListener('click', event => { const increase = event.target.closest('[data-increase]'); const decrease = event.target.closest('[data-decrease]'); const name = increase?.dataset.increase || decrease?.dataset.decrease; if (!name) return; const item = cart.find(entry => entry.name === name); if (increase) item.quantity += 1; if (decrease) item.quantity -= 1; if (item.quantity === 0) cart.splice(cart.indexOf(item), 1); renderCart(); });

let mood = '';
let moment = '';
document.querySelectorAll('[data-mood]').forEach(button => button.addEventListener('click', () => { mood = button.dataset.mood; document.querySelectorAll('[data-mood]').forEach(item => item.classList.remove('active')); button.classList.add('active'); }));
document.querySelectorAll('[data-moment]').forEach(button => button.addEventListener('click', () => { moment = button.dataset.moment; document.querySelectorAll('[data-moment]').forEach(item => item.classList.remove('active')); button.classList.add('active'); }));
const directions = { soft: ['01', 'Musk, neroli, and clean woods', 'Start with a skin-close scent: clean musk, soft citrus, or tea notes. Ask us for bottles that feel present only when someone comes close.'], bright: ['02', 'Citrus, fruit, and radiant florals', 'Look for sparkling citrus, pear, orange blossom, or a bright floral opening. These are scents that arrive before you do.'], warm: ['03', 'Amber, vanilla, and sandalwood', 'Choose a warm architecture: amber, saffron, vanilla, tonka, and woods. The result is generous, lasting, and intimate.'], dark: ['04', 'Incense, leather, and deep rose', 'Move toward incense, dark rose, patchouli, leather, or resin. This direction is composed, textured, and quietly dramatic.'] };
document.querySelector('#reveal-scent').addEventListener('click', () => { const result = document.querySelector('#scent-result'); if (!mood || !moment) { result.innerHTML = '<span class="result-number">?</span><h3>Choose both prompts.</h3><p>Your mood and moment help us make a useful, personal starting point.</p>'; return; } const [number, title, copy] = directions[mood]; result.innerHTML = `<span class="result-number">${number} / ${moment}</span><h3>${title}</h3><p>${copy}</p>`; });

document.querySelector('#inquiry-form').addEventListener('submit', event => { event.preventDefault(); const data = new FormData(event.currentTarget); const subject = encodeURIComponent('The Source inquiry'); const body = encodeURIComponent(`Name: ${data.get('name')}\nContact: ${data.get('contact')}\n\nRequest:\n${data.get('request')}`); window.location.href = `mailto:${business.inquiryEmail}?subject=${subject}&body=${body}`; document.querySelector('#form-status').textContent = 'Your email application is opening with the inquiry prepared.'; });
document.querySelector('#checkout-form').addEventListener('submit', event => { event.preventDefault(); const status = document.querySelector('#checkout-status'); if (!cart.length) { status.textContent = 'Add at least one item before submitting your selection.'; return; } const data = new FormData(event.currentTarget); const selection = cart.map(item => `${item.name} x ${item.quantity} (${money.format(item.price)} each)`).join('\n'); const subject = encodeURIComponent('The Source cart submission'); const body = encodeURIComponent(`Name: ${data.get('name')}\nContact: ${data.get('contact')}\nDelivery city: ${data.get('city')}\n\nSelected items:\n${selection}\n\nPlease confirm stock, bottle size, delivery fee, and final price before payment.`); window.location.href = `mailto:${business.inquiryEmail}?subject=${subject}&body=${body}`; status.textContent = 'Your email application is opening with your full selection prepared.'; });
