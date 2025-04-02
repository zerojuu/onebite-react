// 1. 콜백 함수
// 자신이 아닌 다른 함수에 인수로써 전달된 함수

function main (value) {
    //console.log(value);
    value();
}

function sub () {
    console.log("I am sub");
}

main(sub);  // 자바스크립트에서는 함수도 객체이기 때문에 인수로 전달 가능

// 콜백함수를 따로 선언하지 않고 선언문 자체를 안에 넣어서 표현식처럼 사용 가능
main(function sub () {
    console.log("I am sub");
});

// 익명 함수로도 사용 가능
main(function () {
    console.log("I am sub");
});

// 화살표 함수로도 사용 가능
main(() => {
    console.log("I am sub");
});


// 2. 콜백 함수의 활용
/*
function repeat (count) {
    for (let idx = 1; idx <= count; idx++) {
        console.log(idx);
    }
}

function repeatDouble (count) {
    for (let idx = 1; idx <= count; idx++) {
        console.log(idx * 2);
    }
}

repeat(5);
repeatDouble(5);
*/
 
// 구조가 흡사한 함수가 여러 개 있을 때
function repeat (count, callback) {
    for (let idx = 1; idx <= count; idx++) {
        callback(idx);
    }
}

//repeat(5, function (idx) {
repeat(5, (idx) => {
    console.log(idx);
});

// repeatDouble을 repeat로 대체
//repeat(5, function (idx) {
repeat(5, (idx) => {
    console.log(idx * 2);
});