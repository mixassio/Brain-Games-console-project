import { games } from '../index';

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
  games(text, qwestionAnswer);
};

export default calc;
