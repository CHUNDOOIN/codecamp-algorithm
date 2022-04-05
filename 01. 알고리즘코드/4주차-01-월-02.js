function solution(x) {
  let result = 0;
  let word = x + "";
  let arr = word.split("");

  for (let i = 0; i < arr.length; i++) {
    result = result + parseInt(arr[i]);
    console.log(result);
  }
  if (x % result === 0) {
    return true;
  } else {
    return false;
  }
  return answer;
}

solution(13);
