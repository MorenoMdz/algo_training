function solution(s, n) {
  const multiplier = Math.floor(n / s.length);
  const rest = n % multiplier;
  let found = 0;
  let restFound = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'a') {
      found++;
    }
  }
  for (let i = 0; i < rest; i++) {
    if (s[i] === 'a') {
      restFound++;
    }
  }

  found = found * multiplier;
  if (restFound > 0) {
    found = found + restFound;
  }

  if (s.length > n) {
    found = 0;
    for (let i = 0; i < n; i++) {
      if (s[i] === 'a') {
        found++;
      }
    }
  }
  return found;
}

console.log(solution('ababa', 3));
console.log(solution('aba', 10));
console.log(solution('a', 1000000000000));
console.log(solution('abababa', 1000000000002));
