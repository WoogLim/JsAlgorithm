// '?'나 '||'를 사용하여 함수 다시 작성하기

// checkAge(18)

// function checkAge(age){
//   return (age>18) || true;
// }

// 객체가 비어있는지 확인
// let schedule = {};

// console.log( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// console.log( isEmpty(schedule) ); // false

// function isEmpty(obj){
//   for(let key in obj){
//     // 순회할 객체가 존재
//     return false;
//   }
//   return true;
// }

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// console.log(sum(salaries))

// function sum(obj){
//   let sum = 0

//   for(args in obj) sum += (obj[args] || 0)

//   return sum;
// }

// 프로퍼티 값 두 배로 불리기

// 함수 호출 전
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// function multiplyNumeric(obj){
//   // obj 는 인자로 넘어로온 객체를 참조
//   for(let key in obj){
//     if(typeof(obj[key]) === 'number'){
//       obj[key] = obj[key] * 2;
//     }else{
//       continue;
//     }
//   }
// }

// console.log(menu)

// 함수 호출 후
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };

// let user = {
//   name: "John",
//   age: 30
// };

// let clone = {...user}

// let calculator = {
//   sum() {
//     return this.a + this.b
//   },
//   mul() {
//     return this.a * this.b
//   },
//   read() {
//     this.a = Math.floor(Math.random() * 100)
//     this.b = Math.floor(Math.random() * 100)
//   }
// };

// calculator.read()
// console.log( calculator.sum() );
// console.log( calculator.mul() );

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     // 객체 자신을 리턴하면 뒤에 . 으로 접근이 가능하다.
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function() { // 사다리에서 몇 번째 단에 올라와 있는지 보여줌
//     console.log( this.step );
//     return this;
//   }
// };

// ladder.up().up().down().showStep();

// let obj = {}

// function A() { 
//   return obj
// }

// function B() { 
//   return obj
// }

// let a = new A;
// let b = new B;

// console.log( a == b ); // true

// function Calculator(){
//   this.read = function() {
//     this.a = Math.floor(Math.random() * 100)
//     this.b = Math.floor(Math.random() * 100)
//   };

//   this.sum = function() {
//     return this.a + this.b;
//   };

//   this.mul = function() {
//     return this.a * this.b;
//   };
// }
// let calculator = new Calculator();
// console.log(typeof(calculator))
// calculator.read();

// console.log( "Sum=" + calculator.sum() );
// console.log( "Mul=" + calculator.mul() );

function Accumulator(startingValue){
  this.value = startingValue;
  this.read = value => {
    console.log(value)
    this.value +=  value;
  }
}

let accumulator = new Accumulator(1); // 최초값: 1

accumulator.read(Math.floor(Math.random() * 100)); // 임의의 값을 더해줌
accumulator.read(Math.floor(Math.random() * 100)); // 임의의 값을 더해줌

console.log(accumulator.value); // 최초값과 모든 임의값을 더해 출력함