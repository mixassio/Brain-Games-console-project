const BubbleSort = (B) => {
  const A = B;
  const n = A.length;
  for (let i = 0; i < n - 1; i += 1) {
    for (let j = 0; j < n - 1 - i; j += 1) {
      if (A[j + 1] < A[j]) {
        const t = A[j + 1];
        A[j + 1] = A[j];
        A[j] = t;
      }
    }
  }
  return A;
};
export default BubbleSort;
