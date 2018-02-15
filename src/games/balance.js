import bubleSort from './bubleSort';
import { COUNT_STEPS, games } from '../index';

const text = 'Balance the given number.';
const qwestionAnswer = () => {
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
  return [qwe, sortList.join('')];
};

const balance = () => {
  const qweArList = [];
  for (let i = 0; i < COUNT_STEPS; i += 1) {
    qweArList.push(qwestionAnswer());
  }
  games(text, qweArList);
};

export default balance;
