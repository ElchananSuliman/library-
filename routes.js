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
        `
    },
    "/science": {
      title: "science",
      content: `
        <h1 class="content">BOOKS - SCIENCE</h1>
        `
    },
    "/History": {
      title: "History",
      content: `
        <h1 class="content">BOOKS - HISTORY</h1>
        `
    },
    "/Biography": {
      title: "Biography",
      content: `
        <h1 class="content">BOOKS - BIOGRAPHY</h1>
        `
    },
    "/login": {
      title: "",
      content: `
      `
    },
    "/register": {
      title: "",
      content: `
`
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
});