// function solution(str, n) {
//   let subStr = str;
//   for (let i = 0; i < n; i++) {
//     if (subStr.length < n) {
//       subStr = subStr + str;
//     }
//   }
//   let counter = 0;
//   for (let i = 0; i < n; i++) {
//     if (subStr[i] === 'a') {
//       counter++;
//     }
//   }
//   return counter;
// }

function solution(s, n) {
  let counter = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == 'a') counter++;
  }
  let a = counter * Math.floor(n / s.length);
  // console.log('rest', n % s.length);
  for (let i = 0; i < n % s.length; i++) {
    if (s[i] == 'a') a++;
  }
  return a;
}

console.log(solution('abcac', 10));
console.log(solution('aba', 10));
console.log(solution('a', 1000000000000));
