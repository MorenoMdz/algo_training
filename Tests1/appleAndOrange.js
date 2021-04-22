function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // apples are positives + house begin num
  // oranges are negatives + house end num
  let catchApples = 0;
  let catchOranges = 0;
  const houseArea = (spot) => {
    return spot >= s && spot <= t;
  };

  for (let spot in apples) {
    if (houseArea(apples[spot] + a)) {
      catchApples++;
    }
  }

  for (let spot in oranges) {
    if (houseArea(oranges[spot] + b)) {
      catchOranges++;
    }
  }

  let applesOranges = `${catchApples}\n${catchOranges}`;
  console.log(applesOranges);
}

console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]));
