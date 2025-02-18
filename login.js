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

export function initElements() {
  const loginForm = document.getElementById("login-form");
  const loginError = document.getElementById("login-error");
  const goToRegister = document.getElementById("go-to-register");
  const loginSection = document.getElementById("login");
  //
  const registerSection = document.getElementById("register");
  const registerForm = document.getElementById("register-form");
  const registerError = document.getElementById("register-error");
  //
  // const welcomeMessage = document.getElementById("welcome-message");

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
    //   localStorage.setItem("currentUser", JSON.stringify(newUser));

    clerFormRegister();
    registerMessage();
  });
}
function registerMessage() {
  const currentUser = loadFromLocalStorage("currentUser");
  //   const register = document.getElementById("register");
  const welcomeMessage = document.getElementById("welcome-message");
  welcomeMessage.textContent = `You have successfully registered !`;
  toggleVisibility(welcomeMessage, register);
  setTimeout(() => {
    welcomeMessage.textContent = `Welcome  ${currentUser.firstName} ${currentUser.lastName} to Books store!`;
  }, 3000);
  setTimeout(() => {
    goHome();
  }, 6000);
}

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = loginForm.querySelector("#username").value;
  const password = loginForm.querySelector("#password").value;

  const users = loadFromLocalStorage("users") || [];
  const user = users.find((u) => u.username === username);

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

    clerFormLogin();
    loginMessage();
  }
});

function loginMessage() {
  const currentUser = loadFromLocalStorage("currentUser");
  welcomeMessage.textContent = `Welcome ${currentUser.firstName} ${currentUser.lastName} to Books store!`;

  toggleVisibility(welcomeMessage, login);
  setTimeout(() => {
    goHome();
  }, 3000);
}
function goHome() {
  window.history.pushState({}, "", "/");
  handleRoute();
}
goToRegister.addEventListener("click", (e) => {
  e.preventDefault();
  const register = "/register";
  window.history.pushState({}, "", register);
  handleRoute();
});

function clerFormRegister() {
  const registerForm = document.getElementById("register-form");
  registerForm.reset();
  const registerError = document.getElementById("register-error");
  registerError.classList.add("hidden");
}
function clerFormLogin() {
  const loginForm = document.getElementById("login-form");
  loginForm.reset();
  const loginError = document.getElementById("login-error");
  loginError.classList.add("hidden");
}
