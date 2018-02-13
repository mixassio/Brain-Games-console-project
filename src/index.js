
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
const answer = () => console.log(`Hi ${userName}!`);
export default answer;
