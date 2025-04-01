// 1. null 병합 연산자 : ??
// -> 존재하는 값을 추려내는 기능
// -> null, undefined 가 아닌 값을 찾아내는 연산자
let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;    // var1은 null이기 때문에 var2 값인 10을 반환
let var5 = var2 ?? var3;    // var2, var3 둘 다 null, undefined가 아니기 때문에 앞에 있는 var2 반환

// 2. typeof 연산자
// -> 값의 타입을 문자열로 반환하는 기능
let var6 = 1;
var6 = "hello"; // 자바스크립트는 변수를 숫자로 초기화해도 문자로 변경 가능 -> 변수의 타입이 정해지지 않고 동적으로 변경됨

let t1 = typeof var6;

// 3. 삼항 연산자
// -> 항을 3개 사용하는 연산자
// -> 조건싯을 이용해서 참, 거짓일 때의 값을 다르게 반환
let var7 = 10;

// 요구사항 : 변구 res에 var7의 값이 짝수이면 "짝", 홀수이면 "홀"이라는 문자열을 저장
let res = var7 % 2 === 0 ? "짝" : "홀";