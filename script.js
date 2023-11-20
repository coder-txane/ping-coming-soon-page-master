// algorithm
// step 1: grab the button and the error message.
// step 2: if the email value is wrong, make the error message appear. Make the error disappear if otherwise.

const form = document.getElementById('form');
const email = document.getElementById('email');
const button = document.querySelector('.form-btn');
const errorMessage = document.getElementById('input-error-message');
const validMessage = document.getElementById('input-valid-message');

/* Email form validation */

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!email.value) {
        errorMessage.style.display = "block";
    } else {
        errorMessage.style.display = "none";
        validMessage.style.display = "block";
        email.style.border = "1px solid green";
        setTimeout(() => {
            validMessage.style.display = "none";
            email.style.border = "1px solid var(--pale-blue)";
        }, "1100")
    }
})

/* Detects and validates email input */

email.addEventListener("input", () => {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.value.match(regex)) {
        errorMessage.style.display = "none";
        return true;
    } else {
        errorMessage.style.display = "block";
        return false;
    }
});

button.addEventListener("click", () => {
    setTimeout(() => {
        email.value = '';
    }, "1100");
})