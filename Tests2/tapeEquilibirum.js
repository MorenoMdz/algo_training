// A non-empty array A consisting of N integers is given. Array A represents numbers on a tape.

// Any integer P, such that 0 < P < N, splits this tape into two non-empty parts: A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].

// The difference between the two parts is the value of: |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|

// In other words, it is the absolute difference between the sum of the first part and the sum of the second part.

// For example, consider array A such that:

//   A[0] = 3
//   A[1] = 1
//   A[2] = 2
//   A[3] = 4
//   A[4] = 3
// We can split this tape in four places:

// P = 1, difference = |3 − 10| = 7
// P = 2, difference = |4 − 9| = 5
// P = 3, difference = |6 − 7| = 1
// P = 4, difference = |10 − 3| = 7
// Write a function:

// function solution(A);

// that, given a non-empty array A of N integers, returns the minimal difference that can be achieved.

// For example, given:

//   A[0] = 3
//   A[1] = 1
//   A[2] = 2
//   A[3] = 4
//   A[4] = 3
// the function should return 1, as explained above.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [2..100,000];
// each element of array A is an integer within the range [−1,000..1,000].

// function solution(A) {
//   // split A in all possible ways
//   let min = Infinity;
//   for (let i = 0; i < A.length; i++) {
//     let left = 0;
//     let right = 0;
//     for (j = 0; j <= i; j++) {
//       left = left + A[j];
//     }
//     for (j = i + 1; j < A.length; j++) {
//       right = right + A[j];
//     }
//     const currMin = Math.abs(left - right);
//     if (currMin < min) {
//       min = currMin;
//     }
//   }
//   return min;
// } // 33%

// try in a single loop

function solution(A) {
  let left = 0;
  let right = A.reduce((a, b) => a + b);
  let minDiff = Infinity;

  for (let i = 0; i < A.length - 1; i++) {
    left = left + A[i];
    right = right - A[i];
    const diff = Math.abs(left - right);
    if (minDiff > diff) {
      minDiff = diff;
    }
  }

  return minDiff;
}

console.log(solution([3, 1, 2, 4, 3]));
console.log(solution([2, 2]));
console.log(solution([2, 1]));
console.log(solution([-1000, 1000]));
