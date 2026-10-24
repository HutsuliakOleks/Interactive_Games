const inputYear = document.querySelector('.year_birth_text_input');
const btnYear = document.querySelector('.year_birth_text_button');
const textYear = document.querySelector('.year_birth_text_order');
btnYear.addEventListener('click', () => {
    const year = parseInt(inputYear.value);
    if (isNaN(year) || inputYear.value === '') {
        textYear.textContent = 'Будь ласка, введіть рік!';
        textYear.style.color = 'red';
        return;
    }
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    textYear.classList.remove('green', 'red');
    if (isLeapYear) {
        textYear.textContent = 'Ви народилися у високосний рік';
        textYear.classList.add('green');
    }
    else {
        textYear.textContent = 'Ви народилися не у високосний рік';
        textYear.classList.add('red');
    }
});
