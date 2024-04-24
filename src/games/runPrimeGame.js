import getRandomNumber from '../getRandomNumber.js';

const isPrime = (guessedNumber) => {
  let chekingValue = guessedNumber;
  let divisorsNumber = 0;
  for (let i = guessedNumber; i > 1; i -= 1) {
    if (guessedNumber % chekingValue === 0) {
      divisorsNumber += 1;
    }
    chekingValue -= 1;
  }
  return divisorsNumber === 1;
};

const primeGame = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const guessedNumber = getRandomNumber() + 2;
  const question = `Question: ${guessedNumber}`;
  const result = isPrime(guessedNumber) ? 'yes' : 'no';
  return {
    rules,
    question,
    result,
  };
};

export default primeGame;
