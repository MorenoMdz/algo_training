function solution(n, p) {
  if (n < 0 || p < 0) throw new Error('n and p should be non-negative');
  return n * p;
}

console.log(solution(3, 3));
console.log(solution(2, 2));
console.log(solution(-4, 4));

let Calculator = function () {
  this.power = function (n, p) {
    try {
      if (n >= 0 && p >= 0) {
        return n ** p;
      } else {
        throw 'n and p should be non-negative';
      }
    } catch (error) {
      return error;
    }
    // if (n < 0 || p < 0) throw new Error('n and p should be non-negative');
    // if (n < 0 || p < 0) return console.log('n and p should be non-negative');
    // return n ** p;
  };
};
