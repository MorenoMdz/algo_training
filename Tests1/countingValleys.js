function solution(str) {
  // steps Uphill or Downhill
  // start and end at sea level (0)
  // step 1 unit
  // mountain starts with U ends with D
  // valley starts with D ends with U
  const arr = str.split('');
  let currentLevel = 0;
  let prev = 0;
  let valleys = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'U') {
      currentLevel++;
    } else if (arr[i] === 'D') {
      currentLevel--;
    }
    if (prev && prev < 0 && currentLevel === 0) {
      valleys++;
    }
    // console.log(prev, currentLevel);
    prev = currentLevel;
  }
  return valleys;
}

console.log(solution('UDDDUDUU'));

// cleaned up version found
function countingValleys(n, s) {
  let level = 0;
  let valley = 0;
  s.split('').forEach((item) => {
    if (item === 'U') {
      ++level;
    } else {
      --level;
    }
    if (item === 'U' && level === 0) {
      // if current is UP AND it is at level 0, means it came from a valley!
      ++valley;
    }
  });

  return valley;
}

// another solution:
// N is also not used
function countingValleys(n, s) {
  let steps = s.split('');
  let valleyCount = 0;
  let currentSeaLevel = 0;
  let valleyStatus = false;
  steps.forEach((step) => {
    step === 'U' ? currentSeaLevel++ : currentSeaLevel--;
    if (currentSeaLevel < 0 && !valleyStatus) {
      valleyCount++;
      valleyStatus = true;
    } else if (currentLevel >= 0 && valleyStatus) {
      valleyStatus = false;
    }
  });
  return valleyCount;
}
