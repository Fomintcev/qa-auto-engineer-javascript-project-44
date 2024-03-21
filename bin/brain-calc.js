#!/usr/bin/env node

import getPlayerName from '../src/getPlayerName.js';
import getRandomOperation from '../src/getRandomOperation.js';
import getAnswer from '../src/getAnswer.js';

const rounds = 3;
const name = getPlayerName();
console.log(`Hello, ${name}\nWhat is the result of the expression?`);

for (let i = 1; i <= rounds; i += 1) {
  const result = getRandomOperation();
  const answer = Number(getAnswer());
  //  Не понимаю как эту проверку выделить в отдельную функцию чтобы переиспользовать
  if (answer === result) {
    console.log('Correct!');
    if (i === rounds) {
      console.log(`Congratulations, ${name}!`);
    }
  } else {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${result}"\n
    Let's try again, ${name}!`);
    break;
  }
}
