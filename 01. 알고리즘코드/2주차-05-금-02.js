function solution(array, commands) {
  var answer = [];

  for (let i = 0; i < commands.length; i++) {
    let sort = array
      .slice(commands[i][0] - 1, commands[i][1])
      .sort((a, b) => a - b);
    answer.push(sort[commands[i][3 - 1] - 1]);
  }
  return answer;
}

// arr.sort ( (a, b) => {
//   return a > b ? -1 : 1 // 내림차순
//   return a > b ? 1 : -1 // 오름차순
// })

// 예시
// let arr = ["a", "b", "c", "A", "Z"]

// arr.sort ( (a, b) => {
//   return a > b ? -1 : 1 // 내림차순
// })

// arr.sort ( (a, b) => {
//   return a > b ? 1 : -1 // 오름차순
// })
