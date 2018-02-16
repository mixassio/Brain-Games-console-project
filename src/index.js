import readlineSync from 'readline-sync';
import hello from './games/hello';

const COUNT_STEPS = 3;

const runGames = (text, questionAnswer) => {
  const userName = hello();
  console.log(text);
  let answer;
  for (let i = 1; i <= COUNT_STEPS; i += 1) {
    const [question, trueAnswer] = questionAnswer();
    console.log('trueAnswer: ', trueAnswer);
    console.log('Question: ', question);
    answer = readlineSync.question('Your answer: ');
    if (answer === trueAnswer) {
      console.log('Correct!');
      if (i === COUNT_STEPS) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${trueAnswer}`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
};

export { hello, runGames };
