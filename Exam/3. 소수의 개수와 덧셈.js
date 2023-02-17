// ### **문제 설명**

// 문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. str에 나타나는 숫자 중 소수의 최대값과 소수가 
// 아닌 수의 최소값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.

// 예를들어 s가 "2 3 4 5"라면 "4 5"를 리턴하고, "15 3 10 9 7 8"라면 "8 7"을 리턴하면 됩니다.

// ---

// ### 제한사항

// - s에는 둘 이상의 정수가 공백으로 구분되어 있습니다.
// - 문자열에는 소수가 한개 이상 섞여 있습니다.
// - 문자열에는 소수가 아닌 수가 한개 이상 섞여 있습니다.
// - 음수는 없습니다.

// 입출력 예
// s                result
// "2 3 4 5"        "4 5"
// "15 3 10 9 7 8"  "8 7"

// 지정 입력값
// s                        result
// "97 75 88 99 95 92 73"   "75 97"

// (소수의 최대값) (소수가 아닌 수의 최소값)

function solution(s){
	let answer="";
  let item = s.split(" ")
  let max = [];
  let min = [];

  item.forEach(elem => {
    if(primeChk(elem)){
      max.push(Number(elem))
    }else{
      min.push(Number(elem))
    }
  });
  answer = Math.min(...min)+" "+Math.max(...max)
	return answer;
}

function primeChk(num){
  for(let i = 2 ; i <= num ** 0.5 ; i++){
    if(num % i == 0){
      return false;
    }
  }
  return true;
}

let s="97 75 88 99 95 92 73";

console.log(solution(s))