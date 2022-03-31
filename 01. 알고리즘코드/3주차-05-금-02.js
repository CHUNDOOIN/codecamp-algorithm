function solution(n) {
  var answer = 0;

  if (Math.sqrt(n) - parseInt(Math.sqrt(n)) === 0) {
    let sqrt = Math.sqrt(n);
    answer = (sqrt + 1) * (sqrt + 1);
  } else {
    return -1;
  }
  return answer;
}
