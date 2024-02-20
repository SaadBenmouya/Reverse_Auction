// Get the login button and login form modal
var loginBtn = document.getElementById("loginBtn");
var loginFormModal = document.getElementById("loginForm");

// When the user clicks the login button, display the login form modal
loginBtn.addEventListener("click", function() {
    loginFormModal.style.display = "block";
});

// When the user clicks on the close button (x), close the login form modal
var closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function() {
    loginFormModal.style.display = "none";
};

// When the user clicks anywhere outside of the login form modal, close it
window.onclick = function(event) {
    if (event.target == loginFormModal) {
        loginFormModal.style.display = "none";
    }
};
