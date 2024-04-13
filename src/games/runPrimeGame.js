import getRandomNumber from '../getRandomNumber.js';

const primeGame = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const randomNumber = getRandomNumber() + 2;
  const question = `Question: ${randomNumber}`;
  let value = randomNumber;
  let divider = 0;
  const isPrime = () => {
    for (let i = randomNumber; i > 1; i -= 1) {
      if (randomNumber % value === 0) {
        divider += 1;
      }
      value -= 1;
    }
    return divider === 1 ? 'yes' : 'no';
  };
  const result = isPrime();
  return {
    rules,
    question,
    result,
  };
};

export default primeGame;
