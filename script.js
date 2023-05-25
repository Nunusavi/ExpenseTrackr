// User Registration
function registerUser(event) {
    event.preventDefault();
  
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
  
    // Validate the form inputs
    if (username === '' || password === '' || confirmPassword === '') {
      alert('Please fill in all fields.');
      return;
    }
  
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
  
    // Create a new user account with the provided username and password
    // (Here you would typically make an AJAX request to the server to create the account)
  
    // Store the user account details securely in the database
    // (Here you would typically make an AJAX request to the server to store the details)
  
    // Redirect the user to the login page with a success message
    alert('Registration successful! Please log in.');
    showLoginForm();
  }
  
  // User Login
  function loginUser(event) {
    event.preventDefault();
  
    var loginUsername = document.getElementById('loginUsername').value;
    var loginPassword = document.getElementById('loginPassword').value;
  
    // Validate the form inputs
    if (loginUsername === '' || loginPassword === '') {
      alert('Please fill in all fields.');
      return;
    }
  
    // Retrieve the user account details based on the provided username
    // (Here you would typically make an AJAX request to the server to retrieve the details)
  
    // Check if a matching user account is found
    // (Here you would typically compare the username and password with the retrieved details)
  
    // Compare the provided password with the stored password hash
    // (Here you would typically use a hashing algorithm to compare the passwords)
  
    // Authenticate the user and redirect to the dashboard page if passwords match
    // (Here you would typically set a session or token to authenticate the user)
  
    // Display an error message indicating incorrect password if passwords don't match
    alert('Incorrect password.');
  
    // Display an error message indicating invalid username if no matching user account is found
    alert('Invalid username.');
  }
  
  // User Logout
  function logoutUser() {
    // End the user session
    // (Here you would typically clear the session or token)
  
    // Redirect the user to the login page with a success message
    alert('Logout successful!');
    showLoginForm();
  }
  
  function showRegistrationForm() {
    document.getElementById('registrationForm').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('dashboard').style.display = 'none';
  }
  
  function showLoginForm() {
    document.getElementById('registrationForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('dashboard').style.display = 'none';
  }
  
  function showDashboard() {
    document.getElementById('registrationForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
  }
  
  // Initial page setup
  showLoginForm();
  