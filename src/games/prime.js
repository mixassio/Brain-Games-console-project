import { runGames } from '../index';
import randomNum from './my_func/randomNum';
import sundaram from './my_func/sundaram';

const text = 'Is this number prime?';
const questionAnswer = () => {
  const que = randomNum(1, 100);
  const answ = sundaram(que);
  return [que, answ.toString()];
};
const prime = () => {
  runGames(text, questionAnswer);
};

export default prime;
