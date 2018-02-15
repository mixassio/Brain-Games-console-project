import { COUNT_STEPS, games } from '../index';

const text = 'Find the greatest common divisor of given numbers.';
const qwestionAnswer = () => {
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
};

const gcd = () => {
  const qweArList = [];
  for (let i = 0; i < COUNT_STEPS; i += 1) {
    qweArList.push(qwestionAnswer());
  }
  games(text, qweArList);
};

export default gcd;

