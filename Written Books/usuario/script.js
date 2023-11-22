function registerUser() {
    // Implement registration logic using AJAX and send data to the PHP file
    // Use the FormData object to collect form data

    var formData = new FormData(document.getElementById("registerForm"));

    // Implement AJAX to send data to the PHP file for registration
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "./php/index.php", true);
    xhr.onload = function() {
        // Handle the response from the server
        console.log(xhr.responseText);
    };
    xhr.send(formData);
}

function loginUser() {
    // Implement login logic using AJAX and send data to the PHP file
    // Use the FormData object to collect form data

    var formData = new FormData(document.getElementById("loginForm"));

    // Implement AJAX to send data to the PHP file for login
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "./php/login.php", true);
    xhr.onload = function() {
        // Handle the response from the server
        console.log(xhr.responseText);
    };
    xhr.send(formData);
}