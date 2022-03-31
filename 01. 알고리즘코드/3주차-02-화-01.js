function solution(n) {
  let answer = [];

  let str = n + "";

  let arr = str.split("");

  let reverse = arr.reverse();

  for (let i = 0; i < reverse.length; i++) {
    answer.push(parseInt(reverse[i]));
  }

  return answer;

  
}
