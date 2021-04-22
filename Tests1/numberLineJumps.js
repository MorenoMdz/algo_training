function solution(x1, v1, x2, v2) {
  if (x1 === x2) {
    return true;
  }
  for (let i = 0; i < 100000000; i++) {
    if (x1 === x2) {
      return 'YES';
    } else {
      x1 = x1 + v1;
      x2 = x2 + v2;
    }
  }

  return 'NO';
}

console.log(solution(0, 3, 4, 2));
