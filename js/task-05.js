document.addEventListener('DOMContentLoaded', function() {
  const inputElem = document.querySelector('#name-input');
  const outputElem = document.querySelector('#name-output');

  inputElem.addEventListener('input', function() {
    if (this.value.trim() === "") {
      outputElem.textContent = "Anonymous";
    } else {
      outputElem.textContent = this.value;
    }
  });
});
