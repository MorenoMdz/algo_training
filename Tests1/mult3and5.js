// multiples of 3 and 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

function solution(A, B, Max) {
  const match = Array.from(Array(Max).keys()).filter((num) => num % A === 0 || num % B === 0);
  return match.reduce((a, b) => a + b);
}

console.log(solution(3, 5, 1000));
