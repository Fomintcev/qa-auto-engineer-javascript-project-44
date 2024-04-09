import getRandomNumber from '../getRandomNumber.js';

const progressionGame = () => {
  const stringLenght = 10;
  let currentValue = getRandomNumber();
  const step = getRandomNumber() + 1;
  const hiddenValueOrder = getRandomNumber(stringLenght);
  let hiddenValue = 0;
  let printedString = '';

  for (let i = 0; i < stringLenght; i += 1) {
    if (i === 0) {
      if (hiddenValueOrder === 0) {
        printedString += '..';
        hiddenValue = currentValue;
      } else {
        printedString += String(currentValue);
      }
    } else {
      currentValue += step;
      if (hiddenValueOrder === i) {
        printedString += ' ..';
        hiddenValue = currentValue;
      } else {
        printedString += ` ${currentValue}`;
      }
    }
  }
  const question = `Question: ${printedString}`;
  return {
    question,
    result: hiddenValue,
  };
};

export default progressionGame;
