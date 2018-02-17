/* eslint-disable no-mixed-operators */
const sundaram = (num) => {
  const myList = [];
  const mylist2 = [];
  for (let element = 1; element <= num + 1; element += 1) {
    myList.push(element);
  }
  let i = 1;
  let j = 1;
  let condition = 1;
  while (condition <= num) {
    while (condition <= num) {
      condition = i + j + 2 * i * j;
      if (mylist2.indexOf(condition) === -1) {
        mylist2.push(condition);
      }
      j += 1;
    }
    j = i;
    condition = i + j + 2 * i * j;
    i += 1;
  }
  const simlleList = myList.filter(a => mylist2.indexOf(a) === -1).map(a => 2 * a + 1);
  const answer = simlleList.indexOf(num) === -1 ? 'no' : 'yes';
  return answer;
};
export default sundaram;
