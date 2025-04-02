// 1. 함수 선언
function greeting () {
    console.log("안녕하세요!");
}

// 함수 호출
greeting();


// 2. 함수 선언
function getArea () {
    let width = 10;
    let height = 20;
    let area = width * height;
    
    console(area);
}

// 함수 호출
getArea();

// 3. 동적으로 함수 호출 (인수, 매개변수 사용)
function getArea (width, height) {  // 매개변수
    // 중첩 함수
    function another () {
        console.log("another");
    } 
    
    another();

    let area = width * height;
    
    //console(area);
    return area;  // 반환값
}

// 함수 호출
getArea(30, 20);    // 인수
let area1 = getArea(20, 20);    // return 받은 반환값을 area1에 저장


// 호이스팅
// 자바스크립트에서는 함수 호출을 먼저 하고 함수 선언을 뒤에 해도 내부적으로 알아서 끌어올려서 동작됨