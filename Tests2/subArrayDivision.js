function solution(s, d, m) {
  // subsequent m items in S to be equal d
  let counter = 0;

  for (let i = 0; i < s.length; i++) {
    let currentSum = 0;
    let slice = s.slice(i, i + m);
    currentSum = slice.reduce((a, b) => a + b);
    if (currentSum === d) {
      counter++;
    }
  }

  return counter;
}

console.log(solution([1, 1, 1, 1, 1, 1], 3, 2));
console.log(solution([4], 4, 1));
console.log(solution([1, 2, 1, 3, 2], 3, 2));
