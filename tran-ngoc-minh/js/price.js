// js/price.js
document.getElementById('priceInput')?.addEventListener('input', function (e) {
  let value = e.target.value.replace(/[^\d]/g, '');
  if (value) {
    value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    e.target.value = value;
  }
});

document.getElementById('currencySelect')?.addEventListener('change', function (e) {
  console.log('Currency changed to:', e.target.value);
});
