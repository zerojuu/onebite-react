// 5가지 배열 변형 메서드

// 1. filter
// -> 콜백 함수 이용, 기존 배열에서 조건을 만족하는 요소들만 필터링 하여 새로운 배열로 반환
let arr1 = [
    { name: "이정환", hobby: "테니스" },
    { name: "김효빈", hobby: "테니스" },
    { name: "홍길동", hobby: "독서" },
];

const tennisPeople = arr1.filter((item) => item.hobby === "테니스");
console.log(tennisPeople);

// 2. map
// -> 배열의 모든 요소를 순회하면서 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult = arr2.map((item, idx, arr) => {
    console.log(idx, item);
    return item * 2; // 반환값을 설정할 수 있음
});

console.log(mapResult);

// map 활용
let names = arr1.map((item) => item.name);

// 3. sort
// -> 원본 배열을 사전순으로 정렬
let arr3 = ["b", "a", "c"];
console.log(arr3.sort());

// -> 배열이 문자열이 아닌 숫자로 이뤄질 경우 동작X : 비교 기준을 설정하는 콜백함수를 넘겨줘야 함
// [a b c] sort 오름차순 : 양수 반환시 'b a' 배치, 음수 반환시 'a b' 배치
// [a b c] sort 내림차순 : 양수 반환시 'a b' 배치, 음수 반환시 'b a' 배치
let arr4 = [10, 3, 5];
arr4.sort((a, b) => {
    // 오름차순 정렬
    if (a > b) {
        // b가 a 앞에 위치 -> 양수 반환
        return 1;
    } else if (a < b) {
        // a가 b 앞에 위치 -> 음수 반환
        return -1;
    } else {
        // 두 값이 동일 : 위치 유지 -> 0 반환
        return 0;
    }
});

// 4. toSorted
// -> sort와 동일하나 원본 배열은 유지하고 정렬된 새로운 배열 반환
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

console.log(arr5, sorted);

// 5. join
// -> 배열의 모든 요소를 하나의 문자열로 합쳐서 반환
let arr6 = ["hi", "Im", "winterlood"];
const joined = arr6.join();
const joined2 = arr6.join("-"); // 문자열로 반환시 구분자(seperator)로 콤마가 들어가는데 변경 가능
console.log(joined, joined2);
