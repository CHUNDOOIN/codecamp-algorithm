function solution(s) {
  let p_count = [];
  let y_count = [];

  s = s.toLowerCase();

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p") {
      p_count.push(s[i]);
    } else if (s[i] === "y") {
      y_count.push(s[i]);
    }
  }
  if (p_count.length === y_count.length) {
    return true;
  } else {
    return false;
  }
  return;
}
