function validateName(inputElement) {
  const errorElement = document.getElementById(`${inputElement.id}-error`);
  const value = inputElement.value.trim();
  const nameRegex = /^[a-zA-Zא-ת\s]{2,15}$/;

  if (!nameRegex.test(value)) {
    if (/[^a-zA-Zא-ת\s]/.test(value)) {
      errorElement.textContent = "ניתן להכניס רק אותיות ";
    } else if (value.length < 2) {
      errorElement.textContent = "יש להכניס לפחות 2 תווים";
    } else if (value.length > 15) {
      errorElement.textContent = "יש להכניס עד 15 תווים בלבד";
    }
    errorElement.classList.remove("hidden");
    return false;
  } else {
    errorElement.classList.add("hidden");
    return true;
  }
}

function validateEmail() {
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("email-error");
  const value = emailInput.value.trim();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(value)) {
    emailError.textContent = 'כתובת דוא"ל אינה תקינה';
    emailError.classList.remove("hidden");
    emailInput.value = "";
    return false;
  } else {
    emailError.classList.add("hidden");
    return true;
  }
}

function validatePhone() {
  const phoneInput = document.getElementById("phone");
  const phoneError = document.getElementById("phone-error");
  const value = phoneInput.value.trim();
  const phoneRegex = /^(?:\+972|0)([2-9]\d{7,8})$/;

  if (!phoneRegex.test(value)) {
    phoneError.textContent = "מספר הטלפון שהוזן אינו תקין";
    phoneError.classList.remove("hidden");
    phoneInput.value = "";
    return false;
  } else {
    phoneError.classList.add("hidden");
    return true;
  }
}

function validatePassword() {
  const passwordInput = document.getElementById("register-password");
  const passwordError = document.getElementById("register-password-error");
  const value = passwordInput.value.trim();
  const passwordRegex = /^.{6,12}$/;

  if (!passwordRegex.test(value)) {
    passwordError.textContent = "הסיסמה חייבת להיות באורך של 6 עד 12 תווים";
    passwordError.classList.remove("hidden");
    passwordInput.value = "";
    return false;
  } else {
    passwordError.classList.add("hidden");
    return true;
  }
}
