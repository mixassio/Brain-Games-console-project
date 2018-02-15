import { COUNT_STEPS, games } from '../index';

const text = 'What is the result of the expression?';
const qwestionAnswer = () => {
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
  return [qwe, answ.toString()];
};

const calc = () => {
  const qweArList = [];
  for (let i = 0; i < COUNT_STEPS; i += 1) {
    qweArList.push(qwestionAnswer());
  }
  games(text, qweArList);
};

export default calc;
