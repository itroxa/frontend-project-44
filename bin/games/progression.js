export const gameRules = 'What number is missing in the progression?';

const generateProgression = () => {
  const start = Math.round(Math.random() * 100);
  const step = Math.round(Math.random() * 30);
  const elements = 10;
  const progression = [];
  let element = start;
  for (let i = 0; i < elements; i += 1) {
    progression.push(element);
    element += step;
  }
  return progression;
};

export const generateQA = () => {
  const progression = generateProgression();
  const elementToRemove = Math.floor(Math.random() * progression.length);
  const correctAnswer = String(progression.at(elementToRemove));
  progression[elementToRemove] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};
