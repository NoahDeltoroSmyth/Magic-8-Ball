import { answers } from './answers.js';

//const userInput = document.getElementById('user-input');
const Button = document.getElementById('answer-button');
const answerMessage = document.getElementById('answer-message');

const getRandomNumber = (max)=>{
    return Math.floor(Math.random() * max);
};

Button.addEventListener('click', ()=>{
    const randomIndex = getRandomNumber(answers.length);
    const randomAnswer = answers[randomIndex];
    answerMessage.textContent = randomAnswer;
    
});
