import { games } from '../index';

const text = 'Answer "yes" if number even otherwise answer "no".';
const qwestionAnswer = () => {
  const qwe = Math.floor(Math.random() * 10);
  const answ = qwe % 2 === 0 ? 'yes' : 'no';
  return [qwe, answ];
};
const even = () => {
  games(text, qwestionAnswer);
};

export default even;

