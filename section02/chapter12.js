function add(a, b, callback) {
    setTimeout(() => {
        const sum = a + b;
        callback(sum); // 콜백함수에 값 전달
    }, 3000);
}

add(1, 2, (value) => {
    console.log(value);
}); // add함수 안에 있는 sum 변수를 밖에서 사용하기 위해 인수로 콜백함수 추가

//
// 음식을 주문
function orderFood(callback) {
    setTimeout(() => {
        const food = "떡볶이";
        callback(food);
    }, 3000);
}

// 음식 식히기
function cooldownFood(food, callback) {
    setTimeout(() => {
        const cooldownedFood = `식은 ${food}`;
        callback(cooldownedFood);
    }, 2000);
}

// 음식 냉동
function freezeFood(food, callback) {
    setTimeout(() => {
        const frozenFood = `냉동된 ${food}`;
        callback(frozenFood);
    }, 15000);
}

orderFood((food) => {
    console.log(food);

    cooldownFood(food, (cooldownedFood) => {
        console.log(cooldownedFood);

        freezeFood(cooldownedFood, (frozenFood) => {
            console.log(frozenFood);
        });
    });
});
// 인덴트(들여쓰기) 깊어지면 가독성 떨어짐.. 콜백 지옥
