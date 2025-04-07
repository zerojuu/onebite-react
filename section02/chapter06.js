// 순회 (lteration)
// -> 배열, 객체에 저장된 여러 개의 값에 순서대로 하나씩 접근하는 것

// 1. 배열 순회
let arr = [1, 2, 3];

// 1-1. 배열 인데스
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// 1-2. for of 반복문 (배열 순회하기 위해 생긴 반복문)
for (let item of arr) {
    console.log(item);
}

/* ------------------------------------------- */

// 2. 객체 순회
let person = {
    name: "이정환",
    age: 27,
    hobby: "테니스",
};

// 2-1. object.keys
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);

for (let i = 0; i < keys.length; i++) {
    console.log(keys[i]);
}

// key값과 객체의 value값을 함께 출력 가능
for (let key of keys) {
    console.log(key, person[key]);
}

// 2-2. object.values
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);

for (let i = 0; i < values.length; i++) {
    console.log(values[i]);
}

// 2-3. for in 반복문
for (let key in person) {
    console.log(key, person[key]);
}

// for of : 배열
// for in : 객체
