// function solution(s) {
//   let answer = "";
//   let arr = s.split(" ");

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       if (j % 2 === 1) {
//         answer += arr[i][j].toLowerCase();
//       } else {
//         answer += arr[i][j].toUpperCase();
//       }
//     }
//     answer += " ";
//   }
//   return answer;
// }

// solution("try hello world");

// function solution(s) {
//   let answer = "";
//   let index = 0;

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === " ") {
//       index = 0;
//       answer += " ";
//     } else {
//       console.log(index);
//       if (index % 2 === 0) {
//         //짝
//         answer += s[i].toUpperCase();
//       } else {
//         //홀
//         answer += s[i].toLowerCase();
//       }
//       index++;
//     }
//   }
//   return answer;
// }

// solution("try hello world");
