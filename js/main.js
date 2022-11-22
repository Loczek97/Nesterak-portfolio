const textarea = document.getElementById('textarea');
const errorElement = document.getElementById('error');
const form = document.getElementById('form');
const email = document.getElementById('email');

function clearText() {
    textarea.value = "";
}


form.addEventListener('submit', (e) => {
    let messages = [];

    if (textarea.value === "" || textarea.value == null) {
        messages.push('Wpisz wiadomość...');
    }
    else if (textarea.value.length < 10) {
        messages.push('Wiadomość musi mieć minimum 10 znaków...');
    }
    else if (textarea.value.length > 1000) {
        messages.push('Wiadomość nie może mieć więcej niż 1000 znaków...');
    }

    if (email === 0 || email == null) {
        messages.push('Wpisz email...');
    }

    
    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join('', '');
    }
});
