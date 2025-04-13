// chapter13
// 비동기 작업을 고정된 값 말고 함수를 통해 동적으로 매개변수를 받아서 사용할 수 있게 개선

function add10(num) {
    const promise = new Promise((resolve, reject) => {
        // 비동기 작업을 실행하는 함수 = executor
        setTimeout(() => {
            if (typeof num === "number") {
                resolve(num + 10); // 성공(fulFilled)으로 변경, 결과값 전달하려면 인수 넣기
            } else {
                reject("num이 숫자가 아닙니다"); // 실패(rejected)로 변경, 결과값 전달하려면 인수 넣기
            }
        }, 2000);
    });
    return promise;
}

// chapter13의 하단은 콜백지옥됨 -> then 메서드 안에서 return으로 새로운 promise 객체를 반환
add10(5)
    .then((result) => {
        console.log(result);
        const newP = add10(result);
        return newP; // 새로운 promise 객체를 반환하면 then 메서드의 결과값이 됨
    })
    .then((result) => {
        console.log(result); // newP에 저장된 promise의 then 메서드가 여기에서 실행됨
        return add10(undefined); // 이때 undefined라서 catch문으로 이동
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
