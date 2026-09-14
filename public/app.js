const UNIT_PRICE = 20;
const VALID_PROMO = 'SAVE10';
const EXPIRED_PROMO = 'OLD10';

const quantityInput = document.querySelector('#quantity');
const promoInput = document.querySelector('#promo-code');
const promoButton = document.querySelector('#apply-promo');
const promoMessage = document.querySelector('#promo-message');
const nameInput = document.querySelector('#customer-name');
const emailInput = document.querySelector('#customer-email');
const checkoutButton = document.querySelector('#checkout-button');
const checkoutMessage = document.querySelector('#checkout-message');
const subtotalEl = document.querySelector('#subtotal');
const discountEl = document.querySelector('#discount');
const totalEl = document.querySelector('#total');

let discountRate = 0;

function money(value) {
  return `£${value.toFixed(2)}`;
}

function currentQuantity() {
  return Number(quantityInput.value);
}

function updateSummary() {
  const quantity = currentQuantity();
  const subtotal = UNIT_PRICE * quantity;
  const discount = subtotal * discountRate;
  const total = subtotal - discount;

  subtotalEl.textContent = money(subtotal);
  discountEl.textContent = money(discount);
  totalEl.textContent = money(total);
}

quantityInput.addEventListener('input', updateSummary);

promoButton.addEventListener('click', () => {
  const code = promoInput.value.trim();

  if (!code) {
    discountRate = 0;
    promoMessage.textContent = 'Enter a promo code.';
  } else if (code === EXPIRED_PROMO) {
    discountRate = 0;
    promoMessage.textContent = 'Promo code expired.';
  } else if (code.toUpperCase() === VALID_PROMO) {
    discountRate = 0.20;
    promoMessage.textContent = 'Promo code applied.';
  } else {
    discountRate = 0;
    promoMessage.textContent = 'Promo code not recognised.';
  }

  updateSummary();
});

checkoutButton.addEventListener('click', () => {
  checkoutMessage.textContent = '';

  const quantity = currentQuantity();
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  if (!Number.isInteger(quantity) || quantity < 1 || quantity > 6) {
    checkoutMessage.textContent = 'Quantity must be a whole number between 1 and 5.';
    return;
  }

  if (!name) {
    checkoutMessage.textContent = 'Enter your name.';
    return;
  }

  if (!email || !email.includes('@')) {
    checkoutMessage.textContent = 'Enter a valid email address.';
    return;
  }

  checkoutMessage.textContent = `Order placed for ${name}.`;
});

updateSummary();
