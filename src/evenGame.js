import getPlayerName from './getPlayerName.js';
import getAnswer from './getAnswer.js';
import isEven from './isEven.js';

const evenGame = () => {
  const rounds = 3;
  const name = getPlayerName();
  console.log(`Hello, ${name}!
Answer "yes" if the number is even, otherwise answer "no".`);

  for (let i = 1; i <= rounds; i += 1) {
    const correctAnswer = isEven();
    const answer = getAnswer();

    if (answer === correctAnswer) {
      console.log('Correct!');
      if (i === rounds) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}"
Let's try again, ${name}!`);
      break;
    }
  }
};

export default evenGame;
