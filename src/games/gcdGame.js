import getRandomNumber from '../getRandomNumber.js';

export default () => {
  const number1 = getRandomNumber() + 1; // исключаем 0
  const number2 = getRandomNumber() + 1;

  const question = `Question: ${number1} ${number2}`;

  let result = 1;
  const lowerNumber = number1 <= number2 ? number1 : number2;
  for (let i = 2; i <= lowerNumber; i += 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      result = i;
    }
  }
  return {
    question,
    result,
  };
};

// TODO rename gcd
