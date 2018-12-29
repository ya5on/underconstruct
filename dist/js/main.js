let btn = document.querySelector('.btn-open-login-form'),
    modal = document.querySelector('.login-form-container'),
    content = document.querySelector('.content');

function add() {
    modal.classList.toggle('login-toggle');
    content.classList.toggle('active');
}

btn.onclick = add;


document.querySelector('.date').innerHTML = Date();
