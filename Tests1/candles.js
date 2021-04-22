function solution(arr) {
  let tallest = arr[0];
  let counter = 0;

  for (let candle in arr) {
    if (arr[candle] > tallest) {
      tallest = arr[candle];
    }
  }
  for (let candle in arr) {
    if (arr[candle] === tallest) {
      counter++;
    }
  }
  return counter;
}

console.log(solution([4, 4, 1, 3]));
console.log(solution([3, 2, 1, 3]));
console.log(solution([18, 90, 90, 13, 90, 75, 90, 8, 90, 43]));
