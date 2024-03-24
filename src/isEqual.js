const isEqual = (gameResult, userAnswer) => {
  if (gameResult === userAnswer) {
    console.log('Correct!');
  } else {
    console.log(`"${userAnswer}" is wrong answer ;(. \
Correct answer was "${gameResult}"`);
    return false;
  }
  return true;
};
export default isEqual;
