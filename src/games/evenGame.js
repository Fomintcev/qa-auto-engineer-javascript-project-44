import getRandomNumber from '../getRandomNumber.js';

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const number = getRandomNumber() + 1; // Create number except 0
  const question = `Question: ${number}`;
  return {
    rules,
    question,
    result: number % 2 === 0 ? 'yes' : 'no',
  };
};
