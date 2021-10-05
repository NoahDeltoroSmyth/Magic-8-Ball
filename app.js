import { answers } from './answers.js';

const colors = ['red', 'white', 'blue'];


  //to generate a random color from the array
  //generate a random number between 0 and 2
  //in other words generate a random index
const getRandomNumber = (max)=>{
    return Math.floor(Math.random() * max);
}
const randomIdx = getRandomNumber(colors.length);
console.log(colors[randomIdx]);

const randomAnswer = getRandomNumber(answers.length);
console.log(answers[randomAnswer]);