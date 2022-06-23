function solution(new_id) {
    let answer = "";

    // 1단계
    let one = new_id.toLowerCase();

    // 2단계 정규표현식을 사용
    // a~z, 0~9, -, _, .,을 제외(^)하고 문자열 전체(/g)에서 찾아 ""로 바꿔라
    let two = one.replace(/[^a-z0-9-_.]/g, "");

    // 3단계
    // .은 1개의 문자 자체를 뜻한다. 따라서 백슬래쉬를 사용한다 (\.)
    let three = two.replace(/\.+/g, ".");

    // 4단계
    // ^는 시작, $는 마지막을 뜻한다. 해당되면 빈문자열로 바꿔라
    let four = three.replace(/^\.|\.$/g, "");

    // 5단계
    let five = "";
    if (four === "") {
        five += "a";
    } else {
        five = four;
    }

    // 6단계
    let six = "";
    if (five.length > 15) {
        six = five.slice(0, 15);
        six = six.replace(/\.$/g, "");
    } else {
        six = five;
    }

    // 7단계
    while (six.length < 3) {
        six += six[six.length - 1];
    }
    let seven = six;

    return seven;
}
