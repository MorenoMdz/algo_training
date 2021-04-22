// A non-empty array A consisting of N integers is given. The product of triplet (P, Q, R) equates to A[P] * A[Q] * A[R] (0 ≤ P < Q < R < N).

// For example, array A such that:

//   A[0] = -3
//   A[1] = 1
//   A[2] = 2
//   A[3] = -2
//   A[4] = 5
//   A[5] = 6
// contains the following example triplets:

// (0, 1, 2), product is −3 * 1 * 2 = −6
// (1, 2, 4), product is 1 * 2 * 5 = 10
// (2, 4, 5), product is 2 * 5 * 6 = 60
// Your goal is to find the maximal product of any triplet.

// Write a function:

// function solution(A);

// that, given a non-empty array A, returns the value of the maximal product of any triplet.

// For example, given array A such that:

//   A[0] = -3
//   A[1] = 1
//   A[2] = 2
//   A[3] = -2
//   A[4] = 5
//   A[5] = 6
// the function should return 60, as the product of triplet (2, 4, 5) is maximal.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [3..100,000];
// each element of array A is an integer within the range [−1,000..1,000].

function solution1(A) {
  // sort array
  const sorted = A.sort((a, b) => a - b);
  let max = -Infinity;
  // loop from start +1 to end -1, need to have three items to check
  for (let i = 1; i < sorted.length - 1; i++) {
    const currMax = sorted[i - 1] * sorted[i] * sorted[i + 1];
    if (currMax > max) {
      max = currMax;
    }
  }
  return max;
} // 55%

function solution(A) {
  // sort array
  const sorted = A.sort((a, b) => a - b);
  const length = A.length;

  // possible to find the lowest (starting 2 * the largest one  (length - 1)) and highest (max 3)
  return Math.max(sorted[0] * sorted[1] * sorted[length - 1], sorted[length - 1] * sorted[length - 2] * sorted[length - 3]);
}

console.log(solution([-3, 1, 2, -2, 5, 6]));
console.log(solution([-10, -2, -4]));
