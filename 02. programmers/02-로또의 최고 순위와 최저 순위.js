function solution(lottos, win_nums) {
    // 0의 개수 구하기
    let zero = lottos.filter((num) => num === 0);

    // 맞춘 개수 구하기
    let answer = lottos.filter((num) => win_nums.includes(num));

    // 최고 순위와 최저 순위를 구하기 위한 배열
    let max = [6, 6, 5, 4, 3, 2, 1];
    let min = [6, 6, 5, 4, 3, 2, 1];

    return [max[answer.length + zero.length], min[answer.length]];
}
