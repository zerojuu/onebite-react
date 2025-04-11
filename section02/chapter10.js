// 1. Date 겍체를 생성하는 방법
let date1 = new Date(); // Date 같이 new로 객체 생성하는 내장 함수 = 셍성자
console.log(date1);

// 특정 날짜, 시간을 기준으로 생성하고 싶으면
let date2 = new Date("1997-01-07"); // "1997-01-07" "1997/01/07" "1997.01.07"
let date3 = new Date("1997/01/07/10:20:30");
date3 = new Date(1996, 5, 2, 23, 59, 57);
console.log(date2, date3);

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"(UTC 세계협정시간 기준)로부터 몇 ms가 지났는지를 의미하는 숫자값
// 복잡한 시간 정보를 간단한 숫자로 편리하게 관리
let ts1 = date1.getTime();
console.log(ts1);

// 새로운 date 객체를 생성할 때도 사용
let date4 = new Date(ts1); // 타임스탬프에 해당하는 시간으로 생성됨 -> date4, date1은 동일한 시간
console.log(date1, date4);

// 3. 시간 요소를 추출하는 방법
// 자바스크립트에서 월은 다름 - 0 : 1월, 1 : 2월, 2 : 3월 (배열 인덱스처럼 생각하면 됨)
let year = date1.getFullYear();
let month = date1.getMonth() + 1;
let date = date1.getDate();
let hour = date1.getHours();
let minute = date1.getMinutes();
let secound = date1.getSeconds();
console.log(year, month, date, hour, minute, secound);

// 4. 시간 수정
date1.setFullYear(2023);
date1.setMonth(2); // 자바스크립트의 월은 0부터 시작이니까 2 전달시 3월로 수정됨
date1.setDate(10);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(30);
console.log(date1);

// 5. 시간을 여러 포맷으로 출력
console.log(date1.toDateString()); // 현재 날짜만 -> Fri Mar 10 2023
console.log(date1.toLocaleString()); // 현지화된 포맷 -> 2023. 3. 10. 오후 11:59:30
console.log();
console.log();
console.log();
