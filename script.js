const form = document.getElementById('form');
const email = document.getElementById('email');
const button = document.querySelector('.form-btn');
const errorMessage = document.getElementById('input-error-message');
const validMessage = document.getElementById('input-valid-message');

/* Email form validation */
const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!email.value) {
        errorMessage.style.display = "block";
        email.style.borderColor = "var(--light-red)";
    } else if (email.value.match(regex)) {
        errorMessage.style.display = "none";
        validMessage.style.display = "block";
        email.style.border = "1px solid green";
        setTimeout(() => {
            validMessage.style.display = "none";
            email.style.border = "1px solid var(--pale-blue)";
            email.value = '';
        }, "1100")
    } else {
        errorMessage.style.display = "block";
    }
})

/* Detect and validate email input */

email.addEventListener("input", () => {
    if (email.value.match(regex)) {
        errorMessage.style.display = "none";
        email.style.borderColor = "var(--pale-blue)";
        return true;
    } else {
        errorMessage.style.display = "block";
        email.style.borderColor = "var(--light-red)";
        return false;
    }
});