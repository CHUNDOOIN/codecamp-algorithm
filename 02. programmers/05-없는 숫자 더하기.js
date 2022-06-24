function solution(numbers) {
    let answer = 0;
    let total = 0;

    for (let i = 0; i < 10; i++) {
        total += i;
    }

    for (let i = 0; i < numbers.length; i++) {
        answer += numbers[i];
    }

    return total - answer;
}

// =================================================================
// reduce 메서드를 사용하면 좀 더 간결해진다.

function solution(numbers) {
    return 45 - numbers.reduce((acc, cur) => acc + cur);
}
