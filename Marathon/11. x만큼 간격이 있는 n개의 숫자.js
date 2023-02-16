// 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 
// 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

// 제한 조건
// x는 -10000000 이상, 10000000 이하인 정수입니다.
// n은 1000 이하인 자연수입니다.

// 입출력 예
// x	n	answer
// 2	5	[2,4,6,8,10]
// 4	3	[4,8,12]
// -4	2	[-4, -8]

function solution(x, n) {
  let answer = [];
  for(let i = 1 ; i < n+1 ; i++){
    answer[i-1] = x * i;
  }

  return answer;
}


// Array.fill
// function solution(x, n) {
// n을 자연수 크기만큼의 공간을 가진 배열로 형 변환. 공간을 모두 x 로 채우고 map 으로 순회.
// v는 요소 값, i는 인덱스
// 인덱스 + 1 * 값 반환값으로 배열이 새로 채워진다.
//   return Array(n).fill(x).map((v, i) => (i + 1) * v)
// }
