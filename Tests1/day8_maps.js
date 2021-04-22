// and Dictionaries

// 3
// sam 99912222
// tom 11122222
// harry 12299933
// sam
// edward
// harry

function phoneBook(input) {
  const splitArr = input.split('\n');
  const entriesCount = parseInt(splitArr[0]);
  let map = {};
  for (let i = 1; i <= entriesCount; i++) {
    const split = splitArr[i].split(' ');
    const name = split[0];
    const phone = split[1];
    if (name && phone) {
      map[name] = phone;
    }
  }
  for (let i = entriesCount + 1; i < splitArr.length; i++) {
    // check if map has it
    if (map[splitArr[i]]) {
      console.log(`${splitArr[i]}=${map[splitArr[i]]}`);
    } else {
      console.log('Not found');
    }
  }
}

phoneBook('3\nsam 99912222\ntom 11122222\nharry 12299933\nsam\nedward\nharry');
