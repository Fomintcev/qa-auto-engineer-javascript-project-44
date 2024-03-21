import randomNum from './getRandomNumber.js';

const getRandomOperation = () => {
  const operand1 = randomNum();
  const operand2 = randomNum();
  let result = 0;
  const expr = `${Math.floor(Math.random() * 3)}`;
  switch (expr) {
    case '0':
      console.log(`Question: ${operand1} + ${operand2}`);
      result = operand1 + operand2;
      break;

    case '1':
      console.log(`Question: ${operand1} - ${operand2}`);
      result = operand1 - operand2;
      break;

    case '2':
      console.log(`Question: ${operand1} * ${operand2}`);
      result = operand1 * operand2;
      break;

    default:
    // do nothing
  }
  return result;
};

export default getRandomOperation;
