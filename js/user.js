var users = [{}];

// Function to add a user

var submit = document.getElementById('signUP');

    submit.onclick=function addUser() {
    // Get form values
    var userName = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    var email = document.getElementById('email').value;

    // Validation
    if (userName === "" || password === "" || confirmPassword === "" || email === "") {
        alert("All fields are required.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Create user object
    var user = {
        id: users.length + 1,
        name: userName,
        email: email,
        password: password,
        confirmPassword: confirmPassword
    };

    // Add user to the array
    users.push(user);

    // Feedback to the user
    alert("User added successfully!");
    console.log("User data:", user);

    // Clear form
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('confirm-password').value = '';
    document.getElementById('email').value = '';
}

console.log(users[users.length-1].name);