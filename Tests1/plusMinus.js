function solution(arr) {
  let positives = 0,
    negatives = 0,
    zeros = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeros++;
    }
    if (arr[i] > 0) {
      positives++;
    }
    if (arr[i] < 0) {
      negatives++;
    }
  }

  const getRatio = (el) => (el / arr.length).toPrecision(6);
  // return [getRatio(positives), getRatio(negatives), getRatio(zeros)];
  console.log(`${getRatio(positives)}\n${getRatio(negatives)}\n${getRatio(zeros)}`);
}

console.log(solution([1, 1, 0, -1, -1]));
