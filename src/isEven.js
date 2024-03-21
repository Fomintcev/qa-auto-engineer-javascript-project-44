export default () => {
  const number = Math.floor(Math.random() * 99) + 1; // Create number except 0
  console.log(`Question: ${number}`);
  return number % 2 === 0 ? 'yes' : 'no';
};
