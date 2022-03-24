function solution(x, n) {
  let answer = [];

  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }

  return answer;
}

// 배열메서드 사용

function solution(x, n) {
  const answer = new Array(n).fill(1).map((num, i) => {
    return (num + i) * x;
  });
  return answer;
}
