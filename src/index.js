import readlineSync from 'readline-sync';

const roundAmount = 3;

const startEngine = (generateQA, gameRules) => {
  let attempts = 0;
  let userAnswer;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n${gameRules}`);
  while (attempts < roundAmount) {
    const [question, correctAnswer] = generateQA();
    console.log(`Question: ${question}`);
    userAnswer = readlineSync.question('Your answer? ');
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      attempts += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startEngine;
