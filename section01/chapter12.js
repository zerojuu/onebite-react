// 1. 함수 표현식
// 함수 표현식으로 만든 것은 호이스팅 대상 X

// 함수 선언
function funcA () {
    console.log("funcA");
}

let varA = funcA(); // 자바스크립트에서는 함수도 숫자나 문자열 같이 하나의 값으로 보기에 변수에 담을 수 있음

console.log(varA); // 함수 자체 콘손에 출력됨

varA();

// 자바스크립트에서는 함수를 굳이 선언하지 않고 변수에 담듯이 함수를 선언할 수 있음
// 즉 varA는 함수 선언이 된 거고 varB는 값으로서 함수가 생성된 것 -> funcB() 호출 불가능
//let varB = function funcB () {
// funcB() 로 호출 불가능하기에 함수명 생략 가능 : 익명함수
let varB = function () {
    console.log("funcB");
}

varB();


// 2. 화살표 함수
// 화살표 함수는 function 키워드 대신 => 사용
let varC = () => {
    return 1;
}

// 만약에 간단하게 값을 반환하는 정도면 {}, return 생략 가능
let varC2 = (value) => value + 1;

console.log(varC());