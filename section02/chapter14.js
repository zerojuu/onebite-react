/* async */
// -> 어떤 함수를 비동기 함수로 만들어주는 키워드
// -> 함수가 promise를 반환하도록 변환해주는 그런 키워드

async function getDate() {
    return {
        name: "이정환",
        id: "winterlood", // 객체를 그대로 반환하는 함수가 아닌 이 객체를 결과값으로 받는 새로운 promise를 반환
    };
}

console.log(getDate());

// 애초에 promise를 반환하는 비동기 함수라면 기존과 동일하게 객체 그대로 반환
async function getData2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: "이정환2",
                id: "winterlood",
            });
        }, 1500);
    });
}

/* await */
// -> async 함수 내부에서만 사용 가능한 메서드
// -> 비동기 함수가 다 처리되기를 기다리는 역할
async function printData() {
    // 기존 로직 : then 메서드
    /*getDate2().then((result) => {
        console.log(result);
    });*/

    const data = await getData2();
    console.log(data);
}

printData();
