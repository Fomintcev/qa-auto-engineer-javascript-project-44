import getRandomNumber from '../getRandomNumber.js';

export default () => {
  const number = getRandomNumber() + 1; // Create number except 0
  const question = `Question: ${number}`;
  return {
    question,
    result: number % 2 === 0 ? 'yes' : 'no',
  };
};
