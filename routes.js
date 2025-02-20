document.addEventListener("DOMContentLoaded", function () {
  setCurrentUser();
  const app = document.getElementById("app");
  const routes = {
    "/": {
      title: "Home",
      content: `
        <h1 class="content">BEST SELLERS</h1>
        <div id="cards">
        </div>
        `,
    },
    "/Books": {
      title: "all-books",
      content: `
        <h1 class="content">ALL BOOKS</h1>
        <div id="cards">
        </div>
        `,
    },
    "/Fiction": {
      title: "Fiction",
      content: `
        <h1 class="content">BOOKS - FICTION</h1>
        <div id="cards">
        </div>
        `,
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
             <div id="welcome-message" class="hidden message">
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
             <div id="welcome-message" class="hidden message"></div>`,
    },
    "/cart": {
      title: "Cart",
      content: `
       <div class="cart-container">
         <h1 class="content">CART</h1>
         <div id="cart-items">
          
         </div>
         <div id="cart-summary">
           <div class="cart-total">
             <h3>Total: <span id="cart-total-amount">0.00</span> $</h3>
           </div>
           <button id="checkout-btn" class="checkout-button">Proceed to Checkout</button>
         </div>
       </div>
      `,
    },
    404: {
      title: "Page Not Found",
      content: `
        `,
    },
  };

  function diplayBestSeller() {
    fetch("https://67aedfbb9e85da2f020e9f92.mockapi.io/blogs/blogs")
      .then((response) => response.json())
      .then((data) => {
        console.log("Data from API:", data);
        const card1 = document.getElementById("cards");
        const cardHTML = data
          .filter((card) => card.category === "Best Seller")
          .map((card) => createDivBook(card))
          .join("");
        card1.innerHTML = cardHTML;
      });
  }

  function diplayFiction() {
    fetch("https://67aedfbb9e85da2f020e9f92.mockapi.io/blogs/blogs")
      .then((response) => response.json())
      .then((data) => {
        const card1 = document.getElementById("cards");
        const cardHTML = data
          .filter((card) => card.category === "Fiction")
          .map((card) => createDivBook(card))
          .join("");
        card1.innerHTML = cardHTML;
      });
  }

  function displayAllBooks() {
    fetch("https://67aedfbb9e85da2f020e9f92.mockapi.io/blogs/blogs")
      .then((response) => response.json())
      .then((data) => {
        const card2 = document.getElementById("cards");
        const cardHTML = data.map((card) => createDivBook(card)).join("");
        card2.innerHTML = cardHTML;
      });
  }

  function displayCart() {
    const cartItems = document.getElementById("cart-items");
    if (cartItems) {
      // Récupérer les éléments du panier depuis le localStorage
      const cart = JSON.parse(localStorage.getItem("cart")) || [];

      document.addEventListener("click", function (event) {
        const navLink = event.target.closest(".nav-link");
        if (navLink) {
          event.preventDefault();
          const href = navLink.getAttribute("href");
          window.history.pushState({}, "", href);
          handleRoute();
        }

        // Afficher les éléments du panier
        const cartHTML = cart
          .map(
            (item) => `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.title}" class="cart-item-image">
          <div class="cart-item-details">
            <h3>${item.title}</h3>
            <p>Prix: ${item.price} $</p>
            <button class="remove-item" data-id="${item.id}">Supprimer</button>
          </div>
        </div>
      `
          )
          .join("");

        cartItems.innerHTML = cartHTML;

        // Mettre à jour le total
        const total = cart.reduce(
          (sum, item) => sum + parseFloat(item.price),
          0
        );
        document.getElementById("cart-total-amount").textContent =
          total.toFixed(2);
      });
    }
  }

  function handleRoute() {
    console.log("Handling route:", window.location.pathname);
    const pathName = window.location.pathname;
    const route = routes[pathName] || routes["404"];

    document.title = `${route.title} - Books`;
    app.innerHTML = route.content;

    if (pathName === "/") {
      diplayBestSeller();
    }
    if (pathName === "/Books") {
      displayAllBooks();
    }
    if (pathName === "/Fiction") {
      diplayFiction();
    }
    if (pathName === "/cart") {
      displayCart();
    }
    if (pathName === "/login") {
      initLogin();
    }
    if (pathName === "/register") {
      initRegister();
    }
  }
  let cart = [];

  document.addEventListener("click", function (event) {
    const navLink = event.target.closest(".nav-link");
    if (navLink) {
      event.preventDefault();
      const href = navLink.getAttribute("href");
      window.history.pushState({}, "", href);
      handleRoute();
    }

    //add//
    if (event.target.classList.contains("btn-cart")) {
      const bookDiv = event.target.closest(".book");
      const title = bookDiv.querySelector(".title").textContent;
      const priceText = bookDiv.querySelector(".price").textContent;
      const URLimage = bookDiv.querySelector(".b-card").src;
      const price = parseFloat(priceText.replace("$", ""));


      const existingItem = cart.find((item) => item.title === title);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        cart.push({
          URLimage,
          title,
          price,
          quantity: 1,
        });
      }

      displayCart();
    }


    if (event.target.classList.contains("remove-item")) {
      const title = event.target.getAttribute("id");
      const itemIndex = cart.findIndex((item) => item.title === title);

      if (itemIndex !== -1) {
        if (cart[itemIndex].quantity > 1) {
          cart[itemIndex].quantity--;
        } else {
          cart.splice(itemIndex, 1);
        }
        displayCart();
      }
    }
    if (event.target.classList.contains("add-item")) {
      const title = event.target.closest(".cart-item").querySelector("strong").textContent;
      increaseQuantity(title);
    }

  });

  function increaseQuantity(title) {
    const item = cart.find(item => item.title === title);
    if (item) {
      item.quantity++; // Augmenter la quantité
      displayCart(); // Mettre à jour l'affichage
    }
  }

  function displayCart() {
    const cartContainer = document.querySelector("#cart-items");
    cartContainer.innerHTML = "";

    if (cart.length === 0) {
      cartContainer.innerHTML = "<p>The cart is empty</p>";
      document.getElementById("cart-total-amount").textContent = "0.00";
      return;
    }
    cart.forEach((item) => {
      cartContainer.innerHTML += `
        <div class="cart-item">
        <img src="${item.URLimage}" alt="${item.URLimage}" class="b-card">
          <p><strong>${item.title}</strong> - $${item.price.toFixed(2)} (x${item.quantity})</p>
          <button class="add-item" onclick="increaseQuantity('${item.title}')">+</button>
          <button class="remove-item" id ="${item.title}">-</button>
        </div>
      `;
    });

    // Mise à jour du total
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    document.getElementById("cart-total-amount").textContent = total.toFixed(2)
  }

  function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function loadFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  function toggleVisibility(showElement, hideElement) {
    showElement.classList.remove("hidden");
    hideElement.classList.add("hidden");
  }

  function goHome() {
    console.log("Navigating to home...");
    window.history.pushState({}, "", "/");
    handleRoute();
  }

  function initRegister() {
    const register = document.getElementById("register");
    const registerForm = document.getElementById("register-form");
    const registerError = document.getElementById("register-error");

    const welcomeMessage = document.getElementById("welcome-message");
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const newUser = {
        firstName: registerForm.querySelector("#first-name").value,
        lastName: registerForm.querySelector("#last-name").value,
        email: registerForm.querySelector("#email").value,
        phone: registerForm.querySelector("#phone").value,
        address: registerForm.querySelector("#address").value,
        username: registerForm.querySelector("#username").value,
        password: registerForm.querySelector("#register-password").value,
        cart: [],
      };

      const users = loadFromLocalStorage("users") || [];

      // Check for duplicate username
      const existingUser = users.find((u) => u.username === newUser.username);
      if (existingUser) {
        registerError.textContent = "Username already exists.";
        registerError.classList.remove("hidden");
        return;
      }

      registerError.classList.add("hidden");
      users.push(newUser);
      saveToLocalStorage("users", users);

      saveToLocalStorage("currentUser", newUser);
      sessionStorage.setItem("currentUser", newUser);

      registerForm.reset();
      registerError.classList.add("hidden");
      // const currentUser = newUser;

      welcomeMessage.textContent = `You have successfully registered !`;
      toggleVisibility(welcomeMessage, register);

      setTimeout(() => {
        welcomeMessage.textContent = `Welcome ${newUser.firstName} ${newUser.lastName} to Books Store!`;
      }, 3000);

      setTimeout(goHome, 6000);
    });
    setCurrentUser();
  }

  function initLogin() {
    const loginForm = document.getElementById("login-form");
    const loginError = document.getElementById("login-error");
    const goToRegister = document.getElementById("go-to-register");

    const welcomeMessage = document.getElementById("welcome-message");

    const loginSection = document.getElementById("login");

    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = loginForm.querySelector("#username").value;
      const password = loginForm.querySelector("#password").value;

      const users = loadFromLocalStorage("users") || [];
      const user = users.find((u) => u.username === username);

      console.log(loginError);
      if (!user) {
        loginError.textContent =
          "User not found Please enter correct name or register now";
        loginError.classList.remove("hidden");
      } else if (user.password !== password) {
        loginError.textContent = "Incorrect password.";
        loginError.classList.remove("hidden");
      } else {
        loginError.classList.add("hidden");

        localStorage.setItem("currentUser", JSON.stringify(user));
        sessionStorage.setItem("currentUser", JSON.stringify(user));

        loginForm.reset();
        loginError.classList.add("hidden");

        const loginMessage = () => {
          console.log("login massage");
          const currentUser = loadFromLocalStorage("currentUser");
          // const currentUser = sessionStorage.getItem("currenUser");
          welcomeMessage.textContent = `Welcome ${currentUser.firstName} ${currentUser.lastName} to Books store!`;

          toggleVisibility(welcomeMessage, login);
          setTimeout(() => {
            goHome();
          }, 3000);
        };
        setCurrentUser();
        loginMessage();
      }
    });

    goToRegister.addEventListener("click", (e) => {
      e.preventDefault();
      const register = "/register";
      window.history.pushState({}, "", register);
      handleRoute();
    });
  }
  // set current user
  function setCurrentUser() {
    const currentUserFromSession = sessionStorage.getItem("currentUser");
    const currentUserElement = document.getElementById("currentUser");
    let user = "disconnected";
    if (currentUserFromSession) {
      try {
        const parsedUser = JSON.parse(currentUserFromSession);
        user = parsedUser.username || "disconnected";
      } catch (error) {
        console.error("Error parsing session data:", error);
      }
    }

    currentUserElement.textContent = user;
  }
});