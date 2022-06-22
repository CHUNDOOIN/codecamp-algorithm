function solution(dartResult) {
  let answer = 0;
  let a = dartResult.split("");
  // console.log(a)

  let b = [];
  for (let i = 0; i < a.length; i++) {
    if (Number.isNaN(a[i] / 1) === true) {
      b.push(a[i]);
      console.log(b);
    } else {
      b.push(a[i] / 1);
    }
  }
  let c = [];
  for (let i = 0; i < b.length; i++) {
    if (b[i] === 1 && b[i + 1] === 0) {
      b.splice(i + 1, 1, 10);
      console.log(c);
    } else {
      c.push(b[i]);
    }
  }
  let first = 0;
  console.log(c);

  return c;
}
solution("1D2S#10S");

//==================================================================================================

for (let i = 0; i < 2; i++) {
  if (c[i + 1] === "S") {
    one = one + c[i] * 1;
  } else if (c[i + 1] === "D") {
    one = one + c[i] * c[i];
  } else if (c[i + 1] === "T") {
    one = one + c[i] * c[i] * c[i];
  }

  if (c[i + 2] === "*") {
    one = one * 2 * 2;
  } else if (c[i + 2] === "#") {
    one = one * -1;
  }
}
console.log(one);

for (let i = 2; i < 4; i++) {
  if (c[i + 1] === "S") {
    two = two + c[i] * 1;
  } else if (c[i + 1] === "D") {
    two = two + c[i] * c[i];
  } else if (c[i + 1] === "T") {
    two = two + c[i] * c[i] * c[i];
  }

  if (c[i + 2] === "*") {
    one = one * 2;
    two = two * 2;
  } else if (c[i + 2] === "#") {
    two = two * -1;
  }
}
console.log(two);

for (let i = 5; i < c.length; i++) {
  if (c[i + 1] === "S") {
    three = three + c[i] * 1;
  } else if (c[i + 1] === "D") {
    three = three + c[i] * c[i];
  } else if (c[i + 1] === "T") {
    three = three + c[i] * c[i] * c[i];
  }

  if (c[i + 2] === "*") {
    two = two * 2;
    three = three * 2;
  } else if (c[i + 2] === "#") {
    three = three * -1;
  }
}
console.log(three);
