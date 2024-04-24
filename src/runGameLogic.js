import getPlayerName from './getPlayerName.js';
import getAnswer from './getAnswer.js';
import roundResult from './roundResult.js';

const gameLogic = (resultFromGame) => {
  const TOTAL_ROUNDS = 3;
  const name = getPlayerName();
  for (let i = 1; i <= TOTAL_ROUNDS; i += 1) {
    const { rules, question, result } = resultFromGame();
    if (i === 1) {
      console.log(rules);
    }
    console.log(question);
    const userAnswer = getAnswer();

    if (roundResult(result, userAnswer) !== true) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default gameLogic;
