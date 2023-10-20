document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const emailInput = this.elements.email;
        const passwordInput = this.elements.password;

        if (!emailInput.value || !passwordInput.value) {
            alert('Всі поля повинні бути заповнені!');
            return;
        }

        const formData = {
            email: emailInput.value,
            password: passwordInput.value
        };

        console.log(formData);

        this.reset();
    });
});

