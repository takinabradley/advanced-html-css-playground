/* animations can be enhanced using animation events in JavaScript */
const slidingText = document.querySelector('.sliding-text')
slidingText.addEventListener('animationend', e => slidingText.classList.add('sliding-text--white'))