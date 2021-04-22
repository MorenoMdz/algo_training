function solution(str) {
  const arr = str.split('');
  const filtered = arr.filter((el) => el === '{' || el === '}');
  let set = new Set(filtered);
  // console.log(set);
  // console.log(set.size, filtered.length);
  if (set.size !== filtered.length / 2) {
    return false;
  }
  return true;
}

console.log(solution('{{}'));
console.log(solution('{{}}'));
console.log(solution('{{aaaa}}'));
