import getPlayerName from './getPlayerName.js';
import getAnswer from './getAnswer.js';
import isEqual from './isEqual.js';

const gameLogic = (resultFromGame, rules) => {
  const rounds = 3;
  const name = getPlayerName();
  console.log(rules);
  let winRounds = 0;
  for (let i = 1; i <= rounds; i += 1) {
    const roundResult = resultFromGame();
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
};

export default gameLogic;
