//app.js는 루트모듈러서 애플리케이션의 시작 지점이 된다.
//import 키워드를 이용하여 hello.js의 hello 메소드를 가져올 수 있게 된다.

//import { hello } from "./hello.js";
import Hello from "./hello.js";
import { add, Person, version } from "./hello.js";
// hello("ex6 module");

//모듈의 기본갑 ㅅ정의하고 가져오기
// const koreaHi = new Hello("안녕하세요");
// koreaHi.hi("happy-sonday");

//여러개의 export 객체 가져오기
// const result = add(1, 2);
const result = add(1, 2);
console.log(result);
const sonday = new Person("sonday");
console.log(sonday.name);
console.log(version);
