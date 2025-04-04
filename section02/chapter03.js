// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

// 기존 방식
let one1 = arr[0];
let two2 = arr[1];
let three3 = arr[2];

// 구조 분해 할당 : 배열은 대괄호 사용
let [one, two, three] = arr;
let [oneArr, twoArr] = arr;
let [oneArr2, twoArr2, threeArr2, fourArr2] = arr;  // fourArr2는 배열에 값이 없기에 undefined
let [oneArr3, twoArr3, threeArr3, fourArr3 = 4] = arr; // fourArr3는 기본값을 설정해주었기에 4로 초기화


// 2. 객체의 구조 분해 할당
let person = {
    name : "이정환",
    age : 27,
    hobby : "tennis"
}

// 기존 방식
let name2 = person.name;
let age2 = person.age;
let hobby2 = person.hobby;

// 구조 분해 할당 : 객체는 중괄호 사용
let {name1, age1, hobby1} = person;

// 객체 구조 분해 할당은 할당받는 변수의 이름 변경 가능
let {name: myName, age, hobby} = person;


 // 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
 const func = ({name, age, hobby, extra}) => {
     console.log(name, age, hobby, extra);
 };

 func(person);