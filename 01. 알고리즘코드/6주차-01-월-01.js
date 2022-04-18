function solution(s) {
  let result0 = s.replace(/zero/g, "0");
  let result1 = result0.replace(/one/g, "1");
  let result2 = result1.replace(/two/g, "2");
  let result3 = result2.replace(/three/g, "3");
  let result4 = result3.replace(/four/g, "4");
  let result5 = result4.replace(/five/g, "5");
  let result6 = result5.replace(/six/g, "6");
  let result7 = result6.replace(/seven/g, "7");
  let result8 = result7.replace(/eight/g, "8");
  let result9 = result8.replace(/nine/g, "9");
  let answer = result9 / 1;
  return answer;
}

// replace 는 하나만, replaceall 사용하면 모든값을 다 바꿔준다.
// 근데 이건 ES7에 추가 된놈이라 ㅠㅠ 프로그래머스에는 못씀
