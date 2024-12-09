function handleSignUp() {
  event.preventDefault(); 

  const emailField = document.getElementById('email-field');
  const passwordField = document.getElementById('password-field');
  const nameField = document.getElementById('username-field');

  if (!emailField.value || !passwordField.value || !nameField.value) {
      alert("Please fill all the required fields before proceeding.");
      return; 
  }

  alert("Sign-up successful! Welcome " + nameField.value);

  document.getElementById('signup-form').reset();
}

function togglePasswordVisibility() {
  const passwordField = document.getElementById('password-field');
  const passwordIcon = document.getElementById('password-icon');

  if (passwordField.type === 'password') {
      passwordField.type = 'text';
      passwordIcon.classList.remove('fa-lock');
      passwordIcon.classList.add('fa-unlock'); 
  } else {
      passwordField.type = 'password';
      passwordIcon.classList.remove('fa-unlock');  
      passwordIcon.classList.add('fa-lock'); 
  }
}
