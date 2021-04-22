function roundsGrades(grades) {
  const multipleToRoundTo = 5;
  const numberToRoundAt = 2;
  for (const i = 0; i < grades.length; i++) {
    if (grades[i] >= 38 && grades[i] % multipleToRoundTo > numberToRoundAt) {
      grades[i] = grades[i] + (multipleToRoundTo - (grades[i] % multipleToRoundTo));
    }
  }
  return grades;
}
// function solution(grades) {
//   const arr = grades;
//   let roundedGrades = [];
//   for (let i = 0; i < arr.length; i++) {
//     // check if under 10
//     const last = arr[i].toString().split('').pop();

//     if (arr[i] < 38) {
//       roundedGrades.push(arr[i]);
//     }
//     if (arr[i] >= 38 && last < 5) {
//       const diff = 5 - (arr[i] % 5);
//       if (diff < 3) {
//         const rounded = parseInt(arr[i], 10) + diff;
//         roundedGrades.push(rounded);
//       } else {
//         roundedGrades.push(arr[i]);
//       }
//     }
//     if (arr[i] > 10 && last > 5) {
//       const diff = 10 - (arr[i] % 10);
//       if (diff < 3) {
//         const rounded = parseInt(arr[i], 10) + diff;
//         roundedGrades.push(rounded);
//       } else {
//         roundedGrades.push(arr[i]);
//       }
//     }
//   }
//   return roundedGrades;
// }

function solution(grades) {
  const multiple = 5;
  let arr = [...grades];
  for (let i = 0; i < grades.length; i++) {
    // only round if > 38 and less than 3 diff
    const diff = multiple - (grades[i] % multiple);
    if (grades[i] >= 38 && diff < 3) {
      arr[i] = grades[i] + diff;
    }
  }
  return arr;
}

solution([4, 73, 67, 38, 33]);
// solution([4, 9, 73, 67, 38, 33]);
