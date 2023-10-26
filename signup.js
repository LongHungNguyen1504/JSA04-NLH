function checkField(field) {
    if (field == null) {
        return false
    } else {
        return true
    }
}
function checkLength(field) {
    if (field.length < 8) {
        return false
    } else {

        return true
    }
}
function checkMail(field) {
    let expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(field) == false) {
        return false
    } else {
        return true
    }

}
function checkPassword(pw1, pw2) {
    if (pw1 != pw2) {
        return false
    } else {
        return true
    }
}

let signUpBtn = document.getElementById('sign-up-btn')
function checkRegister() {

    let username = document.getElementById('username').value
    let email = document.getElementById('email').value
    let pw = document.getElementById('pw').value
    let confirmed_pw = document.getElementById('confirmed-pw').value

    if (checkField(username) == false || checkField(email) == false || checkField(pw) == false || checkField(confirmed_pw) == false) {
        alert('One or more field is empty!')
    } else if (checkLength(username) == false || checkLength(pw) == false || checkLength(confirmed_pw) == false) {
        alert(' Username or Password must have 8 characters length!')
    } else if (checkMail(email) == false) {
        alert('Wrong email format!')
    } else if (checkPassword(pw, confirmed_pw) == false) {
        alert('Password are not matched!')
        return
    } else {
        alert('Sign up successfully!')
        return
    }
}