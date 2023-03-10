import { getRandomNumber, getRandomIndex, generateProgression } from '../utils.js';

export const gameRules = 'What number is missing in the progression?';

export const generateQA = () => {
  const start = getRandomNumber(1, 100);
  const step = getRandomNumber(2, 30);
  const elements = 10;
  const progression = generateProgression(start, step, elements);
  const elementToRemove = getRandomIndex(progression);
  const correctAnswer = String(progression.at(elementToRemove));
  progression[elementToRemove] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};
