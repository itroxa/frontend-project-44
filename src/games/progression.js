import getRandomNumber from '../utils.js';

export const gameRules = 'What number is missing in the progression?';

const generateProgression = (start, step, elements) => {
  const progression = [];
  for (let i = 0; i < elements; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

export const generateQA = () => {
  const start = getRandomNumber(1, 100);
  const step = getRandomNumber(2, 30);
  const elements = 10;
  const progression = generateProgression(start, step, elements);
  const elementToRemove = getRandomNumber(0, progression.length - 1);
  const correctAnswer = String(progression.at(elementToRemove));
  progression[elementToRemove] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};
