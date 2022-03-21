// function solution(arr) {
//   let answer = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i + 1]) {
//     } else {
//       answer.push(arr[i]);
//     }
//   }
//   return answer;
// }

function solution(arr) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      answer.push(arr[i]);
    } else {
    }
  }
  return answer;
}
