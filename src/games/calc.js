import { getRandomIndex, getRandomNumber } from '../utils.js';

export const gameRules = 'What is the result of the expression?';

const selectOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = getRandomIndex(operators);
  return operators[randomIndex];
};

const calculate = (value1, value2, operatorSign) => {
  switch (operatorSign) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    default:
      return console.error('No operator given.');
  }
};

export const generateQA = () => {
  const value1 = getRandomNumber(0, 100);
  const value2 = getRandomNumber(0, 100);
  const operator = selectOperator();
  const question = `${value1} ${operator} ${value2}`;
  const correctAnswer = String(calculate(value1, value2, operator));
  return [question, correctAnswer];
};
