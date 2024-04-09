import getPlayerName from './getPlayerName.js';
import getAnswer from './getAnswer.js';
import isEqual from './isEqual.js';

const gameLogic = (resultFromGame, rules) => {
  const TOTAL_ROUNDS = 3;
  const name = getPlayerName();
  console.log(rules);
  for (let i = 1; i <= TOTAL_ROUNDS; i += 1) {
    const { question, result } = resultFromGame();
    console.log(question);
    const userAnswer = getAnswer();

    if (isEqual(result, userAnswer) !== true) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default gameLogic;
