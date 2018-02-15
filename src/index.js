import readlineSync from 'readline-sync';
import hello from './games/hello';

const COUNT_STEPS = 3;

const games = (text, qwestionAnswer) => {
  const userName = hello();
  console.log(text);
  let answer;
  for (let i = 0; i < COUNT_STEPS; i += 1) {
    const [qwestion, trueAnswer] = qwestionAnswer[i];
    console.log('trueAnswer: ', trueAnswer);
    console.log('Question: ', qwestion);
    answer = readlineSync.question('Your answer: ');
    if (answer === trueAnswer) {
      if (i === COUNT_STEPS - 1) {
        console.log('Correct!');
        console.log(`Congratulations, ${userName}!`);
      } else {
        console.log('Correct!');
      }
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${trueAnswer}`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
};

export { hello, games, COUNT_STEPS };
