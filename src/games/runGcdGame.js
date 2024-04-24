import getRandomNumber from '../getRandomNumber.js';

const getGCD = (number1, number2) => {
  const lowerNumber = number1 <= number2 ? number1 : number2;
  let divider = 1;
  for (let i = 2; i <= lowerNumber; i += 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      divider = i;
    }
  }
  return divider;
};

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';

  const number1 = getRandomNumber() + 1;
  const number2 = getRandomNumber() + 1;
  const question = `Question: ${number1} ${number2}`;

  const result = getGCD(number1, number2);

  return {
    rules,
    question,
    result,
  };
};
