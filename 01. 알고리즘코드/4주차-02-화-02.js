function solution(arr) {
  let answer = [];
  if (arr.length > 1) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== Math.min(...arr)) {
        answer.push(arr[i]);
      }
    }
  } else {
    return [-1];
  }
  return answer;
}
