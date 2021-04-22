function solution(n) {
  // jump 1 or 2 indexes
  // return min count of jumps
  let jumps = 0;
  let currentPosition = 0;
  for (let i = 0; i < n.length; i++) {
    // console.log(n[i]);
    // check if can jump 2
    if (n[i + 2] === 0 && i === currentPosition) {
      // console.log('can jump 2', i, 'to', i + 2, n[i + 2]);
      currentPosition = i + 2;
      jumps++;
    } else if (n[i + 1] === 0 && i === currentPosition) {
      // console.log('can jump 1', i, 'to', i + 2, n[i + 2]);
      currentPosition = i + 1;
      jumps++;
    }
  }

  return jumps;
}

console.log(solution([0, 1, 0, 0, 0, 1, 0]));
console.log(solution([0, 0, 1, 0, 0, 1, 0]));
