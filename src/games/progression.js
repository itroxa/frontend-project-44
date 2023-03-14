import getRandomNumber from '../utils.js';

export const gameRules = 'What number is missing in the progression?';

const generateProgression = (start, step, progressionLength) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

export const generateQA = () => {
  const start = getRandomNumber(1, 100);
  const step = getRandomNumber(2, 30);
  const progressionLength = 10;
  const progression = generateProgression(start, step, progressionLength);
  const elementToRemove = getRandomNumber(0, progression.length - 1);
  const correctAnswer = String(progression.at(elementToRemove));
  progression[elementToRemove] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};
