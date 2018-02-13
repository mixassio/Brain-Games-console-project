
import readlineSync from 'readline-sync';

const evenNumber = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);
  console.log('Answer "yes" if number even otherwise answer "no".');
  const answerList = ['yes', 'no'];
  let trueAnswer;
  let answer;
  for (let i = 0; i < 3; i += 1) {
    const qwestion = Math.floor(Math.random() * 10);
    console.log('Question: ', qwestion);
    answer = readlineSync.question('Your answer: ');
    trueAnswer = qwestion % 2 === 0 ? 'yes' : 'no';
    if (answerList.indexOf(answer) !== -1 && answer === trueAnswer) {
      if (i === 2) {
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

export default evenNumber;
