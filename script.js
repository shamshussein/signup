function signinWithGoogle() {
    alert("Google sign-up is not implemented yet!");
  }
  
  function signinWithFacebook() {
    alert("Facebook sign-up activity initiated!");
  }
  
  function signinWithEmail() {
    alert("Email sign-up is not implemented yet!");
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
