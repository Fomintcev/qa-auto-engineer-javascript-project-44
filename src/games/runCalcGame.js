import randomNum from '../getRandomNumber.js';

const getCaltulationResult = (operand1, operand2, expr) => {
  switch (expr) {
    case 0:
      return operand1 + operand2;

    case 1:
      return operand1 - operand2;

    case 2:
      return operand1 * operand2;

    default:
      return 'Operation value is invalid';
  }
};

const getCalcQuestion = (operand1, operand2, expr) => {
  switch (expr) {
    case 0:
      return `Question: ${operand1} + ${operand2}`;

    case 1:
      return `Question: ${operand1} - ${operand2}`;

    case 2:
      return `Question: ${operand1} * ${operand2}`;

    default:
      return 'Operation value is invalid';
  }
};

const getRandomOperation = () => {
  const rules = 'What is the result of the expression?';

  const operand1 = randomNum();
  const operand2 = randomNum();
  const expr = randomNum(3);

  const result = getCaltulationResult(operand1, operand2, expr);
  const question = getCalcQuestion(operand1, operand2, expr);
  return {
    rules,
    question,
    result,
  };
};

export default getRandomOperation;
