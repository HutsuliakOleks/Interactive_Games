export let savedWord = '';
let onWordChange = null;
export function setOnWordChange(callback) {
    onWordChange = callback;
}

const refs = {
    closeModalBtn: document.querySelector('.modal_close_button'),
    modal: document.querySelector('.backdrop'),
    input: document.querySelector('.modal_form_input'),
    form: document.querySelector('.modal_form'),
    userName: document.querySelector('.header_right_user'),
}
const {closeModalBtn, modal, input, form, userName} = refs;
(() => {
    document.body.classList.add('no-scroll');
    closeModalBtn.addEventListener('click', toggleModal);


    modal.addEventListener('click', onBackdropClick);
    document.addEventListener('keydown', onEscapePress);

    form.addEventListener('submit', formInputChange);
    function formInputChange(event) {
        event.preventDefault();
        savedWord = input.value;
        userName.textContent = savedWord;
        // if (onWordChange) {
        //     onWordChange(savedWord);
        // }
        toggleModal();
    }
    // console.log(modal);
   function toggleModal() {
    modal.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
    
}; 
function onBackdropClick(event) {
    console.log(event.currentTarget);
    console.log(event.target);
    if (event.currentTarget === event.target) {
        toggleModal();
    }
}
function onEscapePress(event) {
    console.log(event.key);
    console.log(event.code);
    if (event.key === 'Escape' && !modal.classList.contains('is-hidden')) {
        {
            toggleModal();
        }
    }
}
})()
