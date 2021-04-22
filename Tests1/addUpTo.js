// This problem was recently asked by Google.

// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// Bonus: Can you do this in one pass?

// function solution(A, K) {
//   for (let i = 0; i < A.length; i++) {
//     for (let j = 1; j < A.length; j++) {
//       console.log(A[i], A[j]);
//       if (A[i] + A[j] === K) return true;
//     }
//   }
//   return false;
// }

function solution(arr, k) {
  hashMap = {};
  for (let value of arr) {
    console.log('hashMap', hashMap, hashMap[value]);
    if (hashMap[value]) {
      return true;
    } else {
      hashMap[k - value] = true;
    }
  }
  return false;
}

console.log(solution([11, 15, 17, 3, 3, 3, 7, 10], 17));
