// 1. 단락 평가 (Short-Circuit Evaluation)

function returnFalse() {
    return false;
}

function returnTrue() {
    return true;
}

console.log(returnFalse() && returnTrue()); // reuturnFalse가 false이기에 && 뒤는 접근 X
console.log(returnTrue() && returnFalse()); // returnTrue가 true이기에 && 뒤는 접근 O
console.log(returnFalse() || returnTrue()); // returnFalse가 false이기에 || 뒤에 접근 O
console.log(returnTrue() || returnFalse()); // returnTrue가 true이기에 || 뒤는 접근 X


// 2. 단락 평가 활용 사례
function printName(person) {
    //console.log(person && person.name); // person이 falsy한 값일 경우 undefined를 반환

    const name = person && person.name;
    console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "Lee" });

// T1, T2 둘 다 truthy한 경우
// T1 || T2 : T1의 값을 반환
// T1 && T2 : T2의 값을 반환