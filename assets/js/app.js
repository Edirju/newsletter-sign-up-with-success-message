const signupCard = document.getElementById("signup-card");
const successCard = document.getElementById("success-card");
const form = document.getElementById("newsletter-form");
const emailInput = document.getElementById("email");
const errorMsg = document.getElementById("error-msg");
const userEmailSpan = document.getElementById("user-email");
const dismissBtn = document.getElementById("dismiss-btn");

// Función para validar email
function isValidEmail() {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(emailInput.value);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailValue = emailInput.value.trim();

  if (emailValue === "" || !isValidEmail(emailValue)) {
    // Mostrar error
    emailInput.classList.add("error");
    errorMsg.style.display = "block";
  } else {
    // Éxito
    emailInput.classList.remove("error");
    errorMsg.style.display = "none";

    // Pasar el email a la tarjeta de éxito
    userEmailSpan.textContent = emailValue;

    // Cambiar de vista
    signupCard.classList.add("hidden");
    successCard.classList.remove("hidden");
  }
});

// Botón para volver al inicio
dismissBtn.addEventListener('click', () => {
  signupCard.classList.remove('hidden');
  successCard.classList.add('hidden');
  form.reset();
});

// Limpiar error mientras el usuario escribe
emailInput.addEventListener('input', () => {
  if (emailInput.classList.contains('error')) {
    emailInput.classList.remove('error');
    errorMsg.style.display = 'none';
  }
});