function emailValidation() {
    const form = document.getElementById('form');
    const email = document.getElementById('email');
    const emailConfirm = document.getElementById('email_confirm');
    
    emailConfirm.addEventListener('input', () => {
        const errorMessage = document.getElementById('email-error-message');
        
        if (email.value !== emailConfirm.value) {
            if (!errorMessage) {
                const element = document.createElement('p');
                const message = document.createTextNode("Emails do not match");
                element.appendChild(message);
                element.id = 'email-error-message';
                element.classList.add('alert');
                
                const emailConfirmTd = emailConfirm.parentElement;
                emailConfirmTd.appendChild(element);
            }
            emailConfirm.style.backgroundColor = 'rgba(230,169,171,.5)';
        } else {
            if (errorMessage) {
                errorMessage.remove();
            }
            emailConfirm.style.backgroundColor = '';
        }
    });
}

window.onload = emailValidation;
