function solution(arr) {
  var answer = 0;

  for (let i = 0; i < arr.length; i++) {
    answer = answer + arr[i];
  }

  return answer / arr.length;
}

solution([1, 2, 3, 4]);

solution([5, 5]);
