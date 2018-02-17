import { runGames } from '../index';
import randomNum from './my_func/randomNum';

const text = 'What is the result of the expression?';
const questionAnswer = () => {
  const oper = { plus: '+', minus: '-', multiplication: '*' };
  const randOp = Object.keys(oper)[Math.floor(Math.random() * Object.keys(oper).length)];
  const num1 = randomNum(1, 100);
  const num2 = randomNum(1, 100);
  const que = num1.toString() + oper[randOp] + num2.toString();
  let answ;
  switch (randOp) {
    case 'plus':
      answ = num1 + num2;
      break;
    case 'minus':
      answ = num1 - num2;
      break;
    case 'multiplication':
      answ = num1 * num2;
      break;
    default:
      answ = 0;
  }
  return [que, answ.toString()];
};

const calc = () => {
  runGames(text, questionAnswer);
};

export default calc;
