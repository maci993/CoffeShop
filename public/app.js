// Navigation toggle
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

window.onscroll = () => {
    navbar.classList.remove('active');
};

// Modal elements
const modal = document.getElementById('order-modal');
const closeBtn = document.querySelector('.close-btn');
const productNameInput = document.getElementById('product-name');
const orderForm = document.getElementById('order-form');

// Open modal from product boxes
const orderButtons = document.querySelectorAll('.order-btn');
orderButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        productNameInput.value = productName;
modal.style.display = 'flex';
        e.preventDefault();
        const box = e.target.closest('.box');
        const productName = box?.querySelector('h2')?.textContent || 'Custom Order';
        productNameInput.value = productName;
        modal.style.display = 'flex';
    });
});

// Open modal from "Order Now" buttons
const orderNowButtons = document.querySelectorAll('.order-now-btn');
orderNowButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Order button clicked');
        productNameInput.value = 'Custom Order';
        modal.style.display = 'flex';
    });
});

// Close modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Submit order
orderForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(orderForm);
    const orderDetails = {
        productName: formData.get('product-name'),
        quantity: formData.get('quantity'),
        customerName: formData.get('customer-name'),
        customerAddress: formData.get('customer-address'),
    };

    fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderDetails),
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message || 'Thank you for your order!');
        modal.style.display = 'none';
        orderForm.reset();
    })
    .catch(error => {
        console.error('Error submitting order:', error);
        alert('Something went wrong. Please try again.');
    });
});
