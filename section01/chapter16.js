// 1. 상수 객체
const animal = {
    type : "고양이",
    name : "나비",
    color : "black"
};

// 상수인 animal에 또 다른 객체를 생성하여 할당하는 건 불가능
/*animal = {
    a : 1
};*/

// 하지만, animal의 속성값은 변경할 수 있다.
animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color;    // 삭제


// 2. 메서드
// -> 객체 프로퍼티 중 값이 함수인 프로퍼티
const person = {
    name : "이정환",
    // 메서드
    //sayHi : function() {
    //sayHi : () => {   // 화살표 함수
    sayHi() {           // 메서드 선언
        console.log("안녕하세요");
    }
}

person.sayHi(); // 메서드는 함수이기에 호출 가능
person["sayHi"]();
