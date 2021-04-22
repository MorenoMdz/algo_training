// function splitOddEven(S) {
//   let odds = '';
//   let evens = '';
//   for (let i = 0; i < S.length; i++) {
//     if (i % 2 === 0 || i === 0) {
//       evens = evens + S[i];
//     } else {
//       odds = odds + S[i];
//     }
//   }
//   console.log(`${evens} ${odds}`);
// } nope

function splitOddEven(input) {
  //Enter your code here
  input.split('\n').reduce((target, item, index) => {
    if (index && Number.isNaN(+item)) {
      let result = item
        .split('')
        .reduce((target, text, index) => {
          target[+(index % 2 !== 0)] += text;

          return target;
        }, new Array(2).fill(''))
        .join(' ');

      console.log(result);
    }

    return target;
  }, '');
}

splitOddEven('Hacker');
splitOddEven('Rank');
