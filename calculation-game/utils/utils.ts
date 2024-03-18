export const generateNewCalculation = () => {
  const num1 = Math.floor(Math.random() * 101); // Random number from 0 to 100
  const num2 = Math.floor(Math.random() * 101); // Same here
  const expression = `${num1} + ${num2}`;
  const correctAnswer = num1 + num2;

  return {
    id: Date.now().toString(),
    expression,
    correctAnswer
  };
};
