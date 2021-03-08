import Hello from "../module-import-export/hello.js";
import * as add from "./app.js"; //*는 모듈 전체를 가져옴 as를 키워드를 이용해 add 로 사용
import "./sideeffect.js"; //해당 자바스크립트를 실행한다. 따라서 hello가 출력되고, 전역에 자바 메소드가 선언되어 바로 호출가능

console.log(add.version); //app.js에 export한 const version 값 출력
const added = add.default(1, 2);
console.log(added);

//from 없이 import한 sideeffect.js는 자바스크립트로써 기능 전역으로 선언된 hello 메소드
hello("sonday");
