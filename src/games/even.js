import { runGames } from '../index';

const text = 'Answer "yes" if number even otherwise answer "no".';
const questionAnswer = () => {
  const que = Math.floor(Math.random() * 10);
  const answ = que % 2 === 0 ? 'yes' : 'no';
  return [que, answ];
};
const even = () => {
  runGames(text, questionAnswer);
};

export default even;

