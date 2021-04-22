function solution(a) {
  let minFound;

  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] === a[j]) {
        // console.log('match', a[i], i, a[j], j);
        const diff = j - i;
        if (!minFound || diff < minFound) {
          // console.log('new min', diff);
          minFound = diff;
        }
      }
    }
  }

  return minFound || -1;
}

console.log(solution([7, 1, 3, 4, 1, 7]));
