function autofill() {
    let username = window.localStorage.getItem('username');
    let password = window.localStorage.getItem('password')
    if (username)
        document.getElementById('user-input').value = username;
    if (password)
        document.getElementById('password-input').value = password
}


function login() {
    let username = document.getElementById('user-input').value;
    let password = document.getElementById('password-input').value;
    // Storing username & password in localStorage, overriding them if they exist
    window.localStorage.setItem('username', username);
    window.localStorage.setItem('password', password);
    // Will be an API call in production
    if (username === 'admin' && password === 'admin') {
        window.location = 'resume.html';
    } else {
        document.getElementById('invalid-input').style.display = 'block';
        document.getElementById('user-input').value = ''
        document.getElementById('password-input').value = '';
    }
}

autofill()