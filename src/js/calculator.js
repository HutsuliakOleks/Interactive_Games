const refs = {
    number1: document.querySelector('.number_one'),
    number2: document.querySelector('.number_two'),
    plus: document.getElementById('plus'),
    minus: document.getElementById('minus'),
    multiply: document.getElementById('multiply'),
    divide: document.getElementById('divide'),
    equal: document.getElementById('equal'),
    result: document.querySelector('.calculator_result'),
}

let operation = null;
refs.plus.addEventListener('click', () => {
    operation = (a, b) => a + b
})
refs.minus.addEventListener('click', () => {
    operation = (a, b) => a - b
})
refs.multiply.addEventListener('click', () => {
    operation = (a, b) => a * b
})
refs.divide.addEventListener('click', () => {
    operation = (a, b) => {
        if (b === 0) {
            alert("На нуль ділити не можна");
            return null;
        } 
        return a / b;
    }
})

refs.equal.addEventListener('click', () => {
    const firstNumber = parseInt(refs.number1.value);
    console.log(firstNumber);
    const secondNumber = parseInt(refs.number2.value);
        console.log(secondNumber);
        console.log(operation);
    if (operation) {
        const resultValue = operation(firstNumber, secondNumber);
        console.log(resultValue);
        refs.result.textContent = resultValue !== null ? resultValue : '';

    }
    else {
        alert('Виберіть дію операції');
    }
})