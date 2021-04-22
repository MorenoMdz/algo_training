function factorial(N) {
  if (N === 0) {
    return 1;
  } else {
    return N * factorial(N - 1);
  }
}

console.log(factorial(10));
