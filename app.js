import { answers } from './answers.js';

const userInput = document.getElementById('user-input');
const Button = document.getElementById('answer-button');
const answerMessage = document.getElementById('answer-message');

const getRandomNumber = (max)=>{
    return Math.floor(Math.random() * max);
};

const randomIndex = getRandomNumber(answers.length);

const randomAnswer = getRandomNumber(answers.length);



Button.addEventListener('click', ()=>{
  const randomIndex = getRandomNumber(0, answers.length);
  const randomAnswer = answers[randomIndex];
  answerMessage.textContent = randomAnswer;
  
    
});



  //to generate a random color from the array
  //generate a random number between 0 and 2
  //in other words generate a random index
