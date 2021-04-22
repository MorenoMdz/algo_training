// An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

// Your goal is to find that missing element.

// Write a function:

// function solution(A);

// that, given an array A, returns the value of the missing element.

// For example, given array A such that:

//   A[0] = 2
//   A[1] = 3
//   A[2] = 1
//   A[3] = 5
// the function should return 4, as it is the missing element.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [0..100,000];
// the elements of A are all distinct;
// each element of array A is an integer within the range [1..(N + 1)].

// function solution(A) {
//   const sorted = A.sort((a, b) => a - b);
//   // console.log(sorted);
//   let prev = sorted[0]; // 1
//   for (let i = 1; i < A.length; i++) {
//     if (prev === sorted[i] - 1) {
//       // console.log(sorted[i] - 1);
//       prev = sorted[i];
//     } else {
//       return sorted[i] - 1;
//     }
//   }
// } // 50%

function solution(A) {
  let map = {};
  A.map((x) => {
    map[x] = x;
    return x;
  });

  console.log(map);

  let result = 1;
  while (true) {
    if (!map[result]) return result;
    result++; // at each cycle ad + 1 to result, but it start always at 1?
  }
}

// function solution(A) {
//   A.sort((a, b) => a - b);
//   let int = 1;
//   for (let i = 0; i < A.length; i++) {
//     if (A[i] > 0 && A[i] === int) {
//       int++;
//     } else if (A[i] > 0 && A[i] > int) {
//       return int;
//     }
//   }
//   return int;
// }

console.log(solution([2, 3, 1, 5]));
