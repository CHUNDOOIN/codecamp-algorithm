function solution(a, b) {
    let answer = [];
    answer = a
        .map((el, index) => el * b[index])
        .reduce((acc, cur) => acc + cur, 0);

    return answer;
}
