import { COUNT_STEPS, games } from '../index';

const text = 'Answer "yes" if number even otherwise answer "no".';
const qwestionAnswer = () => {
  const qwe = Math.floor(Math.random() * 10);
  const answ = qwe % 2 === 0 ? 'yes' : 'no';
  return [qwe, answ];
};
const even = () => {
  const qweArList = [];
  for (let i = 0; i < COUNT_STEPS; i += 1) {
    qweArList.push(qwestionAnswer());
  }
  games(text, qweArList);
};

export default even;

