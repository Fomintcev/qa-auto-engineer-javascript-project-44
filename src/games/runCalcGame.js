import randomNum from '../getRandomNumber.js';

const getRandomOperation = () => {
  const rules = 'What is the result of the expression?';
  let result = 0;
  let question = '';

  const getCaltulationResult = (operand1, operand2, expr) => {
    switch (expr) {
      case 0:
        result = operand1 + operand2;
        break;

      case 1:
        result = operand1 - operand2;
        break;

      case 2:
        result = operand1 * operand2;
        break;

      default:
      // do nothing
    }
    return result;
  };
  const getQuestion = (operand1, operand2, expr) => {
    switch (expr) {
      case 0:
        question = `Question: ${operand1} + ${operand2}`;
        break;

      case 1:
        question = `Question: ${operand1} - ${operand2}`;
        break;

      case 2:
        question = `Question: ${operand1} * ${operand2}`;
        break;

      default:
      // do nothing
    }
    return question;
  };

  const operand1 = randomNum();
  const operand2 = randomNum();
  const expr = Math.floor(Math.random() * 3);

  getCaltulationResult(operand1, operand2, expr);
  getQuestion(operand1, operand2, expr);
  return {
    rules,
    question,
    result,
  };
};

export default getRandomOperation;
