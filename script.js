document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting
    
    // Get input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    // Clear previous error message
    errorMessage.textContent = '';
    
    // Basic validation (email and password required)
    if (email === '' || password === '') {
        errorMessage.textContent = 'Please enter both email and password.';
        return;
    }

    // Basic email format check (optional, not necessary for full implementation)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.match(emailPattern)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        return;
    }

    // Simulate login success or failure (hardcoded credentials for simplicity)
    const hardcodedEmail = 'user@example.com';
    const hardcodedPassword = 'password123';

    if (email === hardcodedEmail && password === hardcodedPassword) {
        window.location.href = 'index.html'; // Redirect to main page (Facebook clone)
    } else {
        errorMessage.textContent = 'Incorrect email or password. Please try again.';
    }
});
