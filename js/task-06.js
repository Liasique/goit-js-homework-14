const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', function() {
    const inputLength = this.value.length;
    const requiredLength = parseInt(this.getAttribute('data-length'));

    if (inputLength === requiredLength) {
        this.classList.add('valid');
        this.classList.remove('invalid');
    } else {
        this.classList.add('invalid');
        this.classList.remove('valid');
    }
});
