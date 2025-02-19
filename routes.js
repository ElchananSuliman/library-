// routes.js
// routes.js - début du fichier
document.addEventListener("DOMContentLoaded", function() {
  
  
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
              </div>
          `
      },
      "/register": {
          title: "register",
          content: `
              <div id="register">
                  <h2>Register</h2>
                  <form id="register-form" class="form-layout">
                      <div class="form-group">
                          <label for="first-name">First Name:</label>
                          <input id="first-name" name="first-name" placeholder="Enter name (2-15 letters only)"
                              onblur="validateName(this)" required>
                          <p class="error hidden" id="first-name-error"></p>
                      </div>

                      <div class="form-group">
                          <label for="last-name">Last Name:</label>
                          <input id="last-name" name="last-name" placeholder="Enter name (2-15 letters only)"
                              onblur="validateName(this)" required>
                          <p class="error hidden" id="last-name-error"></p>
                      </div>

                      <div class="form-group">
                          <label for="email">Email:</label>
                          <input id="email" name="email" placeholder="example@domain.com" onblur="validateEmail()"
                              required>
                          <p class="error hidden" id="email-error">Please enter a valid email!</p>
                      </div>

                      <div class="form-group">
                          <label for="phone">Phone:</label>
                          <input id="phone" name="phone" placeholder="Enter valid phone number (e.g., 0501234567)"
                              onblur="validatePhone()" required>
                          <p class="error hidden" id="phone-error">Please enter a valid phone number!</p>
                      </div>

                      <div class="form-group">
                          <label for="address">Address:</label>
                          <input type="text" id="address" name="address" placeholder="Enter address" required>
                      </div>

                      <div class="form-group">
                          <label for="username">Username:</label>
                          <input id="username" name="username" placeholder="Enter username"
                              onblur="validateName(this)" required>
                          <p class="error hidden" id="username-error"></p>
                      </div>

                      <div class="form-group">
                          <label for="register-password">Password:</label>
                          <input type="password" id="register-password" name="register-password" 
                              placeholder="Password (6-12 characters)"
                              onblur="validatePassword()" required>
                          <p class="error hidden" id="register-password-error">Password must be between 6 and 12 characters</p>
                      </div>

                      <div class="form-group">
                          <button type="submit">Register</button>
                      </div>
                  </form>
                  <p class="error" id="register-error"></p>
              </div>
              <div id="welcome-message" class="hidden">
              </div>
          `
      },
      "/cart": {
          title: "Cart",
          content: `
              <div class="cart-container">
                  <h1 class="content">CART</h1>
                  <div id="cart-items">
                      <!-- Cart items will be displayed here -->
                  </div>
                  <div id="cart-summary">
                      <div class="cart-total">
                          <h3>Total: $<span id="cart-total-amount">0.00</span></h3>
                      </div>
                      <button id="checkout-btn" class="checkout-button">Proceed to Checkout</button>
                  </div>
              </div>
          `
      },
      "404": {
          title: "Page Not Found",
          content: `
              <div class="error-page">
                  <h1>404 - Page Not Found</h1>
                  <p>The page you are looking for does not exist.</p>
                  <a href="/" class="nav-link">Return to Home</a>
              </div>
          `
      }
  };

  const app = document.getElementById("app");

  function handleRoute() {
      const pathName = window.location.pathname;
      const route = routes[pathName] || routes["404"];

      document.title = `${route.title} - Books`;
      app.innerHTML = route.content;

      if (pathName === '/') {
          displayBestSellers();
      } else if (pathName === '/Books') {
          displayAllBooks();
      } else if (pathName === '/Fiction') {
          displayFiction();
      } else if (pathName === '/cart') {
          displayCart();
      } else if (pathName === '/login') {
          initLoginHandlers();
      } else if (pathName === '/register') {
          initRegisterHandlers();
      }
  }

  function displayBestSellers() {
      fetch("https://67aedfbb9e85da2f020e9f92.mockapi.io/blogs/blogs")
          .then(response => response.json())
          .then(data => {
              const cardsContainer = document.getElementById("cards");
              const cardHTML = data
                  .filter(card => card.category === "Best Seller")
                  .map(book => createDivBook(book))
                  .join("");
                  console.log(cardHTML);
                  
              cardsContainer.innerHTML = cardHTML;
          });
  }

  function displayAllBooks() {
      fetch("https://67aedfbb9e85da2f020e9f92.mockapi.io/blogs/blogs")
          .then(response => response.json())
          .then(data => {
              const cardsContainer = document.getElementById("cards");
              const cardHTML = data.map(createDivBook).join("");
              cardsContainer.innerHTML = cardHTML;
          });
  }

  function displayFiction() {
      fetch("https://67aedfbb9e85da2f020e9f92.mockapi.io/blogs/blogs")
          .then(response => response.json())
          .then(data => {
              const cardsContainer = document.getElementById("cards");
              const cardHTML = data
                  .filter(card => card.category === "Fiction")
                  .map(createDivBook)
                  .join("");
              cardsContainer.innerHTML = cardHTML;
          });
  }

  document.addEventListener("click", function(event) {
      const navLink = event.target.closest('.nav-link');
      if (navLink) {
          event.preventDefault();
          const href = navLink.getAttribute("href");
          window.history.pushState({}, "", href);
          handleRoute();
      }
  });

  window.addEventListener("popstate", handleRoute);
  handleRoute();
  updateCartIcon();
});