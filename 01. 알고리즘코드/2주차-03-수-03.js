function solution(n) {
  var answer = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      answer += i;
    }
  }

  return answer;
}

// 리팩토링

function solution(n) {
  var answer = n;
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      answer += i;
    }
  }

  return answer;
}

// 메서드 활용 (자주 나온다고 함!)
function solution(n) {
  const answer = new Array(n).fill(1).reduce((acc, cur, i) => {
    return n % (cur + i) === 0 ? acc + (cur + i) : acc;
  }, 0);

  return answer;
}
