export const gameRules = 'What is the result of the expression?';

const selectOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
};

const calculate = (value1, value2, operatorSign) => {
  switch (operatorSign) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    default:
      return value1 * value2;
  }
};

export const generateQA = () => {
  const value1 = Math.round(Math.random() * 100);
  const value2 = Math.round(Math.random() * 100);
  const operator = selectOperator();
  const question = `${value1} ${operator} ${value2}`;
  const correctAnswer = String(calculate(value1, value2, operator));
  return [question, correctAnswer];
};
