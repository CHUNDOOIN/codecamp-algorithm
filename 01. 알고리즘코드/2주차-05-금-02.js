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
