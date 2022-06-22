function solution(n, arr1, arr2) {
  let answer = [];
  let map1 = "";
  let map2 = "";
  let newMap = "";

  // arr1 해독
  for (let i = 0; i < arr1.length; i++) {
    map1 += arr1[i].toString(2).padStart(n, "0");
  }

  // arr2 해독
  for (let i = 0; i < arr2.length; i++) {
    map2 += arr2[i].toString(2).padStart(n, "0");
  }

  // arr1, 2 합체
  for (let i = 0; i < n * n; i++) {
    if (!(map1[i] === "1" || map2[i] === "1")) {
      newMap += " ";
    } else {
      newMap += "#";
    }
  }

  // 배열로 변환
  for (let i = 0; i < n; i++) {
    answer.push(newMap.substring(i * n, (i + 1) * n));
    console.log(answer);
  }

  return answer;
  
}
