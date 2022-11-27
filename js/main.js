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
        textarea.style.border = "3px solid red";
        textarea.style.backgroundColor = "#ffb3b3";
        messages.push('Wpisz wiadomość...');
    }
    else if (textarea.value.length < 10) {
        messages.push('Wiadomość musi mieć minimum 10 znaków...');
    }
    else if (textarea.value.length > 1000) {
        messages.push('Wiadomość nie może mieć więcej niż 1000 znaków...');
    }

    if (email === 0 || email == null) {
        form.style.border = "3px solid red";
        form.style.color = "#ffb3b3";
        messages.push('Wpisz email...');
    }
    else if(email.incorrect) {
        email.style.border = "3px solid red";
        email.style.color = "#ffb3b3";
        messages.push('Wpisz poprawny email...');
    }

    
    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join('', '');
    }
});


