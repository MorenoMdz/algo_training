// This problem was asked Microsoft.

// Using a read7() method that returns 7 characters from a file, implement readN(n) which reads n characters.

// For example, given a file with the content “Hello world”, three read7() returns “Hello w”, “orld” and then “”.

function solution(S, N) {
  const strArr = S.split('');
  const cut = strArr.splice(0, N);
  console.log(cut, strArr);
}

console.log(solution('Hello World', 7));
