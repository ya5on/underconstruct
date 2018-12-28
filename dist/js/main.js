let btn = document.querySelector('.btn-open-login-form');
let modal = document.querySelector('.login-form-container');
let content = document.querySelector('.content');

function add() {
    modal.classList.toggle('login-toggle');
    content.classList.toggle('active');
}

btn.onclick = add;
