// truthy & falsy
// -> 참이나 거짓을 의미하지 않는 것도 조건문 내에서 참이나 거짓으로 평가하는 특징

// 1. falsy : 거짓 같은 값
// -> 0n, 0, -0, "", null, undefined, NaN
 let f1 = undefined;
 let f2 = null;
 let f3 = 0;
 let f4 = -0;
 let f5 = 0n;
 let f6 = NaN;
 let f7 = "";


// 2. turthy : 참 같은 값
// -> 7가지 falsy 값을 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {}; 


// 3. 활용 사례
function printName(person) {
    // 매개변수 체크
    if (!person) {
        console.log("person의 값이 없음");
        return;
    } else {
        console.log(person.name);
    }
}

/*
let person = {
    nane : "홍길동"
};*/
let person;

printName(person);