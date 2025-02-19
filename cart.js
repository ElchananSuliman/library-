// Cart management functions
function addToCart(book) {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
        alert('Please login to add items to cart');
        window.location.pathname = '/login';
        return;
    }

    let userCarts = JSON.parse(localStorage.getItem('userCarts')) || {};
    let userCart = userCarts[currentUser] || [];
    
    // Check if book already exists in cart
    const existingBookIndex = userCart.findIndex(item => item.tiltle === book.tiltle);
    if (existingBookIndex !== -1) {
        userCart[existingBookIndex].quantity = (userCart[existingBookIndex].quantity || 1) + 1;
    } else {
        book.quantity = 1;
        userCart.push(book);
    }
    
    userCarts[currentUser] = userCart;
    localStorage.setItem('userCarts', JSON.stringify(userCarts));
    updateCartIcon();
}

function updateCartIcon() {
    const cartIcon = document.getElementById('cart');
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        const userCarts = JSON.parse(localStorage.getItem('userCarts')) || {};
        const userCart = userCarts[currentUser] || [];
        const totalItems = userCart.reduce((sum, item) => sum + (item.quantity || 1), 0);
        cartIcon.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> (${totalItems})`;
    }
}

// Modified createDivBook function
function createDivBook(book) {
    return `
    <div class="book">
        <div class="title">${book.tiltle}</div>
        <div class="author">${book.author}</div>
        <img src="${book.imgPath}" alt="${book.tiltle}" class="b-card">
        <div class="price">$${book.price}</div>
        <button onclick="addToCart(${JSON.stringify(book).replace(/"/g, '&quot;')})">ADD TO CART</button>
    </div>`;
}

// Cart display function
function displayCart() {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
        window.location.pathname = '/login';
        return;
    }

    const cartContainer = document.getElementById('cart-items');
    const userCarts = JSON.parse(localStorage.getItem('userCarts')) || {};
    const userCart = userCarts[currentUser] || [];

    if (userCart.length === 0) {
        cartContainer.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
        document.getElementById('cart-total-amount').textContent = '0.00';
        return;
    }

    let cartHTML = '';
    let total = 0;

    userCart.forEach(book => {
        const itemTotal = book.price * (book.quantity || 1);
        total += itemTotal;
        cartHTML += `
        <div class="cart-item">
            <img src="${book.imgPath}" alt="${book.tiltle}" class="cart-item-image">
            <div class="cart-item-details">
                <h3>${book.tiltle}</h3>
                <p class="cart-item-author">by ${book.author}</p>
                <p class="cart-item-price">$${book.price}</p>
                <div class="cart-item-quantity">
                    <button onclick="updateQuantity('${book.tiltle}', -1)">-</button>
                    <span>${book.quantity || 1}</span>
                    <button onclick="updateQuantity('${book.tiltle}', 1)">+</button>
                </div>
            </div>
            <button class="remove-item" onclick="removeFromCart('${book.tiltle}')">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
        `;
    });

    cartContainer.innerHTML = cartHTML;
    document.getElementById('cart-total-amount').textContent = total.toFixed(2);
}

function updateQuantity(bookTitle, change) {
    const currentUser = localStorage.getItem('currentUser');
    let userCarts = JSON.parse(localStorage.getItem('userCarts'));
    let userCart = userCarts[currentUser];

    const bookIndex = userCart.findIndex(item => item.tiltle === bookTitle);
    if (bookIndex !== -1) {
        userCart[bookIndex].quantity = (userCart[bookIndex].quantity || 1) + change;
        
        if (userCart[bookIndex].quantity < 1) {
            userCart = userCart.filter(item => item.tiltle !== bookTitle);
        }
        
        userCarts[currentUser] = userCart;
        localStorage.setItem('userCarts', JSON.stringify(userCarts));
        displayCart();
        updateCartIcon();
    }
}

function removeFromCart(bookTitle) {
    const currentUser = localStorage.getItem('currentUser');
    let userCarts = JSON.parse(localStorage.getItem('userCarts'));
    userCarts[currentUser] = userCarts[currentUser].filter(item => item.tiltle !== bookTitle);
    localStorage.setItem('userCarts', JSON.stringify(userCarts));
    displayCart();
    updateCartIcon();
}

// Initialize cart icon on page load
document.addEventListener('DOMContentLoaded', updateCartIcon);