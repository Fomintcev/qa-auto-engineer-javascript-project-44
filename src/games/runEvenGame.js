import getRandomNumber from '../getRandomNumber.js';

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const number = getRandomNumber() + 1;
  const question = `Question: ${number}`;

  const isEven = () => number % 2 === 0;

  const result = isEven() ? 'yes' : 'no';

  return {
    rules,
    question,
    result,
  };
};
