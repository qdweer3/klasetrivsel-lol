const form = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const errorMessage = usernameInput.nextElementSibling;

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Basic validation example
  if (usernameInput.value.trim() === '') {
    errorMessage.textContent = 'Please enter your username';
    errorMessage.style.display = 'block';
    return;
  }

  // Simulate successful login (replace with actual authentication logic)
  alert('Login successful!');

  // Clear error message
  errorMessage.textContent = '';
  errorMessage.style.display = 'none';
});
