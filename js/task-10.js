document.addEventListener('DOMContentLoaded', function() {
    const inputElement = document.querySelector('#controls input[type="number"]');
    const createBtn = document.querySelector('#controls [data-create]');
    const destroyBtn = document.querySelector('#controls [data-destroy]');
    const boxesContainer = document.querySelector('#boxes');

    createBtn.addEventListener('click', function() {
        const amount = Number(inputElement.value);
        createBoxes(amount);
    });

    destroyBtn.addEventListener('click', destroyBoxes);

    function createBoxes(amount) {
        const initialSize = 30;
        const boxesFragment = document.createDocumentFragment();

        for (let i = 0; i < amount; i++) {
            const div = document.createElement('div');
            div.style.width = div.style.height = `${initialSize + i * 10}px`;
            div.style.backgroundColor = getRandomHexColor();
            boxesFragment.appendChild(div);
        }

        boxesContainer.appendChild(boxesFragment);
    }

    function destroyBoxes() {
        boxesContainer.innerHTML = '';
    }
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}
