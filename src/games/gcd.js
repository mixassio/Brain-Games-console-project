import { runGames } from '../index';
import nodEvcklid from './func/nodEvklid';

const text = 'Find the greatest common divisor of given numbers.';
const questionAnswer = () => {
  const num1 = Math.floor(Math.random() * 1000);
  const num2 = Math.floor(Math.random() * 1000);
  const que = `${num1} ${num2}`;
  const answ = nodEvcklid(num1, num2);
  return [que, answ.toString()];
};

const gcd = () => {
  runGames(text, questionAnswer);
};

export default gcd;
