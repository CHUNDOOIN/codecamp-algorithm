const today = new Date();
console.log(today);

const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();
console.log(day);

console.log(
  "오늘은 " + year + "년 " + month + "월 " + day + "일 " + " 입니다."
);
