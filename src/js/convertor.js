const refs = {
    timeInput: document.querySelector('.time_calculator_input'),
    timeResult: document.querySelector('.time_calculator_time'),
    timeBtn: document.querySelector('.time_calculator_button'),
}
const {timeInput, timeResult, timeBtn} = refs;
timeBtn.addEventListener('click', () => {
    const value = timeInput.value.trim();
    if (value === '') {
        alert('Будь ласка, введіть час');
        return;
    }
    const seconds = parseFloat(value);
    const days = Math.floor(seconds / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((seconds % (60 * 60)) / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    const formatedHours = hours.toString().padStart(2, '0');
    const formatedMinutes = minutes.toString().padStart(2, '0');
    const formatedRemainingSeconds = remainingSeconds.toString().padStart(2, '0');

    timeResult.textContent = `${days} дн. ${formatedHours} год. ${formatedMinutes} хв. ${formatedRemainingSeconds} сек.`;
    console.log(timeResult.textContent);
})