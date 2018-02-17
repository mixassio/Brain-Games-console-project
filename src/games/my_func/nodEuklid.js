const nodEvcklid = (num1, num2) => {
  let numMax = Math.max(num1, num2);
  let numMin = Math.min(num1, num2);
  let remain = 1;
  while (remain !== 0) {
    remain = numMax % numMin;
    if (remain === 0) {
      break;
    }
    numMax = numMin;
    numMin = remain;
  }
  return numMin;
};

export default nodEvcklid;
