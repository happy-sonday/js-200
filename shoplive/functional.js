// 성공적인 프로그래밍이란 사용성 성능 확정성 기획 변경에 대한 대응력
// 조합성을 강조-> 모듈화 수준을 높인다.

/**
 * 순수함수
 * 외부 환경의 변화없는 함수
 */

const sum = (a, b) => a + b;

// 상황에 따라 변하는 함수의 예,순수 함수가 아닌것

let outerVal = 10;

const sum2 = (a, b) => a + b + outerVal;

console.log(sum2(1, 2));
console.log(sum2(2, 2));
console.log(sum2(3, 2));
console.log(sum2(4, 2));

outerVal = 20;
console.log(sum2(1, 2));
console.log(sum2(2, 2));
console.log(sum2(3, 2));
console.log(sum2(4, 2));

// 외부변수를 함수 스코프 내에서 재할당받아서 함수호출 때마다 불변성이 지켜지지 않고 변하므로 순수함수가 아니다.
let init = 20;
const sideEffect = (a, b) => {
  init = b;
  return a + b;
};
console.log({ init });
console.log(sideEffect(10, 30));
console.log({ init });
console.log(sideEffect(20, 40));
console.log({ init });

// 따라서 순수함수는 함수가 호출되는 시점(평가시점)에 따라 변경되지 않아야 한다.
// 언제 실행해도 예상된 결과를 도출하는 것이 중요

const add_maker = (a) => (b) => a + b;
function add_makerFunction(a) {
  // closer 함수, 해당 범위내 실행컨텍스 환경을 기억하고 있는 익명함수
  return function (b) {
    return a + b;
  };
}
const add_makerClone = add_maker(10);
console.log("add_maker : ", add_makerClone(20));

const add_makerFunctionCLone = add_makerFunction(20);
console.log("add_makerFunction :", add_makerFunctionCLone(20));
