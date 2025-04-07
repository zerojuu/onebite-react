// 5가지 요소 순회 및 탐색 메서드

/* 순회 */
// 1. forEach
// -> 배열의 모든 요소를 순회하면서 각각의 요소에 특정 동작을 수행
let arr1 = [1, 2, 3];
arr1.forEach(function (item, idx, arr) {
    console.log(idx, item * 2);
});

let dounbledArr = [];
arr1.forEach(() => {
    dounbledArr.push(item * 2);
});

/* 탐색 */
// 2. includes
// -> 배열에 특정 요소가 있는지 확인 (true, false)
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3); // true

// 3. indexOf
// -> 특정 요소의 인덱스(위치)를 찾아서 반환
let arr3 = [2, 2, 2];
let index = arr3.indexOf(2); // 앞부터 탐색하기 때문에 첫번째 2의 위치인 0을 반환 (존재하지 않으면 -1)

// 4. findIndex
// 모든 요소를 순회하면서 콜백 함수를 만족하는
// -> 특정 요소의 인덱스(위치)를 반환
let arr4 = [1, 2, 3];

const foundIndex = arr4.findIndex((item) => {
    if (item % 2 !== 0) {
        return true;
    }
});

const foundIndex2 = arr4.findIndex((item) => item % 2 !== 0); // 이런 식으로 화살표 함수를 간결하게 가능

// indexOf : 원시 타입이 아닌 객체 타입의 값이 저장된 배열에서는 위치 찾기 불가능 (얕은 비교) -> 원시
// findIndex : 콜백 함수를 이용해서 특정 프로퍼티의 값을 비교해서 객체 타입의 배열도 위치 찾기 가능 (깊은 비교) -> 원시, 객체
let objectArr = {
    name: "이정환",
    name: "홍길동 ",
};

const foundIndex3 = objectArr.findIndex((item) => item.name === "홍길동");

// 5. find
// -> 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾아서 인덱스가 아닌 요소 그대로 반환
let arr5 = {
    name: "이정환",
    name: "홍길동",
};

const found = arr5.find((item) => {
    item.name === "이정환";
});

console.log(found);
