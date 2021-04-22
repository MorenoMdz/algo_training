// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

function solution(N) {
  function primeFactors(n) {
    const factors = [];
    let divisor = 2;

    while (n >= 2) {
      if (n % divisor == 0) {
        factors.push(divisor);
        n = n / divisor;
      } else {
        divisor++;
      }
    }
    return factors;
  }

  const primesFound = primeFactors(N);

  // for (let i = 0; i <= N; i++) {
  //   if (primeFactors(i + 1)) {
  //     console.log('prime', i + 1, primeFactors(i + 1));
  //     largestFound = i + 1;
  //   } /* else {
  //     console.log('not');
  //   } */
  // }
  return primesFound[primesFound.length - 1];
}

console.log(solution(600851475143));
// console.log(solution(600851475143));
