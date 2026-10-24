const inputNumber = document.querySelector('.number_input');
const btnNumber = document.querySelector('.number_button');
const result = document.querySelector('.result');
console.log(result);
let randomNumber = Math.floor(Math.random() * 10 + 1);

btnNumber.addEventListener('click', () => {
    const value = Number(inputNumber.value);
    if (value > 10 || value < 1) {
        alert('Введіть число від 1 до 10');
    }
    if (value === randomNumber) {
        result.textContent = `Вітаю, ви вгадали число! ${randomNumber}`;
        result.style.color = 'green';
    }
    else {
        result.textContent = `Ви програли, комп’ютер загадав ${randomNumber}`;
        result.style.color = 'red';
    }
})