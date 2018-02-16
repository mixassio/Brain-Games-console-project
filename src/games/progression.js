import { runGames } from '../index';
import randomNum from './func/randomNum';

const text = 'What number is missing in this progression?';
const questionAnswer = () => {
  const step = randomNum(1, 10);
  const position = randomNum(0, 9);
  let curEl = randomNum(1, 10);
  const myList = [];
  for (let i = 0; i < 10; i += 1) {
    myList.push(curEl);
    curEl += step;
  }
  const answ = myList[position];
  myList[position] = '..';
  const que = myList.join(' ');
  return [que, answ.toString()];
};

const progression = () => {
  runGames(text, questionAnswer);
};

export default progression;
