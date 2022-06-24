function solution(absolutes, signs) {
    let answer = 0;

    for (let i = 0; i < absolutes.length; i++) {
        if (signs[i] === true) {
            answer += absolutes[i] * 1;
        } else {
            answer += absolutes[i] * -1;
        }
    }

    return answer;
}

// ===============================

function solution(absolutes, signs) {
    return absolutes.reduce((acc, val, i) => acc + (signs[i] ? +val : -val), 0);
}
