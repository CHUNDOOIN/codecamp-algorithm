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
