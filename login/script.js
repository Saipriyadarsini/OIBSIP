
function registerUser() {
    var regUsername = document.getElementById('regUsername').value;
    var regPassword = document.getElementById('regPassword').value;

   // Check if the username already exists
    if (localStorage.getItem(regUsername)) {
        alert('Username already exists. Choose a different one.');
        return;
    }

    // Save the user information in local storage
    localStorage.setItem(regUsername, regPassword);
    alert("registered successfully");
  
}

function validateLogin() {
    var loginUsername = document.getElementById('loginUsername').value;
    var loginPassword = document.getElementById('loginPassword').value;

    // Check if the username exists
    if (!localStorage.getItem(loginUsername)) {
        alert('Username not found. Please register.');
        return;
    }

    // Check if the password matches
    if (localStorage.getItem(loginUsername) === loginPassword) {
        window.location.href = 'welcome.html';
    } else {
        alert('Incorrect password. Please try again.');
    }
}
