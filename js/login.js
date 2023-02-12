// step 1: add click event handler to submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // step 2: get the email address from the input field.
    // always remember to use "value" to get the text from input field.
    const emailField = document.getElementById ('user-email');
    const email = emailField.value;
    // step 3: get password
    const passField = document.getElementById('user-password');
    const pass = passField.value;
    // do not check or varify email/password on the client side.
    // step 4 varify email and password
    if (email === "reza@islam.com" && pass === 'berlin'){
        window.location.href = 'bank.html';
    }
    else{
        alert('please enter valid details')
    }
})