import { runGames } from '../index';
import nodEucklid from './my_func/nodEuklid';
import randomNum from './my_func/randomNum';

const text = 'Find the greatest common divisor of given numbers.';
const questionAnswer = () => {
  const num1 = randomNum(1, 1000);
  const num2 = randomNum(1, 1000);
  const que = `${num1} ${num2}`;
  const answ = nodEucklid(num1, num2);
  return [que, answ.toString()];
};

const gcd = () => {
  runGames(text, questionAnswer);
};

export default gcd;
