// function solution(a) {
//   // console.log(a);
//   let minDistance = a.length;

//   for (let i = 0; i < a.length; i++) {
//     for (let j = i + 1; j < a.length; j++) {
//       if (a[i] === a[j]) {
//         // console.log(a[i], a[j]);
//         minDistance = j - i;
//       }
//     }
//   }
//   if (minDistance === a.length) {
//     return -1;
//   } else {
//     return minDistance
//   }
// }

function solution(a) {
  let minDistance = a.length;
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] === a[j]) {
        minDistance = Math.min(minDistance, Math.abs(j - i));
      }
    }
  }
  if (minDistance === a.length) {
    return -1;
  } else {
    return minDistance;
  }
}

console.log(solution([3, 2, 1, 2, 3]));
console.log(solution([3, 3]));
