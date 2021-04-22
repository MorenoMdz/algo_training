function staircase(n) {
  let staircase = '';
  // spaces + steps
  // steps = index + 1
  // spaces = n - steps
  for (let i = 0; i < n; i++) {
    let steps = i + 1;
    let spaces = n - steps;
    staircase = staircase + `${' '.repeat(spaces)}${'#'.repeat(steps)}\n`;
  }

  return staircase;
}

console.log(staircase(6));
console.log(staircase(10));
