import getPlayerName from '../src/getPlayerName.js';
import getAnswer from '../src/getAnswer.js';
import gcd from '../src/games/gcdGame.js';
import isEqual from '../src/isEqual.js';

const rounds = 3;
const name = getPlayerName();
console.log('Find the greatest common divisor of given numbers.');
let winRounds = 0;
for (let i = 1; i <= rounds; i += 1) {
  const roundResult = gcd();
  const userAnswer = getAnswer();
  if (isEqual(roundResult, userAnswer)) {
    winRounds += 1;
    if (winRounds === rounds) {
      console.log(`Congratulations, ${name}!`);
    }
  } else {
    console.log(`Let's try again, ${name}!`);
    break;
  }
}
