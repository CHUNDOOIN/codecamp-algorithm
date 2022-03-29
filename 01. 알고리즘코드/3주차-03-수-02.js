function solution(numbers) {
  let answer = [];
  let answer2 = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[i] !== numbers[i][j]) {
        answer.push(numbers[i] + numbers[j]);
      }
    }
  }
  answer.sort((a, b) => a - b);
  console.log(answer.sort((a, b) => a - b));

  for (let k = 0; k < answer.length; k++) {
    if (answer[k] !== answer[k + 1]) {
      answer2.push(answer[k]);
    }
  }
  return answer2;
}

// 미완성 ㅠㅠ
