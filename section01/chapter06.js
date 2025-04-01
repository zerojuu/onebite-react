 // 1. 묵시적 형변환
 // -> 자바스크립트 엔진이 앙라서 형 변환 하는 것
 let num = 10;
 let str = "20";

 const result = num + str;  // 숫자 + 문자열 경우 숫자를 문자열로 묵시적으로 형 변환후 결합 

 console.log(result);

 // 2. 명시적 형 변환
 // -> 개발자가 내장함수 등을 이용해서 직접 형 변환 하는 것

 // Number() : 문자열 -> 숫자
 let str1 = "10";
 let strToNum1 = Number(str1);

 console.log(10 + strToNum1);

 // parseInt() : 숫자+문자 인 문자열 -> 숫자
 let str2 = "10개";
 let strToNum2 = parseInt(str2);

 console.log(strToNum2);

 // string() : 숫자 -> 문자열
 let num1 = 20;
 let numToStr1 = String(num1);

 console.log(numToStr1+" 입니다.");