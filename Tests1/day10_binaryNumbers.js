function binaryNumbers(N) {
  const binaryArr = N.toString(2).split('');
  let currCount = 0;
  let count = 0;
  for (let i in binaryArr) {
    if (parseInt(binaryArr[i]) === 1) {
      currCount++;
      if (currCount > count) count = currCount;
    }
    if (parseInt(binaryArr[i]) === 0) {
      currCount = 0;
    }
  }
  console.log(count);
}

binaryNumbers(777);
binaryNumbers(7777);
binaryNumbers(77777);
