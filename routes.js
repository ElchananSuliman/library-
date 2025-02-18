document.addEventListener("DOMContentLoaded", function () {
  const app = document.getElementById("app");
  const routes = {
    "/": {
      title: "Home",
      content: `
        <h1 class="content">BEST SELLERS</h1>
        `,
    },
    "/Books": {
      title: "all-books",
      content: `
        <h1 class="content">ALL BOOKS</h1>
        `,
    },
    "/Fiction": {
      title: "Fiction",
      content: `
        <h1 class="content">BOOKS - FICTION</h1>
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

    404: {
      title: "Page Not Found",
      content: ``,
    },
  };

  function handleRoute() {
    const pathName = window.location.pathname;
    const route = routes[pathName] || routes["404"];

    document.title = `${route.title} - Books`;
    app.innerHTML = route.content;

    if (pathName === "/login") {
    }
    if (pathName === "/register") {
      // initElements();
    }
  }

  document.addEventListener("click", function (event) {
    if (event.target.matches(".nav-link")) {
      event.preventDefault();
      const href = event.target.getAttribute("href");

      window.history.pushState({}, "", href);
      handleRoute();
    }
  });
  window.addEventListener("popstate", handleRoute);
  handleRoute();
});
