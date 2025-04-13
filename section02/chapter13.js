// Promise

// 3가지 상태
// 대기 (Pending)
// 성공 (Filfilled) -> 대기에서 성공되는 걸 해결(resolve)
// 실패 (Rejected) -> 대기에서 실패되는 걸 거절(reject)

//
// 생성자로 생성(new)하는데 생성자의 인수는 비동기 작업을 진행할 콜백함수 전달
// promise 객체가 executor의 비동기 함수를 성공적으로 완료하기 위해 -> excutor 함수에는 resolve, reject 두 개의 매개변수 필요
// resolve : 성공 상태로 바꾸는 함수
// reject : 실패 상태로 바꾸는 함수
const promise = new Promise((resolve, reject) => {
    // 비동기 작업을 실행하는 함수 = executor
    setTimeout(() => {
        const num = 10;

        if (typeof num === "number") {
            resolve(num + 10); // 성공(fulFilled)으로 변경, 결과값 전달하려면 인수 넣기
        } else {
            reject("num이 숫자가 아닙니다"); // 실패(rejected)로 변경, 결과값 전달하려면 인수 넣기
        }
    }, 2000);
});

// then 메서드
// -> promise함수의 executor에서 resolve()를 호출하게 되면 그 후에 resolve의 인수로 전달한 결과값을 매개변수로 갖고 콜백함수를 실행함
promise
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    });
// 이렇게 then과 catch를 연달아서 사용하는 걸 Promise Chaining이라고 표현

// catch 메서드
// -> reject() 호출시, then 메서드의 실패(rejected) 버전
// then 메서드는 promise 객체를 그대로 다시 반환하는데 catch의 promise 객체와 동일하기 때문에 then 메서드 뒤에 연결해서 catch 메서드 사용 가능
//promise.catch((error) => {
//    console.log(error);
//});

// then 메서드 사용하기 위해 주석 처리
//setTimeout(() => {
//    console.log(promise);
//}, 3000);
