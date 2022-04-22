function solution(s, n) {
  //prettier-ignore
  let a = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ]
  //prettier-ignore
  let b = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ]

  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer = answer + " ";
    }
    if (a.includes(s[i])) {
      answer = answer + a[(a.indexOf(s[i]) + n) % 26];
    }
    if (b.includes(s[i])) {
      answer = answer + b[(b.indexOf(s[i]) + n) % 26];
    }
  }
  return answer;
}
