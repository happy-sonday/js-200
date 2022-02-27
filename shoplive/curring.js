/**
 * 커링
 * 여러 개의 인자를 하나의 인자만 받는 함수로 만들어 순차적으로 체인 형태로 구성한 한것
 * 필요한 인자가 채워지고 마지막 본체를 실행하는 함수
 * 지연로딩, 원하는 시점까지 지연시켰다가 실행하는 것 lazy load file 할 때??
 */

const currying = (callbackFunc) => (name) => (simpleIntro) => (greeting) =>
  callbackFunc(name, simpleIntro, greeting);

const consoleIntro = currying(console.log);

consoleIntro("sonday")("프론트 엔드 개발자 입니다.")(
  "(커링으로 greeting)만나서 반갑습니다. 잘부탁드려요"
);

var greetCurried = function (greeting) {
  return function (name) {
    console.log(greeting + ", " + name);
  };
};

var greetHello = greetCurried("Hello");
greetHello("Heidi"); //"Hello, Heidi"
greetHello("Eddie"); //"Hello, Eddie"

greetCurried("Hi there")("Howard"); //"Hi there, Howard"

let fullName = (last) => (first) => console.log(last + first); // 커링 함수

let family = fullName("조"); // 클로저로 저장
family("다솜"); // 조다솜
family("다영"); // 조다영
family("성준"); // 조성준
