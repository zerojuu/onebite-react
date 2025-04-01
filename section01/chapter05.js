// 원시 타입

// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;  

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2); // 모듈로 연산 (나머지 구하는 연산)

let inf = Infinity; // 무한대
let minf = -Infinity; // 음의 무한대
let nan = NaN; // Not a Number

console.log(1 * "Hello");   // 연산 불가능한 경우 NaN 표시


// 2. String Type
let myName = "이정환";
let myLocation = "목동";

// 템플릿 리터럴 문법
let introduce = myName + myLocation; // 문자열 결합
let introduceText = `${myName}은 ${myLocation}에 거주합니다.`; // 백틱을 사용하여 동적으로 문자열을 넣을 수 있음 (""과 같은 역할)

console.log(introduceText);

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type (아무것도 없다)
let empty = null;

// 5. Undefined Type (정의되지 않음)
let none;   // undefined는 변수가 선언되었지만 값이 할당되지 않은 상태를 의미

// undefined와 null의 차이
// undefined는 변수가 선언되었지만 값이 할당되지 않은 상태를 의미
// null은 명시적으로(의도적으로) 변수가 비어있음을 나타내는 값