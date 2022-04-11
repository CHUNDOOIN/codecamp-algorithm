function solution(a, b) {
  let day = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
  let month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let monthResult = 0;
  let answer = 0;

  if (a === 1) {
    answer = day[b % 7];
  } else {
    for (let i = 0; i < a - 1; i++) {
      monthResult += month[i];
    }
    answer = day[(monthResult + b) % 7];
  }

  return answer;
}
