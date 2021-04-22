function solution(N) {
  if (N % 2 !== 0) {
    return console.log('Weird');
  }
  if (N % 2 === 0) {
    if (N >= 2 && N <= 5) {
      console.log('Not Weird');
    }
    if (N >= 6 && N <= 20) {
      console.log('Weird');
    }
    if (N > 20) {
      console.log('Not Weird');
    }
  }
}

console.log(solution(24));
