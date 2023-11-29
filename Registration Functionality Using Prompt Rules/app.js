// Get user input
let name = prompt("Enter your name: ");
let phoneNumber = prompt("Enter your phone number: ");
let email = prompt("Enter your email address: ");
let password = prompt("Enter a password: ");
let confirmPassword = prompt("Confirm your password: ");

// Check if all prompts are filled in
if (name === "" || phoneNumber === "" || email === "" || password === "" || confirmPassword === "") {
  // Show error message
  alert("Please fill in all required fields.");
} else {
  // Check if passwords match
  if (password === confirmPassword) {
    // Show success message
    alert("You are successfully registered!");
  } else {
    // Show error message
    alert("Passwords must match.");
  }
}
