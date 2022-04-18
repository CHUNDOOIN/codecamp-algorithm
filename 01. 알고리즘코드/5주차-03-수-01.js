function solution(nums) {
  let answer = [];
  let pick = nums.length / 2;

  let sort = nums.sort((a, b) => (a > b ? 1 : -1));

  for (let i = 0; i < sort.length; i++) {
    if (sort[i] !== sort[i + 1]) {
      answer.push(sort[i]);
    }
  }

  return answer.length > pick ? pick : answer.length;
}

// 리팩토링

function solution(nums) {
  let pick = nums.length / 2;

  let ddd = new Set(nums);

  let sort = [...ddd].sort((a, b) => (a > b ? 1 : -1));

  return sort.length > pick ? pick : sort.length;
}
