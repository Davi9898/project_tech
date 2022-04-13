if (document.getElementById('password2')) {
    document.getElementById('password2').addEventListener('keyup', checkPasswords)
}

function checkPasswords() {

    let password1 = document.getElementById('password').value;
    let password2 = document.getElementById('password2').value;

    if (password1.length < password2.length) {
        return
    }
    if (password1 === password2) {
        document.getElementById('password-error').style.display = 'none'
        return
    }

    document.getElementById('password-error').style.display = 'block'
}
