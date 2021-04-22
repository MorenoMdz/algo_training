function isPalindrome(s) {
  let queue = s.split('');
  let stack = [];
  for (let i = s.length - 1; i >= 0; i--) {
    stack.push(queue[i]);
  }
  const stackStr = stack.join('');
  if (stackStr === s) return console.log(`The word, ${s}, is a palindrome.`);
}

console.log(isPalindrome('abababa'));
console.log(isPalindrome('abababaz'));

// Write the following declarations and implementations:

// Two instance variables: one for your stack , and one for your queue .
// A void pushCharacter(char ch) method that pushes a character onto a stack.
// A void enqueueCharacter(char ch) method that enqueues a character in the queue instance variable.
// A char popCharacter() method that pops and returns the character at the top of the stack instance variable.
// A char dequeueCharacter() method that dequeues and returns the first character in the queue instance variable.

function pushCharacter(ch) {
  stack.push(ch);
}

function enqueueCharacter(ch) {
  queue.unshift(ch);
}

function popCharacter() {
  const popped = stack.pop();
  return popped;
}

function dequeueCharacter() {
  const popped = queue.pop();
  return popped;
}
