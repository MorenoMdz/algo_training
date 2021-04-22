function solution(A) {
  let reverse = '';
  for (let i = 1; i <= A.length; i++) {
    reverse = reverse + A[A.length - i] + ' ';
  }
  console.log(reverse);
}

solution([1, 2, 3, 4]);
