document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("allGoodMessage").style.display = "none";
});

function validateEmail() {
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");

  if (
    emailInput.value.length > 3 &&
    emailInput.value.includes("@") &&
    emailInput.value.includes(".")
  ) {
    emailError.textContent = "";
    emailError.classList.remove("error");
    emailError.classList.add("success");
  } else {
    emailError.textContent =
      "Make sure email is more than 3 characters and has @ and a .";
    emailError.classList.remove("success");
    emailError.classList.add("error");
  }
  checkAllGood();
}

function validatePassword() {
  const passwordInput = document.getElementById("password");
  const passwordError = document.getElementById("passwordError");

  if (passwordInput.value.length > 8) {
    passwordError.textContent = "";
    passwordError.classList.remove("error");
    passwordError.classList.add("success");
  } else {
    passwordError.textContent = "Make sure password is more than 8 characters.";
    passwordError.classList.remove("success");
    passwordError.classList.add("error");
  }
  checkAllGood();
}

let formCanceled = false;

function checkAllGood() {
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const allGoodMessage = document.getElementById("allGoodMessage");

  if (
    emailError.textContent === "" &&
    passwordError.textContent === "" &&
    !formCanceled
  ) {
    allGoodMessage.style.display = "block";
  } else {
    allGoodMessage.style.display = "none";
  }
}

function submitForm() {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const allGoodMessage = document.getElementById("allGoodMessage");

  // Clear error messages
  emailError.textContent = "";
  emailError.classList.remove("error", "success");
  passwordError.textContent = "";
  passwordError.classList.remove("error", "success");

  allGoodMessage.style.display = "block";

  const confirmed = window.confirm("Are you sure you want to submit?");

  if (confirmed) {
    if (formCanceled) {
      formCanceled = false;

      validateEmail();
      validatePassword();

      if (emailError.textContent === "" && passwordError.textContent === "") {
        alert("Successful signup!");
      } else {
        emailError.textContent = "Submission cancelled. Please try again.";
        emailError.style.color = "red";
        formCanceled = true;
      }
    }
  } else {
    emailInput.value = "";
    passwordInput.value = "";
    emailError.textContent = "Submission cancelled. Please try again.";
    emailError.style.color = "red";
    emailError.classList.add("error");
    formCanceled = true;
  }

  checkAllGood();
}
