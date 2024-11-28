const signupForm = document.getElementById("signupForm")
console.log(signupForm, "fgorm");


signupForm.addEventListener('submit', (event) => {
    event.preventDefault()

    document.getElementById("usernameError").innerText = ''
    document.getElementById("emailerror").innerText = ''
    document.getElementById("passwordError").innerText = ''
    document.getElementById("confirmpasswordError").innerText = ''


    const username = signupForm.username.value;
    const email = signupForm.email.value;
    const password = signupForm.password.value;
    const confirmpassword = signupForm.confirmpassword.value


    const emailRegex = '^[^@]+@[^@]+\.[^@]+$'
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/

    let isvalid = true;
    if (username.trim().length < 3) {
        document.getElementById("usernameError").innerText = 'Minimum 3 characters required'
        isvalid = false
    }
    if (!email.match(emailRegex)) {
        document.getElementById("emailerror").innerText = 'Enter a valid email address'
        isvalid = false

    }

    if (!password.match(passwordRegex)) {
        document.getElementById("passwordError").innerText = 'Password must be at least 6 characters long, contain at least one uppercase letter, one number, and one special character'
        isvalid = false

    }

    if (confirmpassword !== password) {
        document.getElementById("confirmpasswordError").innerText = 'Passwords does not match'
        isvalid = false
    }
    if (isvalid) {
        signupForm.submit()
        signupForm.reset()
    }
})



let showStatus = false;
const showHideButton = document.getElementById('icon')
showHideButton.addEventListener('click', () => {
    showStatus = !showStatus
    document.getElementById("password").type = showStatus ? "text" : "password"
    showHideButton.innerHTML = showStatus ? `<i class="bi bi-eye-slash"></i>` : `<i class="bi bi-eye"></i>`

})




let confirmpasswordshowStatus = false;
const showHideButton_confirmpassword = document.getElementById('icn')

showHideButton_confirmpassword.addEventListener('click', () => {
    confirmpasswordshowStatus = !confirmpasswordshowStatus
    console.log(document.getElementById("password"));

    document.getElementById("confirmpassword").type = confirmpasswordshowStatus ? "text" : "password"
    showHideButton_confirmpassword.innerHTML = confirmpasswordshowStatus ? `<i class="bi bi-eye-slash"></i>` : `<i class="bi bi-eye"></i>`

})