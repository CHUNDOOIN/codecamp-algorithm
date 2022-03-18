function makeOdd(num) {
  let str = "";
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 1) {
      str = str + i;
    }
  }
  return str;
}

makeOdd(3); // 135
makeOdd(7); // 1357
