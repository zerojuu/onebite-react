// 6가지의 요소 조작 메서드

// 1. push
// -> 배열의 마지막에 새로운 요소를 추가
let arr = [1, 2, 3];
const newLength = arr.push(4, 5, 6); // 콤마로 여러 개 추가 가능

console.log(arr);
console.log(newLength); // 추가된 요소의 개수를 반환

// 2. pop
// -> 배열의 마지막 요소를 제거하고 그 요소를 반환
let arr2 = [1, 2, 3];
const poppedItem = arr.pop();

console.log(poppedItem);
console.log(arr2); // [1, 2]

// shift, unshift 는 push, pop보다 느림
// 순차적인 배열의 인덱스를 하나씩 뒤로 밀거나 앞으로 당겨야 하기 때문 -> push, pop 사용 권장

// 3. shift
// -> 배열의 첫 번째 요소를 제거하고 그 요소를 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();

console.log(shiftedItem);
console.log(arr3); // [2, 3]

// 4. unshift
// -> 배열의 첫 번째에 새로운 요소를 추가하고 새로운 길이를 반환
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);

console.log(arr4, newLength2);

// 5. slice
// -> 배열의 일부를 잘라내어 새로운 배열로 반환 (원본 배열은 변경 X)
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 4); // 시작 인덱스, 끝 인덱스 + 1
let sliced2 = arr5.slice(2); // 시작 인덱스부터 끝까지
let sliced3 = arr5.slice(-1); // 끝에서부터 인덱스 -1

console.log(sliced);

// 6. concat
// -> 두 개 이상의 배열을 합쳐서 새로운 배열로 반환 (원본 배열은 변경 X)
let arr6 = [1, 2];
let arr7 = [3, 4, 5];
let concatedArr = arr6.concat(arr7); // arr6 + arr7

console.log(concatedArr); // [1, 2, 3, 4, 5]
