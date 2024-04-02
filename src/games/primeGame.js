import getRandomNumber from '../getRandomNumber.js';

const primeGame = () => {
  const randomNumber = getRandomNumber() + 2;
  console.log(`Question: ${randomNumber}`);
  let value = randomNumber;
  let counter = 0;

  for (let i = randomNumber; i > 1; i -= 1) {
    if (randomNumber % value === 0) {
      counter += 1;
    }
    value -= 1;
  }
  return counter === 1 ? 'yes' : 'no';
};

export default primeGame;
