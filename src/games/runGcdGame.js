import getRandomNumber from '../getRandomNumber.js';

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const number1 = getRandomNumber() + 1;
  const number2 = getRandomNumber() + 1;

  let result = 1;
  const getGCD = () => {
    const lowerNumber = number1 <= number2 ? number1 : number2;
    for (let i = 2; i <= lowerNumber; i += 1) {
      if (number1 % i === 0 && number2 % i === 0) {
        result = i;
      }
    }
  };
  getGCD();
  const question = `Question: ${number1} ${number2}`;
  return {
    rules,
    question,
    result,
  };
};
