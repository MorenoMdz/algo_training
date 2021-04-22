// This problem was asked by Two Sigma.

// Using a function rand7() that returns an integer from 1 to 7 (inclusive) with uniform probability, implement a function rand5() that returns an integer from 1 to 5 (inclusive).

function solution(N) {
  const rand7 = () => {
    return Math.floor(Math.random() * 7);
  };
  while (true) {
    let newRnd = rand7();
    if (newRnd <= 5 && newRnd > 0) {
      return newRnd;
    }
  }
}

console.log(solution(7));
