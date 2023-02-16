console.log(solution(["sun", "bed", "car"],1))

// strings는 길이 1 이상, 50이하인 배열입니다.
// strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
// strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
// 모든 strings의 원소의 길이는 n보다 큽니다.
// 인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.


function solution(strings, n) {
  var answer = [];

  for(let i = 0 ; i < strings.length ; i++){
    answer.push(strings[i].charAt(n)+strings[i])
  }

  answer.sort()

  for(let i = 0 ; i < strings.length ; i++){
    answer[i] = answer[i].substring(1)
  }

  return answer;
}