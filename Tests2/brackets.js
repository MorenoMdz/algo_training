// A string S consisting of N characters is considered to be properly nested if any of the following conditions is true:

// S is empty;
// S has the form "(U)" or "[U]" or "{U}" where U is a properly nested string;
// S has the form "VW" where V and W are properly nested strings.
// For example, the string "{[()()]}" is properly nested but "([)()]" is not.

// Write a function:

// function solution(S);

// that, given a string S consisting of N characters, returns 1 if S is properly nested and 0 otherwise.

// For example, given S = "{[()()]}", the function should return 1 and given S = "([)()]", the function should return 0, as explained above.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [0..200,000];
// string S consists only of the following characters: "(", "{", "[", "]", "}" and/or ")".

function solution(str) {
  if (!str.length) return 1;
  if (str.length === 1) return 0;
  if (str.length % 2 !== 0) return 0;
  const arr = str.split('');
  const stack = [];
  for (let i = 0; i < arr.length; i++) {
    // check if each opening has its closing
    const bracket = arr[i];
    if (bracket === '{' || bracket === '[' || bracket === '(') {
      stack.push(bracket);
    } else if (bracket === '}' || bracket === ']' || bracket === ')') {
      //take the last item in the stack and save with the current one
      const pair = stack.pop() + bracket;
      if (pair !== '{}' && pair !== '[]' && pair !== '()') {
        return 0;
      }
    }
  }
  if (stack.length > 0) return 0;
  return 1;
}

console.log(solution('{[()()]}'));
console.log(solution('([)()]'));
console.log(solution('('));
console.log(solution('((('));
