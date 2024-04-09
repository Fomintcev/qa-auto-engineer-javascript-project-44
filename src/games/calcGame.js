import randomNum from '../getRandomNumber.js';

const getRandomOperation = () => {
  const operand1 = randomNum();
  const operand2 = randomNum();
  let result = 0;
  let question = '';
  const expr = Math.floor(Math.random() * 3);
  switch (expr) {
    case 0:
      question = `Question: ${operand1} + ${operand2}`;
      result = operand1 + operand2;
      break;

    case 1:
      question = `Question: ${operand1} - ${operand2}`;
      result = operand1 - operand2;
      break;

    case 2:
      question = `Question: ${operand1} * ${operand2}`;
      result = operand1 * operand2;
      break;

    default:
    // do nothing
  }
  return {
    question,
    result,
  };
};

export default getRandomOperation;
