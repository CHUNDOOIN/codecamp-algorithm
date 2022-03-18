function sum(num) {
  let count = 0;

  for (let i = 1; i <= num; i++) {
    count += i;
  }
  return count;
}

sum(5); // 15
sum(3); // 6
