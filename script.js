document.getElementById("regForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let password = document.getElementById("password").value;

  if (phone.length !== 10 || isNaN(phone)) {
    document.getElementById("message").innerText = "Enter valid phone number";
    return;
  }

  if (password.length < 6) {
    document.getElementById("message").innerText = "Password must be at least 6 characters";
    return;
  }

  document.getElementById("message").innerText = "Registration Successful!";
});