// Given an array of time intervals (start, end) for classroom lectures (possibly overlapping), find the minimum number of rooms required.

// For example, given [(30, 75), (0, 50), (60, 150)], you should return 2.

function solution(A) {
  let rooms = 0;
  let current = A[0];
  let currentStart = current[0];
  let currentEnd = current[1];
  for (let i = 0; i < A.length; i++) {
    if (!A[i + 1]) break;
    const nextStart = A[i + 1][0];
    const nextEnd = A[i + 1][1];
    if ((currentStart >= nextStart && currentStart <= nextEnd) || (currentEnd >= nextStart && currentEnd <= nextEnd)) {
      rooms++;
    }
    current = A[i + 1];
  }
  console.log(rooms);
  return rooms;
}

// |___|  |_______|
//    |___|  |__|

console.log(
  solution([
    [61, 151],
    [30, 75],
    [0, 50],
    [60, 150],
    [60, 150],
    [60, 150],
    [61, 151],
  ])
);
