function solution(n) {
  const str = n.toString(3);
  const arr = str.split("");
  const reverse = arr.reverse();
  const num = reverse.join("");
  const answer = parseInt(num, 3);

  return answer;
}
