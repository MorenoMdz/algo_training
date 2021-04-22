// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

// function solution(A, B) {
//   let largest = 0;
//   const isPalindrome = (num) => {
//     const numArr = String(num).split('');
//     const reverseArr = [...numArr].reverse();
//     return reverseArr.join('') === numArr.join('');
//   };

//   for (let i = A; i > 0; i--) {
//     for (let j = i; j > 0; j--) {
//       if (isPalindrome(i * j) > largest) {
//         largest = i * j;
//         console.log('found at', i * j);
//       }
//     }
//   }
//   return largest;
// } // wrong, returns 90909

function isPalindrome(num) {
  return parseInt(String(num).split('').reverse().join('')) === num;
}

function solution(numberOfDigits) {
  var start = Math.pow(10, numberOfDigits - 1);
  var end = Math.pow(10, numberOfDigits);
  var largestPalindrome = 0;
  var product;
  for (a = start; a < end; a++) {
    for (b = start; b < end; b++) {
      product = a * b;
      if (largestPalindrome < product) {
        if (isPalindrome(product)) {
          largestPalindrome = product;
        }
      }
    }
  }

  return largestPalindrome;
}
console.time('Function #1');
for (var i = 0; i < 100; i++) {
  solution(3);
}
console.timeEnd('Function #1');

console.log(solution(3));
