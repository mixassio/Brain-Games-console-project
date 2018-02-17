import bubleSort from './my_func/bubleSort';
import { runGames } from '../index';
import randomNum from './my_func/randomNum';

const text = 'Balance the given number.';
const questionAnswer = () => {
  const que = randomNum(1000, 100000);
  const myList = (`${que}`).split('').map(a => Number(a));
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
  return [que, sortList.join('')];
};

const balance = () => {
  runGames(text, questionAnswer);
};

export default balance;
