import getRandomNumber from '../getRandomNumber.js';

const primeGame = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const randomNumber = getRandomNumber() + 2;
  const question = `Question: ${randomNumber}`;
  let value = randomNumber;
  let counter = 0;

  for (let i = randomNumber; i > 1; i -= 1) {
    if (randomNumber % value === 0) {
      counter += 1;
    }
    value -= 1;
  }
  const result = counter === 1 ? 'yes' : 'no';
  return {
    rules,
    question,
    result,
  };
};

export default primeGame;
