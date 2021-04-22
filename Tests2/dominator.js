// An array A consisting of N integers is given. The dominator of array A is the value that occurs in more than half of the elements of A.

// For example, consider array A such that

//  A[0] = 3    A[1] = 4    A[2] =  3
//  A[3] = 2    A[4] = 3    A[5] = -1
//  A[6] = 3    A[7] = 3
// The dominator of A is 3 because it occurs in 5 out of 8 elements of A (namely in those with indices 0, 2, 4, 6 and 7) and 5 is more than a half of 8.

// Write a function

// function solution(A);

// that, given an array A consisting of N integers, returns index of any element of array A in which the dominator of A occurs. The function should return −1 if array A does not have a dominator.

// For example, given array A such that

//  A[0] = 3    A[1] = 4    A[2] =  3
//  A[3] = 2    A[4] = 3    A[5] = -1
//  A[6] = 3    A[7] = 3
// the function may return 0, 2, 4, 6 or 7, as explained above.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [0..100,000];
// each element of array A is an integer within the range [−2,147,483,648..2,147,483,647].

function solution1(A) {
  const middle = A.length && Math.round(A.length / 2);
  const set = {};
  let maxCounter = 0;
  let maxIndex = null;
  // console.log(middle);
  for (let i = 0; i < A.length; i++) {
    if (!set[A[i]]) {
      set[A[i]] = A[i];
    } else {
      set[A[i]]++;
      if (set[A[i]] > maxCounter) {
        maxCounter = set[A[i]];
        maxIndex = i;
      }
    }
  }

  if (middle && maxCounter >= middle) {
    return maxIndex;
  }

  return -1;
} // 75%

function solution2(A) {
  const arr = [];
  for (let i = 0; i < A.length; i++) {
    if (!arr[A[i]]) arr[A[i]] = 1;
    else arr[A[i]]++;
    if (arr[A[i]] > A.length / 2) return i;
  }
  return -1;
} // 100%

function solution(A) {
  var counters = [];
  for (var i = 0; i < A.length; i++) {
    var current = A[i];
    if (typeof counters[current] == 'undefined') counters[current] = 1;
    else counters[current]++;
    if (counters[current] > A.length / 2) return i; // when it gets to or more than half length, return index
  }
  return -1;
} // 100%

console.log(solution([]));
console.log(solution([1, 2, 1]));
console.log(solution([3, 4, 3, 2, 3, -1, 3, 3]));
