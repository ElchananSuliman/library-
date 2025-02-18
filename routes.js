// document.addEventListener("DOMContentLoaded", function () {

//   const app = document.getElementById("app");
//   const routes = {
//     "/": {
//       title: "Home",
//       content: `
//         <h1 class="content">BEST SELLERS</h1>
//         <div id="cards">
//         </div>
//         `
//     },
//     "/Books": {
//       title: "all-books",
//       content: `
//         <h1 class="content">ALL BOOKS</h1>
//         <div id="cards">
//         </div>
//         `
//     },
//     "/Fiction": {
//       title: "Fiction",
//       content: `
//         <h1 class="content">BOOKS - FICTION</h1>
//         <div id="cards">
//         </div>
//         `
//     },
//     "/Non-Fiction": {
//       title: "Non-Fiction",
//       content: `
//         <h1 class="content">BOOKS - NON FICTION</h1>
//         `
//     },
//     "/science": {
//       title: "science",
//       content: `
//         <h1 class="content">BOOKS - SCIENCE</h1>
//         `
//     },
//     "/History": {
//       title: "History",
//       content: `
//         <h1 class="content">BOOKS - HISTORY</h1>
//         `
//     },
//     "/Biography": {
//       title: "Biography",
//       content: `
//         <h1 class="content">BOOKS - BIOGRAPHY</h1>
//         `
//     },
//     "/login": {
//       title: "",
//       content: `
//       `
//     },
//     "/register": {
//       title: "",
//       content: `
// `
//     },
//     "/cart": {
//       title: "Cart",
//       content: `
//        <h1 class="content">CART</h1>
//        <div class="cart-container">
//          <h1 class="content">CART</h1>
//          <div id="cart-items">

//          </div>
//          <div id="cart-summary">
//            <div class="cart-total">
//              <h3>Total: <span id="cart-total-amount">0.00</span> €</h3>
//            </div>
//            <button id="checkout-btn" class="checkout-button">Proceed to Checkout</button>
//          </div>
//        </div>
//       `

//     },

//     404: {
//       title: "Page Not Found",
//       content: `
//         `
//     }
//   };

//   function diplayBestSeller() {
//     fetch("https://67aedfbb9e85da2f020e9f92.mockapi.io/blogs/blogs").then(response => response.json()).then(data => {
//       const card1 = document.getElementById("cards");
//       const cardHTML = data.filter(card => card.category === "Best Seller").map(card => createDivBook(card)).join("")
//       card1.innerHTML = cardHTML;
//     })

//   }

//   function diplayFiction() {
//     fetch("https://67aedfbb9e85da2f020e9f92.mockapi.io/blogs/blogs").then(response => response.json()).then(data => {
//       const card1 = document.getElementById("cards");
//       const cardHTML = data.filter(card => card.category === "Fiction").map(card => createDivBook(card)).join("")
//       card1.innerHTML = cardHTML;
//     })

//   }

//   function displayAllBooks() {
//     fetch("https://67aedfbb9e85da2f020e9f92.mockapi.io/blogs/blogs").then(response => response.json()).then(data => {
//       const card2 = document.getElementById("cards");
//       const cardHTML = data.map(card => createDivBook(card)).join("")
//       card2.innerHTML = cardHTML;
//     })
//   }

//   function handleRoute() {
//     const pathName = window.location.pathname;
//     const route = routes[pathName] || routes["404"];

//     document.title = `${route.title} - Books`;

//     app.innerHTML = route.content;


//     if (pathName === '/') {
//       diplayBestSeller()
//     }
//     if (pathName === '/Books') {
//       displayAllBooks()
//     }
//     if (pathName === '/Fiction') {
//       diplayFiction()
//     }
//   }

//   document.addEventListener("click", function (event) {
//     const navLink = event.target.closest('.nav-link');
// if (navLink){
//     // if (event.target.matches(".nav-link")) {
//       // need check class name
//       event.preventDefault();
//       const href = event.target.getAttribute("href");

//       window.history.pushState({}, "", href);
//       handleRoute();
//     }
//   });
//   window.addEventListener("popstate", handleRoute);
//   handleRoute();
// });
document.addEventListener("DOMContentLoaded", function () {
  const app = document.getElementById("app");
  const routes = {
    "/": {
      title: "Home",
      content: `
        <h1 class="content">BEST SELLERS</h1>
        <div id="cards">
        </div>
        `
    },
    "/Books": {
      title: "all-books",
      content: `
        <h1 class="content">ALL BOOKS</h1>
        <div id="cards">
        </div>
        `
    },
    "/Fiction": {
      title: "Fiction",
      content: `
        <h1 class="content">BOOKS - FICTION</h1>
        <div id="cards">
        </div>
        `
    },
    "/Non-Fiction": {
      title: "Non-Fiction",
      content: `
        <h1 class="content">BOOKS - NON FICTION</h1>
        `,
    },
    "/science": {
      title: "science",
      content: `
        <h1 class="content">BOOKS - SCIENCE</h1>
        `,
    },
    "/History": {
      title: "History",
      content: `
        <h1 class="content">BOOKS - HISTORY</h1>
        `,
    },
    "/Biography": {
      title: "Biography",
      content: `
        <h1 class="content">BOOKS - BIOGRAPHY</h1>
        `,
    },
    "/login": {
      title: "login",
      content: `
       <div id="login">
                <h2>Login</h2>
                <form id="login-form" class="form-layout">
                    <div class="form-group">
                        <label for="username">Username:</label>
                        <input type="text" id="username" name="username" required>
                    </div>

                    <div class="form-group">
                        <label for="password">Password:</label>
                        <input type="password" id="password" name="password" required>
                    </div>
                    <p class="error hidden" id="login-error"></p>

                    <button type="submit">Login</button>
                </form>

                <p>Don't have an account? <br>
                    <a href="/register" id="go-to-register">Register here</a>
                </p>
            </div>
             <div id="welcome-message" class="hidden">
      `,
    },
    "/register": {
      title: "register",
      content: `<div id="register">
                <h2>Register</h2>
                <form id="register-form" class="form-layout">
                    <div class="form-group">
                        <label for="first-name">First Name:</label>
                        <input id="first-name" name="first-name" placeholder="הכנס שם (2-15 אותיות בלבד)"
                            onblur="validateName(this)" required>
                        <p class="error hidden" id="first-name-error"></p>
                    </div>

                    <div class="form-group">
                        <label for="last-name">Last Name:</label>
                        <input id="last-name" name="last-name" placeholder="הכנס שם (2-15 אותיות בלבד)"
                            onblur="validateName(this)" required>
                        <p class="error hidden" id="last-name-error"></p>
                    </div>

                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input id="email" name="email" placeholder="example@domain.com" onblur="validateEmail()"
                            required>
                        <p class="error hidden" id="email-error">הכנס דוא"ל תקין !</p>
                    </div>

                    <div class="form-group">
                        <label for="phone">Phone:</label>
                        <input id="phone" name="phone" placeholder="הכנס מספר טלפון תקין (לדוגמה: 0501234567)"
                            onblur="validatePhone()" required>
                        <p class="error hidden" id="phone-error">הכנס מספר טלפון/פלאפון תקין !</p>
                    </div>

                    <div class="form-group">
                        <label for="address">Address:</label>
                        <input type="text" id="address" name="address" placeholder="הכנס כתובת" required>
                    </div>

                    <div class="form-group">
                        <label for="username">Username:</label>
                        <input id="username" name="username" placeholder="הכנס שם משתמש לאתר
                        " onblur="validateName(this)" required>
                        <p class="error hidden" id="username-error"></p>
                    </div>

                    <div class="form-group">
                        <label for="register-password">Password:</label>
                        <input id="register-password" name="register-password" placeholder="סיסמה באורך 6-12 תווים"
                            onblur="validatePassword()" required>
                        <p class="error hidden" id="register-password-error">הכנס סיסמא עם מינימום 6 תווים ומקסימום 12
                        </p>
                    </div>

                    <div class="form-group">
                        <button type="submit">Register</button>
                    </div>
                </form>
                <p class="error" id="register-error"></p>
            </div>
             <div id="welcome-message" class="hidden">`,
    },
    "/cart": {
      title: "Cart",
      content: `
       <div class="cart-container">
         <h1 class="content">CART</h1>
         <div id="cart-items">
           <!-- Les articles du panier seront affichés ici -->
         </div>
         <div id="cart-summary">
           <div class="cart-total">
             <h3>Total: <span id="cart-total-amount">0.00</span> €</h3>
           </div>
           <button id="checkout-btn" class="checkout-button">Proceed to Checkout</button>
         </div>
       </div>
      `
    },
    404: {
      title: "Page Not Found",
      content: `
        `
    }
  };

  function diplayBestSeller() {
    fetch("https://67aedfbb9e85da2f020e9f92.mockapi.io/blogs/blogs")
      .then(response => response.json())
      .then(data => {
        const card1 = document.getElementById("cards");
        const cardHTML = data.filter(card => card.category === "Best Seller").map(card => createDivBook(card)).join("")
        card1.innerHTML = cardHTML;
      })
  }

  function diplayFiction() {
    fetch("https://67aedfbb9e85da2f020e9f92.mockapi.io/blogs/blogs")
      .then(response => response.json())
      .then(data => {
        const card1 = document.getElementById("cards");
        const cardHTML = data.filter(card => card.category === "Fiction").map(card => createDivBook(card)).join("")
        card1.innerHTML = cardHTML;
      })
  }

  function displayAllBooks() {
    fetch("https://67aedfbb9e85da2f020e9f92.mockapi.io/blogs/blogs")
      .then(response => response.json())
      .then(data => {
        const card2 = document.getElementById("cards");
        const cardHTML = data.map(card => createDivBook(card)).join("")
        card2.innerHTML = cardHTML;
      })
  }

  function displayCart() {
    const cartItems = document.getElementById('cart-items');
    if (cartItems) {
      // Récupérer les éléments du panier depuis le localStorage
      const cart = JSON.parse(localStorage.getItem('cart')) || [];

      if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Votre panier est vide</p>';
        return;
      }

      // Afficher les éléments du panier
      const cartHTML = cart.map(item => `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.title}" class="cart-item-image">
          <div class="cart-item-details">
            <h3>${item.title}</h3>
            <p>Prix: ${item.price} €</p>
            <button class="remove-item" data-id="${item.id}">Supprimer</button>
          </div>
        </div>
      `).join('');

      cartItems.innerHTML = cartHTML;

      // Mettre à jour le total
      const total = cart.reduce((sum, item) => sum + parseFloat(item.price), 0);
      document.getElementById('cart-total-amount').textContent = total.toFixed(2);
    }
  }

  function handleRoute() {
    const pathName = window.location.pathname;
    const route = routes[pathName] || routes["404"];

    document.title = `${route.title} - Books`;
    app.innerHTML = route.content;

    if (pathName === '/') {
      diplayBestSeller()
    }
    if (pathName === '/Books') {
      displayAllBooks()
    }
    if (pathName === '/Fiction') {
      diplayFiction()
    }
    if (pathName === '/cart') {
      displayCart();
      if (pathName === "/login") {}
      if (pathName === "/register") {
        // initElements();
      }
    }
  }
  document.addEventListener("click", function (event) {
    const navLink = event.target.closest('.nav-link');
    if (navLink) {
      event.preventDefault();
      const href = navLink.getAttribute("href");
      window.history.pushState({}, "", href);
      handleRoute();
    }

    // Gestion de la suppression d'articles du panier
    if (event.target.classList.contains('remove-item')) {
      const itemId = event.target.dataset.id;
      removeFromCart(itemId);
      displayCart();
    }
  });

  function removeFromCart(itemId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  window.addEventListener("popstate", handleRoute);
  handleRoute();
})