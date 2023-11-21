function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Perform API request for login
    fetch('https://home-pal.onrender.com/api-docs/#/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Login successful:', data);
        // Handle successful login, e.g., redirect to a dashboard
    })
    .catch(error => {
        console.error('Login error:', error);
        // Handle login error, e.g., display an error message
    });
}

function register() {
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    // Perform API request for registration
    fetch('https://home-pal.onrender.com/api-docs/#/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Registration successful:', data);
        // Handle successful registration, e.g., redirect to a dashboard
    })
    .catch(error => {
        console.error('Registration error:', error);
        // Handle registration error, e.g., display an error message
    });
     // Handle the response from the server
     console.log('Response from server:', data);

     if (data.message === 'Invalid Username or password') {
         setError(emailElement, '');
         setError(passwordElement, '');
         incorrectDetailsElement.innerHTML =
             'Username or password incorrect!';
     } else if (data.message === 'Logged in successfully') {
         console.log('Login successful!');

         incorrectDetailsElement.innerHTML = '';
         correctDetailsElement.innerHTML = 'Login Successful';

         setSuccess(emailElement);
         setSuccess(passwordElement);

         setTimeout(function () {
             window.location.href = 'index.html';
         }, 3000);
         // debugOutput2.innerHTML = data.message;
     } else {
         setError(emailElement, '');
         setError(passwordElement, '');
         incorrectDetailsElement.innerHTML =
             'Username or password incorrect!';
     }
 })
 .catch((error) => {
     console.error('Error:', error.message);
     networkFailureMessage.innerHTML = 'Network Failure. Try again';
 });
}
