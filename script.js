function validateEmail() {
  const emailInput = document.getElementById("email").value;
  const emailError = document.getElementById("emailError");
  const successMessage = document.getElementById("successMsg");

  if (
    emailInput.length > 3 &&
    emailInput.includes("@") &&
    emailInput.includes(".")
  ) {
    emailError.textContent = "";
    successMessage.textContent = "All good to go";
    successMessage.style.display = "block";
  } else {
    emailError.textContent =
      'Invalid email. It must contain "@" and "." and have more than 3 characters.';
    successMessage.style.display = "none";
  }
}

function validatePassword() {
  const passwordInput = document.getElementById("password").value;
  const passwordError = document.getElementById("passwordError");
  const successMessage = document.getElementById("successMsg");

  if (passwordInput.length > 8) {
    passwordError.textContent = "";
    successMessage.textContent = "All good to go";
    successMessage.style.display = "block";
  } else {
    passwordError.textContent = "Password must be more than 8 characters.";
    successMessage.style.display = "none";
  }
}

function handleSubmit() {
  const emailInput = document.getElementById("email").value;
  const passwordInput = document.getElementById("password").value;

  if (
    emailInput.length > 3 &&
    emailInput.includes("@") &&
    emailInput.includes(".") &&
    passwordInput.length > 8
  ) {
    const confirmation = confirm("Are you sure you want to submit the form?");
    if (confirmation) {
      alert("Successful signup!");
      document.getElementById("signupForm").reset();
      document.getElementById("successMessage").style.display = "none";
    } else {
      document.getElementById("signupForm").reset();
    }
  } else {
    alert("Please fill out the form correctly.");
  }
}
