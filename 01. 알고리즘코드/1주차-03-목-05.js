function bigNum(str) {
  let biggest = 0;

  let num = str / 1;

  for (let i = 0; i < str.length; i++) {
    if (biggest > num[i]) {
      return num[i];
    }
  }
}

bigNum("12345"); // 5
bigNum("87135"); // 8
