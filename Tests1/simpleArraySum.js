// function solution(ar) {
//   return ar.reduce((a, b) => a + b);
// }
function solution(ar) {
  let sum = 0;

  for (let i = 0; i < ar.length; i++) {
    sum = sum + ar[i];
  }

  return sum;
}
console.log(solution([1, 2, 3, 4, 10, 11]));
