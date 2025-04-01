// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;
let num6 = 3 ** 2; // 3의 2제곱

// 3. 복합(산술+대입) 대입 연산자
let num7 = 10;
num7 += 20; // num7 = num7 + 20

// 4. 증감 연산자
let num8 = 10;
num8++; // 후위 연산 : num8 10으로 사용후 1 증가
++num8; // 전위 연산 : num8 1 증가 후 사용

// 5. 논리 연산자
let or = true || false;
let and = true && false;
let not = !true;

// 6. 비교 연산자
let comp1 = 1 === 2;
let comp2 = 1 !== 2;

// === : 값과 자료형 모두 비교 (권장)
// ==  : 값의 자료형은 비교X, 값만 비교
let comp3 = 1 == "1"; // true
let comp4 = 1 === "1"; // false

// 대소 비교
let comp5 = 1 < 2;


