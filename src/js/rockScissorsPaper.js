const listElement = document.querySelector('.rock_scissors_paper_list');
const resultElement = document.querySelector('.score_text');
const compButtonElement = document.querySelector('.rock_scissors_paper_button');
const rockScissorsPaperContainer = document.querySelector('.rock_scissors_paper_container');
const userScoreElement = document.getElementById('your_points');
const compScoreElement = document.getElementById('comp_points');
const buttonsElement = document.querySelectorAll('.game_btn');

let compScore = 0;
let userScore = 0;
const choices = ['rock', 'scissors', 'paper'];
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}
function getWinner(user, computer) {
    if (user === computer) {
        return 'draw';
    }
    if ((user === 'rock' && computer === 'scissors') ||
        (user === 'scissors' && computer === 'paper') || 
        (user === 'paper' && computer === 'rock') ) {
            return 'user'
    }
    else {
        return 'computer'
    }
}

buttonsElement.forEach(buttonElement => {
    buttonElement.addEventListener('click', () => {
        const userChoice = buttonElement.dataset.choice
        const compChoice = getComputerChoice();
        const winner = getWinner(userChoice, compChoice);
        if (winner === 'user') {
            userScore += 1;
            resultElement.style.color = 'green';
            resultElement.textContent = 'Ви виграли раунд!';
        }
        else if (winner === 'computer') {
            compScore += 1;
            resultElement.style.color = 'red';
            resultElement.textContent = 'Комп’ютер виграв раунд!';
        }
        else {
            resultElement.textContent = 'Нічия!';
        }
        userScoreElement.textContent = userScore;
        compScoreElement.textContent = compScore;
    })
})