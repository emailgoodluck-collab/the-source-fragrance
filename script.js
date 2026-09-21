const business = { inquiryEmail: 'erhirhievera@gmail.com' };
const products = [
  { name: 'Golden Hour', family: 'Amber · citrus · woods', status: 'Available now', color: '#d9b16e', cap: '#3e3021', label: 'GOLDEN\nHOUR', stock: 'in-stock' },
  { name: 'Velvet Fig', family: 'Fig · iris · sandalwood', status: 'Source on request', color: '#b29a86', cap: '#4a3d37', label: 'VELVET\nFIG', stock: 'request' },
  { name: 'After Dark', family: 'Rose · incense · leather', status: 'Available now', color: '#7b3c3d', cap: '#1f2520', label: 'AFTER\nDARK', stock: 'in-stock' },
  { name: 'Linen Skin', family: 'Musk · neroli · clean woods', status: 'Source on request', color: '#c6d2c0', cap: '#526158', label: 'LINEN\nSKIN', stock: 'request' },
  { name: 'Cedar Room', family: 'Cedar · saffron · amber', status: 'Available now', color: '#aa7452', cap: '#302a23', label: 'CEDAR\nROOM', stock: 'in-stock' },
  { name: 'Quiet Bloom', family: 'Peony · tea · white musk', status: 'Source on request', color: '#c996a4', cap: '#563c48', label: 'QUIET\nBLOOM', stock: 'request' }
];

const grid = document.querySelector('#product-grid');
const cart = [];
const cartCount = document.querySelector('#cart-count');
const cartDialog = document.querySelector('#cart-dialog');
const inquiryDialog = document.querySelector('#inquiry-dialog');

function render(filter = 'all') {
  grid.innerHTML = products.filter(product => filter === 'all' || product.stock === filter).map(product => {
    const action = product.stock === 'in-stock' ? 'Add to cart' : 'Add sourcing request';
    return `<article class="product-card" style="--card:${product.color}"><div class="mist"></div><div class="bottle" style="background:linear-gradient(120deg,rgba(255,245,220,.6),${product.color} 55%,rgba(28,25,20,.82));"><div class="bottle-cap" style="background:${product.cap}"></div><div class="bottle-label">${product.label.replace('\n', '<br />')}</div></div><button data-add-product="${product.name}" aria-label="${action}: ${product.name}">+</button><div class="product-meta"><p>${product.family}</p><h3>${product.name}</h3><div><span class="status">${product.status}</span><span>${action} ↗</span></div></div></article>`;
  }).join('');
}

function renderCart() {
  const items = document.querySelector('#cart-items');
  const total = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = total;
  items.innerHTML = cart.length ? cart.map(item => `<div class="cart-line"><div><strong>${item.name}</strong><span>${item.stock === 'in-stock' ? 'Available bottle' : 'Sourcing request'}</span></div><div class="cart-quantity"><button data-decrease="${item.name}" aria-label="Remove one ${item.name}">-</button><span>${item.quantity}</span><button data-increase="${item.name}" aria-label="Add one ${item.name}">+</button></div></div>`).join('') : '<p>Your cart is currently empty.</p>';
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
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  render(button.dataset.filter);
}));
grid.addEventListener('click', event => {
  const button = event.target.closest('[data-add-product]');
  if (button) addToCart(button.dataset.addProduct);
});
document.querySelectorAll('[data-open-cart]').forEach(button => button.addEventListener('click', () => cartDialog.showModal()));
document.querySelectorAll('[data-close-cart]').forEach(button => button.addEventListener('click', () => cartDialog.close()));
document.querySelectorAll('[data-open-inquiry]').forEach(button => button.addEventListener('click', () => inquiryDialog.showModal()));
document.querySelectorAll('[data-close-inquiry]').forEach(button => button.addEventListener('click', () => inquiryDialog.close()));
document.querySelector('#cart-items').addEventListener('click', event => {
  const increase = event.target.closest('[data-increase]');
  const decrease = event.target.closest('[data-decrease]');
  const name = increase?.dataset.increase || decrease?.dataset.decrease;
  if (!name) return;
  const item = cart.find(entry => entry.name === name);
  if (increase) item.quantity += 1;
  if (decrease) item.quantity -= 1;
  if (item.quantity === 0) cart.splice(cart.indexOf(item), 1);
  renderCart();
});

let mood = '';
let moment = '';
document.querySelectorAll('[data-mood]').forEach(button => button.addEventListener('click', () => { mood = button.dataset.mood; document.querySelectorAll('[data-mood]').forEach(item => item.classList.remove('active')); button.classList.add('active'); }));
document.querySelectorAll('[data-moment]').forEach(button => button.addEventListener('click', () => { moment = button.dataset.moment; document.querySelectorAll('[data-moment]').forEach(item => item.classList.remove('active')); button.classList.add('active'); }));
const directions = { soft: ['01', 'Musk, neroli, and clean woods', 'Start with a skin-close scent: clean musk, soft citrus, or tea notes. Ask us for bottles that feel present only when someone comes close.'], bright: ['02', 'Citrus, fruit, and radiant florals', 'Look for sparkling citrus, pear, orange blossom, or a bright floral opening. These are scents that arrive before you do.'], warm: ['03', 'Amber, vanilla, and sandalwood', 'Choose a warm architecture: amber, saffron, vanilla, tonka, and woods. The result is generous, lasting, and intimate.'], dark: ['04', 'Incense, leather, and deep rose', 'Move toward incense, dark rose, patchouli, leather, or resin. This direction is composed, textured, and quietly dramatic.'] };
document.querySelector('#reveal-scent').addEventListener('click', () => { const result = document.querySelector('#scent-result'); if (!mood || !moment) { result.innerHTML = '<span class="result-number">?</span><h3>Choose both prompts.</h3><p>Your mood and moment help us make a useful, personal starting point.</p>'; return; } const [number, title, copy] = directions[mood]; result.innerHTML = `<span class="result-number">${number} / ${moment}</span><h3>${title}</h3><p>${copy}</p>`; });

document.querySelector('#inquiry-form').addEventListener('submit', event => { event.preventDefault(); const data = new FormData(event.currentTarget); const subject = encodeURIComponent('The Source inquiry'); const body = encodeURIComponent(`Name: ${data.get('name')}\nContact: ${data.get('contact')}\n\nRequest:\n${data.get('request')}`); window.location.href = `mailto:${business.inquiryEmail}?subject=${subject}&body=${body}`; document.querySelector('#form-status').textContent = 'Your email application is opening with the inquiry prepared.'; });
document.querySelector('#checkout-form').addEventListener('submit', event => { event.preventDefault(); const status = document.querySelector('#checkout-status'); if (!cart.length) { status.textContent = 'Add at least one item before submitting your selection.'; return; } const data = new FormData(event.currentTarget); const selection = cart.map(item => `${item.name} x ${item.quantity} (${item.stock === 'in-stock' ? 'available' : 'source on request'})`).join('\n'); const subject = encodeURIComponent('The Source cart submission'); const body = encodeURIComponent(`Name: ${data.get('name')}\nContact: ${data.get('contact')}\nDelivery city: ${data.get('city')}\n\nSelected items:\n${selection}\n\nPlease confirm stock, bottle size, delivery fee, and final price before payment.`); window.location.href = `mailto:${business.inquiryEmail}?subject=${subject}&body=${body}`; status.textContent = 'Your email application is opening with your full selection prepared.'; });
