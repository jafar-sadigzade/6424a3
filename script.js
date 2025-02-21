/* script.js */
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('loginUsername').value;
            const password = document.getElementById('loginPassword').value;

            // Basic client-side validation (replace with server-side validation)
            if (username && password) {
                // In a real application, send data to the server for authentication
                console.log('Login:', { username, password });
                alert('Login successful (simulated). Check console.');
                // Here, you would redirect the user upon successful login
            } else {
                alert('Please enter both username and password.');
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('registerUsername').value;
            const password = document.getElementById('registerPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            if (password !== confirmPassword) {
                alert('Passwords do not match.');
                return;
            }
            if (username && password) {
                // In a real application, send data to the server for registration
                console.log('Register:', { username, password });
                alert('Registration successful (simulated). Check console.');
                // Here, you would redirect the user upon successful registration
            } else {
                alert('Please enter username and password.');
            }
        });
    }
});