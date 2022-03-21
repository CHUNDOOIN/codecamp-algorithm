// function solution(phone_number) {
//   let newNum = "*".repeat(phone_number.length - 4);
//   let addNum = phone_number.substring(phone_number.length - 4);

//   return newNum + addNum;
// }

// solution("01033334444");
// solution("027778888");

function solution(phone_number) {
  let answer = "";

  for (let i = 0; i < phone_number.length; i++) {
    if (phone_number.length - 4 > i) {
      answer = answer + "*";
    } else {
      answer = answer + phone_number[i];
    }
  }

  return answer;
}

solution("01033334444"); // 11자리
solution("027778888"); // 10자리
