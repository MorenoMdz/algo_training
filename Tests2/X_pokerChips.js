// poker chips:
// find min number of chips to match request:
// chips values: 100, 50, 25, 10, 5, 1
// value: 126 = 100, 25, 1

function solution(value) {
  const chips = [100, 50, 25, 10, 5, 1];
  let chipsNum = 0;
  let curr = value;

  // for (let i = 0; i < chips.length; i++) {
  //   let num = Math.floor(value / chips[i]); // how many of the current chip are needed at this cycle?
  //   curr = curr - chips[i] * num;
  //   chipsNum = chipsNum + num;
  // }
  for (chip of chips) {
    let num = Math.floor(value / chip); // how many of the current chip are needed at this cycle?
    curr = curr - chip * num;
    chipsNum++;
  }
  return chipsNum;
}

console.log(solution(126));
