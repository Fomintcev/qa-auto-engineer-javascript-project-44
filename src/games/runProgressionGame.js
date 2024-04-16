import getRandomNumber from '../getRandomNumber.js';

const progressionGame = () => {
  const rules = 'What number is missing in the progression?';
  const progressionLenght = 10;
  let currentValue = getRandomNumber();
  const step = getRandomNumber() + 1;
  const hiddenValueOrder = getRandomNumber(progressionLenght);
  let hiddenValue = currentValue;
  let printedString = '';

  const findHidenValue = () => {
    if (hiddenValueOrder === 0) {
      return hiddenValue;
    }
    for (let i = 1; i < progressionLenght; i += 1) {
      hiddenValue += step;
      if (hiddenValueOrder === i) {
        return hiddenValue;
      }
    }
    return hiddenValue;
  };
  const result = findHidenValue();

  const creatingQuestion = () => {
    for (let i = 0; i < progressionLenght; i += 1) {
      if (i === 0) {
        if (hiddenValueOrder === 0) {
          printedString += '..';
        } else {
          printedString += String(currentValue);
        }
      } else {
        currentValue += step;
        if (hiddenValueOrder === i) {
          printedString += ' ..';
        } else {
          printedString += ` ${currentValue}`;
        }
      }
    }
    return printedString;
  };
  const question = `Question: ${creatingQuestion()}`;
  return {
    rules,
    question,
    result,
  };
};

export default progressionGame;
