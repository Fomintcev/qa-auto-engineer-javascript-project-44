import getRandomNumber from '../getRandomNumber.js';

const progressionGame = () => {
  const rules = 'What number is missing in the progression?';
  const progressionLenght = 10;
  let currentValue = getRandomNumber();
  const step = getRandomNumber() + 1;
  const hiddenValueOrder = getRandomNumber(progressionLenght);
  let hiddenValue = 0;
  let printedString = '';

  const creatingProgression = () => {
    for (let i = 0; i < progressionLenght; i += 1) {
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
  };
  creatingProgression();
  const question = `Question: ${printedString}`;
  return {
    rules,
    question,
    result: hiddenValue,
  };
};

export default progressionGame;
