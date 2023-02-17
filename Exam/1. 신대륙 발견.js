// 기원이는 오늘 항해99를 시작했다. 성격이 급한 기원이는 항해 1일 차부터 언제 수료를 하게될 지 궁금하다.
// 항해 1일 차 날짜를 입력하면 98일 이후 항해를 수료하게 되는 날짜를 계산해주는 알고리즘을 만들어보자.

// ### 제한 조건

// - 1 ≤ month ≤ 12
// - 1 ≤ day ≤ 31 (2월은 28일로 고정합니다, 즉 윤일은 고려하지 않습니다.)

// 입출력 예
// month day result
// 11    27  "3월 5일"
// 6     22  "9월 28일"

// 지정 입력값
// month day result
// 1     18  "4월 26일"

console.log(solution(2, 6))

function solution(month, day){
	let result="";

  let thisDay = new Date();
  thisDay.setMonth(month-1);
  thisDay.setDate(day+98);

  result = (thisDay.getMonth()+1) + "월 " + (thisDay.getFullYear() % 4 == 0 ? thisDay.getDate()+1 : thisDay.getDate()) + "일"

  return result;
}