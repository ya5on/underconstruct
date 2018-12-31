let btn = document.querySelector('.btn-open-login-form'),
    modal = document.querySelector('.login-form-container'),
    content = document.querySelector('.content');

function add() {
    modal.classList.toggle('login-toggle');
    content.classList.toggle('active');

    if ( document.querySelector('.btn-open-login-form i').classList.contains('fa-lock') ){
        document.querySelector('.btn-open-login-form i').classList.remove('fa-lock');
        document.querySelector('.btn-open-login-form i').classList.add('fa-unlock');
    } else {
        document.querySelector('.btn-open-login-form i').classList.remove('fa-unlock');
        document.querySelector('.btn-open-login-form i').classList.add('fa-lock')
    }

}

btn.onclick = add;


document.querySelector('.date').innerHTML = Date();

