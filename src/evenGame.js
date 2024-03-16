import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n
    Answer "yes" if the number is even, otherwise answer "no".`);

  const successAttempts = 3;

  for (let i = 1; i <= 3; i += 1) {
    const number = Math.floor(Math.random() * 99) + 1; // Create number except 0
    const isEven = number % 2 === 0 ? 'yes' : 'no';
    console.log(`Qwestion: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (isEven === answer) {
      console.log(`Correct! ${i}`);
      if (i === successAttempts) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${isEven}"\n
      Let's try again, ${name}!`);
      break;
    }
  }
};
