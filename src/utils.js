export const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min)) + min;

export const getRandomIndex = (coll) => Math.floor(Math.random() * coll.length);

export const generateProgression = (start, step, elements) => {
  const progression = [];
  let element = start;
  for (let i = 0; i < elements; i += 1) {
    progression.push(element);
    element += step;
  }
  return progression;
};
