function solution(d, budget) {
  let count = 0;
  let price = 0;

  // 예산을 오름차순으로 정렬해줌
  d.sort((a, b) => (a > b ? 1 : -1));

  for (let i = 0; i < d.length; i++) {
    // 총금액이 예산을 넘지 않을 경우
    if (!(price > budget)) {
      // 현재 누적된 금액에 추가 금액을 지원했을 경우 커지는 경우가 아닐때
      if (!(price + d[i] > budget)) {
        price += d[i];
        count++;
      } else {
        return count;
      }
    } else {
      return count;
    }
  }
  return count;
}
