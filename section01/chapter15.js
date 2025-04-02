// 객체 (object)
// 원시 타입이 아닌 객체 타입의 자료형
// 여러 가지 값을 동시에 저장할 수 있는 자료형을 의미
// array, function, regexExp

// 1. 객체 생성
// 1-1. 객체 생성자 - 내장 함수 사용
let obj1 = new Object();

// 1-2. 객체 리터럴 - 중괄호 사용 (대부분 사용)
let obj2 = {};


// 2. 객체 프로퍼티(속성)
// key : value 형태로 이루어짐
// key는 문자열 또는 숫자, value는 모든 자료형 가능
let person = {
    name : "이정환",
    age : 27,
    hobby : "테니스",
    job : "FE Developer",
    10 : 20,
    "like cat" : true,
    extra : function () {
        console.log("I am extra function");
    }
};


// 3. 객체 프로퍼티를 다루는 방법
// 3-1. 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name; // 점 표기법
let age = person["age"]; // 괄호 표기법 (쌍따음표 안 하면 변수로 인식해서 에러 발생)

// 3-2. 프로퍼티를 추가하는 방법 (점 표기법, 괄호 표기법)
person.city = "seoul"; // 점 표기법
person["favoriteFood"] = "떡볶이"; // 괄호 표기법

// 3-3. 프로퍼티를 수정하는 방법 (점 표기법, 괄호 표기법)
person.job = "educator"; // 점 표기법
person["favoriteFood"] = "chocolate"; // 괄호 표기법

// 3-4. 프로퍼티를 삭제하는 방법 : delete 연산자 (점 표기법, 괄호 표기법)
delete person.job; // 점 표기법
delete person["favoriteFood"]; // 괄호 표기법

// 3-5. 프로퍼티의 존재유무 확인하는 방법 : in 연산자
// 프로퍼티명 in 객체명
let result1 = "name" in person;
