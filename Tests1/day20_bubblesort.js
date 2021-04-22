// for (int i = 0; i < n; i++) {
//     // Track number of elements swapped during a single array traversal
//     int numberOfSwaps = 0;

//     for (int j = 0; j < n - 1; j++) {
//         // Swap adjacent elements if they are in decreasing order
//         if (a[j] > a[j + 1]) {
//             swap(a[j], a[j + 1]);
//             numberOfSwaps++;
//         }
//     }

//     // If no elements were swapped during a traversal, array is sorted
//     if (numberOfSwaps == 0) {
//         break;
//     }
// }

// Array is sorted in 0 swaps.
// First Element: 1
// Last Element: 3\
a = [4, 3, 1, 2];

function swap(x, y, array) {
  var b = array[y];
  array[y] = array[x];
  array[x] = b;
}

function solution() {
  // var n = parseInt(readLine());
  // a = readLine().split(' ');
  // a = a.map(Number);
  var totalSwaps = 0;

  for (var i = 0; i < n; i++) {
    // Track number of elements swapped during a single array traversal
    var numberOfSwaps = 0;

    for (var j = 0; j < n - 1; j++) {
      // Swap adjacent elements if they are in decreasing order
      if (a[j] > a[j + 1]) {
        swap(j, j + 1, a);
        numberOfSwaps++;
        totalSwaps++;
      }
    }

    // If no elements were swapped during a traversal, array is sorted
    if (numberOfSwaps == 0) {
      break;
    }
  }
  console.log('Array is sorted in ' + totalSwaps + ' swaps.');
  console.log('First Element: ' + a[0]);
  console.log('Last Element: ' + a[n - 1]);
}

solution();

// function solution() {
//   for (let i = 0; i < a.length; i++) {
//     let numberOfSwaps = 0;

//     for (let j = 0; j < a.length - 1; j++) {
//       let curr = a[j];
//       let next = a[j + 1];
//       if (curr > next) {
//         a[j] = next;
//         a[j + 1] = curr;
//         numberOfSwaps++;
//       }
//     }

//     // If no elements were swapped during a traversal, array is sorted
//     if (numberOfSwaps === 0) {
//       console.log(`Array is sorted in ${numberOfSwaps} swaps.`);
//       console.log('First Element:', a[0]);
//       console.log('Last Element:', a[a.length - 1]);
//       return;
//     } /* else {
//       console.log(`Array is sorted in ${numberOfSwaps} swaps.`);
//       console.log('First Element:', a[0]);
//       console.log('Last Element:', a[a.length - 1]);
//     } */
//   }
// }
