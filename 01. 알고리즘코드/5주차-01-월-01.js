function solution(participant, completion) {
  let answer = "";

  let a = participant.sort();
  console.log(a);
  let b = completion.sort();
  console.log(b);

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      answer = a[i];
      break;
    }
  }
  return answer;
}

// solution (["leo", "kiki", "eden"], ["eden", "kiki"]	)
// solution (["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]	)

// splice 메서드!!!
// 1. 배열 메서드
// 2. 원하는 위치(인덱스)의 데이터를 제거하거나 추가할 수 있다.
// 3. 원본이 저장!

// arr.sort((a, b) => a > b ? 1 : -1) 오름차순
// arr.sort((a, b) => a < b ? 1 : -1) 내림차순
