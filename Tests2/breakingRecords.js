function solution(scores) {
  let min = scores[0];
  let max = scores[0];
  let breakMin = 0;
  let breakMax = 0;

  for (let i = 0; i < scores.length; i++) {
    if (scores[i] < min) {
      breakMin++;
      min = scores[i];
    }
    if (scores[i] > max) {
      breakMax++;
      max = scores[i];
    }
  }

  return [breakMax, breakMin];
}

console.log(solution([10, 5, 20, 20, 4, 5, 2, 25, 1]));
