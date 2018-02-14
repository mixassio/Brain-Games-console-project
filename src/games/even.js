import readlineSync from 'readline-sync';
import hello from './hello';
import bubleSort from './bubleSort';

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
  balance:
        {
          text: 'Balance the given number.',
          qwestionAnswer: () => {
            const qwe = Math.floor(Math.random() * 99001) + 1000;
            const myList = (`${qwe}`).split('').map(a => Number(a));
            const maxAr = array => Math.max(...array);
            const minAr = array => Math.min(...array);
            let maxEl = maxAr(myList);
            let minEl = minAr(myList);
            while (maxEl - minEl > 1) {
              myList[myList.indexOf(maxEl)] -= 1;
              myList[myList.indexOf(minEl)] += 1;
              maxEl = maxAr(myList);
              minEl = minAr(myList);
            }
            const sortList = bubleSort(myList);
            console.log(sortList.join(''));
            return [qwe, sortList.join('')];
          },
        },
  gcd:
        {
          text: 'Find the greatest common divisor of given numbers.',
          qwestionAnswer: () => {
            const num1 = Math.floor(Math.random() * 1000);
            const num2 = Math.floor(Math.random() * 1000);
            const qwe = `${num1} ${num2}`;
            let up = Math.max(num1, num2);
            let les = Math.min(num1, num2);
            let r = 1;
            while (r !== 0) {
              r = up % les;
              if (r === 0) {
                break;
              }
              up = les;
              les = r;
            }
            console.log(les);
            return [qwe, les.toString()];
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
