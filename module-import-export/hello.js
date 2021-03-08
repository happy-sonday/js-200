//\export 키워들 이용하여 외부에서 가져올 수 있게 내보냄
// export function hello(name) {
//   console.log(`hello ${name}`);
// }

//모듈의 기본갑 정의하고 가져오기
//해당 모듈의 기본값을 선언하는 것이기 때문에 여러개의 default값을 정의하면 duplicate error 발생
//export default "hello";
// export default function hello(name) {
//   console.log("hello" + name);
// }

export default class Hello {
  constructor(greeting) {
    this.greeting = greeting;
  }

  hi(name) {
    console.log(`${this.greeting} ${name}`);
  }
}

//여러 이름으로 보내고 가져오기
//default만 쓰지 않으면 변수 함수 클래스등 내부로 보낼 수 있다.

const version = "v.2.01";
function add(a, b) {
  return a + b;
}
class Person {
  constructor(name) {
    this.name = name;
  }
}

//export Person; //export뒤에 바로 객체명이 올수 없다 Uncaught SyntaxError 발생
export { version, add, Person };
