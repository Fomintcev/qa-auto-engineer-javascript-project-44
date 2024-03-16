import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(
    `Hello, ${name}!\nAnswer "yes" if the number is even, otherwise answer "no".`
  );

  const successAttempts = 3;
  let i = 0;
  let answer = '';
  let isEven = '';

  for (i; i < 3; i += 1) {
    const number = Math.floor(Math.random() * 100);
    isEven = number % 2 === 0 ? 'yes' : 'no';
    console.log(`Qwestion: ${number}`);
    answer = readlineSync.question('Your answer: ');
    if (isEven === answer) {
      console.log('Correct!');
    } else {
      break;
    }
  }

  i === successAttempts
    ? console.log(`Congratulations, ${name}!`)
    : console.log(
        `"${answer}" is wrong answer ;(. Correct answer was "${isEven}"\nLet's try again, ${name}!`
      );
};
