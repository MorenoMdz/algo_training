// get the hourglass structure
// [i][j]       [i+1][j]     [i+2][j]
//            [i+1][j+1]
// [i][j+2]  [i+1][j+2]  [i+2][j+2]
// the sum should be [i][j] + [i+1][j] + [i+2][j] + [i+1][j+1] + [i][j+2] + [i+1][j+2] + [i+2][j+2]

function getHourglassSum(i, j, arr) {
  const sum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
  return sum;
}

function getHourglassesSum(strArr) {
  const results = [];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const sum = getHourglassSum(i, j, strArr);
      results.push(sum);
    }
  }
  console.log(Math.max(...results));
}

// function getHourglassesSum(arr) {
//   const temp = [];
//   for (let i = 0; i < 4; i++) {
//     for (let j = 0; j < 4; j++) {
//       temp.push(arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]);
//     }
//   }

//   let max = temp.reduce(function (previous, current) {
//     return previous > current ? previous : current;
//   }); // this function returns the max found
//   console.log(max);
// }

// const arr = [
//   [1, 1, 1, 0, 0, 0],
//   [0, 1, 0, 0, 0, 0],
//   [1, 1, 1, 0, 0, 0],
//   [0, 0, 2, 4, 4, 0],
//   [0, 0, 0, 2, 0, 0],
//   [0, 0, 1, 2, 4, 0],
// ];

const arr = [
  [0, -4, -6, 0, -7, -6],
  [-1, -2, -6, -8, -3, -1],
  [-8, -4, -2, -8, -8, -6],
  [-3, -1, -2, -5, -7, -4],
  [-3, -5, -3, -6, -6, -6],
  [-3, -6, 0, -8, -6, -7],
];
getHourglassesSum(arr);
