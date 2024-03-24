import getRandomNumber from '../getRandomNumber.js';

export default () => {
  const number = getRandomNumber() + 1; // Create number except 0
  console.log(`Question: ${number}`);
  return number % 2 === 0 ? 'yes' : 'no';
};
