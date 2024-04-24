import getRandomNumber from '../getRandomNumber.js';

const isEven = (number) => number % 2 === 0;

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

  const number = getRandomNumber() + 1;

  const question = `Question: ${number}`;
  const result = isEven(number) ? 'yes' : 'no';

  return {
    rules,
    question,
    result,
  };
};
