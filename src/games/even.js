import readlineSync from 'readline-sync';
import hello from './hello';

const param = {
  hello:
        {
          text: 'text',
          qwestion: 'qwestion',
          trueAnswer: 'trueAnswer',
        },
  even:
        {
          text: 'Answer "yes" if number even otherwise answer "no".',
          qwestionAnswer: () => {
            const qwe = Math.floor(Math.random() * 10);
            const answ = qwe % 2 === 0 ? 'yes' : 'no';
            return [qwe, answ];
          },
        },
  calc:
        {
          text: 'What is the result of the expression?',
          qwestionAnswer: () => {
            const oper = { plus: '+', minus: '-', mP: '*' };
            const randOp = Object.keys(oper)[Math.floor(Math.random() * Object.keys(oper).length)];
            const num1 = Math.floor(Math.random() * 100);
            const num2 = Math.floor(Math.random() * 100);
            const qwe = num1.toString() + oper[randOp] + num2.toString();
            let answ;
            switch (randOp) {
              case 'plus':
                answ = num1 + num2;
                break;
              case 'minus':
                answ = num1 - num2;
                break;
              case 'mP':
                answ = num1 * num2;
                break;
              default:
                console.log('sorry');
            }
            console.log(randOp);
            console.log(answ);
            return [qwe, answ.toString()];
          },
        },
};

const games = (typeGame) => {
  const userName = hello();
  console.log(param[typeGame].text);
  let answer;
  for (let i = 0; i < 3; i += 1) {
    const [qwestion, trueAnswer] = param[typeGame].qwestionAnswer();
    console.log('Question: ', qwestion);
    answer = readlineSync.question('Your answer: ');
    if (answer === trueAnswer) {
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
export default games;
