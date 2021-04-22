function solution(s) {
  // let parsed = parseInt(s, 10);
  // if (parsed === NaN || !parsed) throw new Error('Bad String');
  // if (typeof parsed !== 'number') throw new Error('Bad String');
  // console.log(parsed);
  // return parsed;
  try {
    s != Number(s) && err();
    console.log(Number(s));
  } catch (err) {
    console.log('Bad String');
  }
}

solution(13);
solution('sa');

//WHAT?
// try {
//   console.log(parseInt(S).toString().replace('NaN', 'Bad String'));
// } catch (e) {
//   console.log('Bad String');
// }

// function main() {
//   var S = readLine();
//   try {
//     S != Number(S) && err();
//     console.log(Number(S));
//   } catch (err) {
//     console.log('Bad String');
//   }
// }
