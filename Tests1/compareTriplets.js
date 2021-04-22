function solution(a, b) {
  let result = [0, 0];
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      result[0]++;
    } else if (a[i] < b[i]) {
      result[1]++;
    }
  }
  return result;
}

console.log(solution([17, 28, 30], [99, 16, 8]));
