// Task Description

// "Domino": We are given an S string, representing a domino tile chain. Each tile has an L-R format, where L and R are numbers from the 1..6 range. The tiles are separated by a comma. Some examples of a valid S chain are:

// 1. "6-3"

// 2. "4-3,5-1,2-2,1-3,4-4"

// 3. "1-1,3-5,5-2,2-3,2-4"

// Devise a function that given an S string, returns the number of tiles in the longest matching group within S. A matching group is a set of tiles that match and that are subsequent in S. Domino tiles match, if the right side of a tile is the same as the left side of the following tile. "2-4,4-1" are matching tiles, but "5-2,1-6" are not.

// domino("1-1,3-5,5-2,2-3,2-4") // should return 3.

// function domino(S) {
//   if (S.length === 1) return 1;
//   let matches = 1;
//   const stack = [];
//   const dominos = S.split(',');
//   let current;

//   for (let i = 0; i < dominos.length; i++) {
//     const right = dominos[i].split('-')[1];
//     if (dominos[i + 1]) {
//       const nextL = dominos[i + 1].split('-')[0];
//       if (right === nextL) {
//         matches++;
//         stack.push(dominos[i]);
//       }
//     }
//   }
//   console.log(stack.length);
//   return matches;
// }
function domino(s) {
  var a = s.split(','); // split the string into dominos\
  console.log(a);
  if (a.length == 0) return 0; // if nothing return 0 length
  var length = 0;
  var currentLength = 1;
  var lastR = 0;
  a.forEach(function (d) {
    var da = d.split('-');
    var l = da[0]; // left side
    var r = da[1]; // right side
    if (l == lastR) {
      // check if left side is equal to the last domino right side
      currentLength++; // if so add one
    } else {
      if (currentLength > length) length = currentLength;
      currentLength = 1;
    }
    lastR = r;
    if (currentLength > length) length = currentLength;
    console.log(d, currentLength, length);
  });
  console.log(length);
  return length;
}

// domino('1-2,1-2'); // 1

// domino('3-2,2-1,1-4,4-4,5-4,4-2,2-1'); // 4

// domino('5-5,5-5,4-4,5-5,5-5,5-5,5-5,5-5,5-5,5-5'); // 7

domino('1-1,3-5,5-5,5-4,4-2,1-3'); // 4

// domino('1-2,2-2,3-3,3-4,4-5,1-1,1-2'); // 3
