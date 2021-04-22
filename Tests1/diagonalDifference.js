// function solution(arr) {
//   // arr[i] = lines
//   // arr[i][j] = columns
//   let firstDiag = 0;
//   let secondDiag = 0;
//   let iPos = 0;
//   let jPos = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       firstDiag = arr[0][0] + arr[1][1] + arr[2][2];
//     }
//   }
//   // console.log(firstDiag, secondDiag);
//   return Math.abs(firstDiag - secondDiag);
// }

function solution(arr) {
  let length = arr.length;
  let firstDiag = 0,
    secondDiag = 0;

  for (let i = 0; i < arr.length; i++) {
    firstDiag += arr[i][i];
    secondDiag += arr[length - 1 - i][i]; // 3 -1 -0 = 2, then 3 -1 -1 = 1, then 3 -1 -2= 0, the -1 is because length x index start at 0
  }
  // console.log(firstDiag, secondDiag);
  return Math.abs(firstDiag - secondDiag);
}

console.log(
  solution([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ])
);
