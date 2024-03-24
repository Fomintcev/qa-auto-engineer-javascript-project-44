import readlineSync from 'readline-sync';

const getAnswer = () => {
  let userInput = readlineSync.question('Your answer: ');
  if (!Number.isNaN(Number(userInput))) {
    userInput = Number(userInput);
  }
  return userInput;
};
export default getAnswer;
