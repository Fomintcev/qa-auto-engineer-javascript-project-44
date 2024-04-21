import getRandomNumber from '../getRandomNumber.js';

const progressionGame = () => {
  const rules = 'What number is missing in the progression?';

  const findHidenValue = (
    firstValue,
    progressionStep,
    progressionLenght,
    hiddenValueOrder,
  ) => {
    let hiddenValue = firstValue;
    if (hiddenValueOrder === 0) {
      return hiddenValue;
    }
    for (let i = 1; i < progressionLenght; i += 1) {
      hiddenValue += progressionStep;
      if (hiddenValueOrder === i) {
        return hiddenValue;
      }
    }
    return hiddenValue;
  };

  const creatingQuestion = (
    firstValue,
    progressionStep,
    progressionLenght,
    hiddenValueOrder,
  ) => {
    let printedString = '';
    let currentValue = firstValue;
    for (let i = 0; i < progressionLenght; i += 1) {
      if (i === 0) {
        if (hiddenValueOrder === 0) {
          printedString += '..';
        } else {
          printedString += String(firstValue);
        }
      } else {
        currentValue += progressionStep;
        if (hiddenValueOrder === i) {
          printedString += ' ..';
        } else {
          printedString += ` ${currentValue}`;
        }
      }
    }
    return printedString;
  };

  const progressionLenght = 10;
  const firstValue = getRandomNumber();
  const progressionStep = getRandomNumber() + 1;
  const hiddenValueOrder = getRandomNumber(progressionLenght);

  const result = findHidenValue(
    firstValue,
    progressionStep,
    progressionLenght,
    hiddenValueOrder,
  );
  const question = `Question: ${creatingQuestion(
    firstValue,
    progressionStep,
    progressionLenght,
    hiddenValueOrder,
  )}`;

  return {
    rules,
    question,
    result,
  };
};

export default progressionGame;
