// 내가 작성한 코드 (오답)
function solution(id_list, report, k) {
    let answer = [];

    let sortReport = new Set(report);
    let newReport = [...sortReport];

    let resultCount = {};
    let reportCount = {};

    // 아이디 명단 객체
    for (let i = 0; i < id_list.length; i++) {
        resultCount[id_list[i]] = 0;
    }

    // 신고 받은 횟수 카운트를 위한 객체
    for (let i = 0; i < id_list.length; i++) {
        reportCount[id_list[i]] = 0;
    }

    // 신고 한 명단 각 요소를 배열로 수정
    let newArr = [];
    for (let i = 0; i < newReport.length; i++) {
        newArr.push(newReport[i].split(" "));
    }

    // 신고받은 횟수
    for (let i = 0; i < newArr.length; i++) {
        reportCount[newArr[i][1]]++;
    }
    let a = Object.entries(reportCount);

    // 정지 받은 명단
    let stop = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i][1] >= k) {
            stop.push(a[i][0]);
        }
    }

    // 정지 받은 명단을 신고한 사람에게 결과 통보한 횟수
    for (let i = 0; i < newArr.length; i++) {
        for (let j = 0; j < newArr[i].length; j++) {
            if (stop[j] === newArr[i][1]) {
                resultCount[newArr[i][0]]++;
                console.log(resultCount);
            }
        }
    }

    return Object.values(resultCount);
}

// =============================== 참고한 코드
function solution(id_list, report, k) {
    // 각 id의 값에 대한 숫자 변환
    let answer = new Array(id_list.length).fill(0);

    // 중복 신고 제거
    let set = new Set(report);
    let newReport = [...set];

    // 유저 : [신고한사람1, 신고한사람2, ...] 형식으로 변환
    const reportList = {};
    id_list.map((user) => {
        reportList[user] = [];
    });
    console.log(reportList);

    // 각 유저를 신고한 명단
    newReport.map((user) => {
        const [userId, reportId] = user.split(" ");
        // console.log("유저아이디", userId)
        // console.log("신고아이디", reportId)

        reportList[reportId].push(userId);
    });
    console.log(reportList);

    // reportList 객체를 순회하면서 k이상 신고받은 유저를 answer값에 더해줌
    for (const key in reportList) {
        if (reportList[key].length >= k) {
            reportList[key].map((user) => {
                answer[id_list.indexOf(user)] += 1;
            });
        }
    }
    return answer;
}
