// 1. Spread 연산자
// -> 객체나 배열에 저장된 여러 개의 값을 개별로 흩뿌려주는 역할
// -> ...을 붙이면 배열이나 객체를 펼쳐서 개별 요소로 만들어줌

let arr = [1, 2, 3];

// 기존 방식 (인덱스 나열) : 중간에 값이 변경될 경우 문제 발생
let arr2 = [4, arr[0], arr[1], arr[2], 5, 6];

// spread
let arr3 = [4, ...arr, 5, 6];

// 객체에도 가능
let obj = {
    a : 1,
    b : 2
}

let obj2 = {
    ...obj,
    c : 3,
    d : 4
}

// 함수
function funcA (p1, p2, p3) {
    console.log(p1, p2, p3);
}

funcA(...arr); // 매개변수 : arr의 요소를 개별 인자로 전달


// 2. Rest 매개변수
// -> 매개변수에 ...을 붙이면 나머지 매개변수로 사용 가능
// 매개변수를 의미하는 소괄호 안에 ... 사용시 rest 매개변수로 사용됨 -> spread 개념 아님

function funcB (...rest) {  // 한방에 모든 매개변수를 배열 형태로 받아옴
    console.log(rest);
}

// rest 매개변수는 항상 마지막에 위치해야 함
function funcC (one, two, ...args) {    // 앞에 ...만 붙이면 되서 이름은 상관 없음
}

funcB(...arr);