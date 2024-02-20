// Securely handle user authentication and sensitive data in the front-end

// Function to handle login form submission securely
function login(event) {
    event.preventDefault(); // Prevent default form submission

    // Get username and password from the form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate username and password (e.g., length, format)
    if (username.length < 5 || password.length < 8) {
        alert('Invalid username or password format!');
        return;
    }

    // Send login request to server using fetch API
    fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Login failed!');
        }
        return response.json();
    })
    .then(data => {
        // Handle successful login (e.g., redirect to dashboard)
        window.location.href = '/dashboard';
    })
    .catch(error => {
        // Handle login error (e.g., display error message)
        console.error('Login error:', error.message);
        alert('Login failed. Please try again.');
    });
}

// Add event listener to login form submit button
document.getElementById('loginForm').addEventListener('submit', login);
