import getRandomNumber from '../utils.js';

export const gameRules = 'Find the greatest common divisor of given numbers.';

const findGCD = (value1, value2) => {
  if (!value2) {
    return value1;
  }

  return findGCD(value2, value1 % value2);
};

export const generateQA = () => {
  const value1 = getRandomNumber(1, 50);
  const value2 = getRandomNumber(1, 50);
  const question = `${value1} ${value2}`;
  const correctAnswer = String(findGCD(value1, value2));
  return [question, correctAnswer];
};
