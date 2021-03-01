console.log(`Object`);
/*초급27 배열 이해 */
//대괄호[]로 묶으며  요소들은 쉽표, 로 구분한다
//인덱스는 0부터 시작하며 자료형이 고정되지 않으며 length로 확인할 수 있다.

var arr = [1, 100, 323, 5533];
console.log(arr.length); //4
console.log(arr[2]);

/*초급28 객체 이해 */
//키와 값으로 이루어진 한쌍을 properties 속성이라 하며, 이 속성들의 집합을 중괄호로{}로 묶어서 표현한다.
//키의 값으로 원시자료형 뿐만아니라 또 다른 객체, 함수 등 다양한 객체들을 가질 수 있다.

// var family = {
//   address: "Seoul",
//   members: {},
//   addFamily: function (age, name, role) {
//     //role을 key로 또 다른 객체의 key-value를 age와 name으로 지정
//     this.members[role] = {
//       age: age,
//       name: name,
//     };
//   },
//   getHeadCount: function () {
//     return Object.keys(this.members).length;
//   },
// };

/*초급30 향상된 객체 문법ES6  */
//변수가 미리준비되어있으면, 중괄호 내에 필요한 변수만 선언하여 객체를 생성할 수 있다.
var address = "Seoul";
var members = {};
var addFamily = function (age, name, role) {
  this.members[role] = { age, name };
};
var getHeadCount = function () {
  return Object.keys(this.members).length;
};

var family = { address, members, addFamily, getHeadCount };

family.addFamily(30, "chloe", "aunt");
family.addFamily(7, "lyn", "niece");
family.addFamily(10, "dangdangi", "dog");
console.log(family.members);

//members키에 this로 접근
//keys 통해 members 내부에 각 key(aunt, niece, dog)를 배열로 반환되어 length로 총 객체의 갯수를 확인함
console.log(family.getHeadCount());

/*초급29 객체 이해 접근/추가/수정 */
//함수표현식으로 작성
var printMembers = function () {
  var members = family.members;

  //family의 속성 중 members에 접근하여 반복문의 members로 받아 객체를 순회
  for (role in members) {
    console.log(
      `role => ${role}, name => ${members[role].name}, age => ${members[role].age}`
    );
  }
};

printMembers();

//새로운 속성 추가
console.log("추가 수정 삭제 예시");
family.members["nephew"] = { age: 3, name: "hyun" };
family.members.niece = { age: 5, name: "lyn-update" }; //만약 오타를 내면 없는 key값으로 간주하여 해당 key값으로하는 새로운 객체를 만들어냄
delete family.members.aunt;
delete family.members["dog"];
printMembers();

/*초급31 속성 계산명 */
//변수로 연산된 결과값을 대괄호를 통해 property의 key로 생성할 수 있으며, 연산 결과로 생성된 결과값 또한 key로 생성가능하다.
var obj = {};
for (var i = 0; i < 4; i++) {
  obj[`key${i}`] = i; //obj 객체에 각 'key' + i++ : {i++} 프로퍼티 생성
}

console.log(obj);
var userid = "happy-sonday";

var person = {
  [userid]: true,
  [userid.split("-")[0]]: userid.split("-")[1],
};

console.log(person);

/*초급32 비구조화 할당 */
//키명을 숫자를 넣으면 안됨..객체의 key는 오직 문자형과 심볼형만 허용
var netflix = {
  a: "퀸스 갬빗",
  b: "기묘한이야기",
  c: "스위트홈",
  d: "에밀리 파리에 가다",
};

var { a, b } = netflix;
console.log(`a >>>> ${a}`);

var { a: newA = "공작", b: newB = "빈센조" } = obj;
console.log(`newA >>>> ${newA}`);
console.log(`newB >>>> ${newB}`);

//배열 비구조화 할당
var arr = ["퀸스 갬빗", "기묘한이야기", "스위트홈", "에밀리 파리에 가다"];
//...은 rest(나머지) 변수로 배열의 나머지 요소들을 한꺼번에 배열로 묶어 반환
var [rank1, rank2, ...others] = arr;
console.log(rank1);

console.log(others);

function getArr() {
  return ["승리호", "겨우,서른", "진격의거인", "브리저튼", "귀멸의 칼날"];
}

[getA, , , , getD] = getArr();
console.log(getA);
//console.log(getB); //not defined로 eror 발생
console.log(getD);

/*초급33 심볼형 이해하기 */
//유일성이 보장되는 자료형으로 유일한 식별자를 만들고 싶을 때 사용
//같은 심볼을 만들어도 동등연산비교시 false가 반환된다
//의도치않게 사용되거나 덮어씌워 지는 것을 방지하기 위함
const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 == id2);

const nationility = Symbol("nationility");

const user = {
  name: "happy-sonday",
};

user[nationility] = "korean";
console.log(user);
console.log(user.name); //
console.log(user.nationility); //undefined 발생
console.log(user[nationility]);

/*초급34 함수 이해하기 */
//함수 선언문(function declations) 와 함수 표현식(function expression, 변수에 할당한다고 하여 리터럴 방식이라고 한다.)
//함수의 이름을 선언하지않고 사용가능하며 이것을 익명함수, 반대로 이름을 넣어 재사용하기 위해 함수명을 붙이는 경우 기명함수라 한다.

var literal = function greeting_expression(name) {
  console.log(`안녕하세요,${name} `);
};

var literalAnony = function (name) {
  console.log(`안녕하세요,${name} `);
};

function greeting_declation(name) {
  console.log(`선언문 방식으로 접근하셨네요!! 안녕하세요,${name} `);
}

literal("happy-sonday");
//greeting_expression("happy-sonday"); //not defined error 발생 리터럴방식은 외부에서 작접적으로 호출이 불가능
//실상 리터럴 방식으로 장석될 경우 익명 함수로 작성
literalAnony("happy-sonday");
greeting_declation("happy-sonday");

/*초급35 예외 처리하기 */
//throw 는 개발자가 예상한 결과에따라 예외를 발생시키고 다음 코드가 실행되지 않도록 막는다.
function checkNumber(val) {
  if (typeof val !== "number") {
    throw "유효하지 않은 값입니다.";
  }

  console.log("숫자형 값으로 확인되었습니다");
}
checkNumber(100);
//checkNumber("300");

//throw 프로그램이 중단되는 것을 막을 수 없기때문에 try-catch-finally문을 사용하여 예상치못한 에러까지 중단없이 실행

function checkString(str) {
  if (typeof str !== "string") throw "유효하지 않는 문자열입니다.";
  console.log("문자열입니다");
}

//try에서 발생된 에러정보는 catch문에서 해당 예외정보를 인자로 받아 처리
//finally는 에러 발생여부 상관없이 실행하며 보통 파일의 읽기/쓰기 후 메모리 자원이 낭비되지 않도록 close()를 호출하기도 한다.
try {
  checkString(100);
  checkString("100");
} catch (e) {
  console.log(`에러가 발생했습니다 >>> 정보 : ${e}`);
} finally {
  console.log("무조건 실행");
}

/*초급36 arguments 객체 이해하기 */
//함수 선언 시 작성되는 변수는 매개변수라면, 함수 호출 시 전달되는 값을 전달인자(arguents)라고 한다
//작성된 인수보다 많은 인수를 호출해야하는 경우 arguments 객체가 유용할 수 있다.
//접근 방식이 배열과 유사하지만 length외에 pop()과 같은 Array 속성을 사용할 수 없다.
//slice는 원본 배열은 바뀌지 않고 시작과 끝 인덱스에 대해 새롭게 배열을 생성하여 반환

function sum() {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  console.log("반복문 종료");
  //Array의 인스턴스인지 확인 , 맞을 경우 true 반환
  console.log(arguments instanceof Array);
  return total;
}

var sumOnetoThree = sum(1, 2, 3);
console.log(sumOnetoThree);

function testArg() {
  //arguments 객체를 배열로 변환
  var newArr = [].slice.call(arguments);
  console.log(newArr);
  //배열에서 사용될 수 있는 메소드를 호출할 수 있게됐다.
  console.log(newArr instanceof Array);
  console.log(newArr.indexOf("랭킹2위"));
  console.log(newArr.pop());
}

testArg("랭크1", "랭킹2위");

/*초급37 함수 기본 매개변수 처리 */
//함수 매개변수 작성시 기본값 할당 및 일반 괄호 내에서 연산가능
//만약 연산이 필요한 경우 왼쪽부터 먼저 초기화가 되어있어야 사용 가능 안그러면 Cannot access 'divder' before initialization 예외 발생
//비록 기본값 설정이되어있지만 매개변수의 순서대로 인자값을 전달하여 해당값으로 연산 가능
function drawingBox(width = 200, divder = 2, height = 400 / divder) {
  console.log(`${width} * ${height} box를 생성합니다.`);
}

drawingBox();
drawingBox(100, 1, 400);
drawingBox(400, 1);

/*초급38 나머지 매개변수 */
//arguments와 비교하여 나머지 매개변수 rest parameter 배열객체이며 정해지지 않은 나머지 요소들 배열로 반환한다.

function userInfo(id, ...otherInfo) {
  var age = 2021 - Number(otherInfo.pop()); //원본 데이터 1989가 변경되었기때문에 좋은 방법은 아니다.
  myinfo = [id, ...otherInfo, age];

  console.log(myinfo);
}

userInfo(
  "happy-sonday",
  "mrsmiler110@gmail",
  "01096558120",
  "경기도",
  "개발자",
  "1989"
);

/*초급39 스코프 이해하기 */
//함수내에서 중괄호 내에서 변수를 선언하고 한정지어도 함수내에서는 선언된 변수는 함수내 모두 접근가능하다.
//하지만 함수를 벗어나 함수 내에 있는 변수를 접근하려고하면 ReferenceError가 발생한다.
//스코프는 렉시컬 스코프와 다이나믹 스코프가 있는데 일반적으로 코드를 작성하는 시점(선언)되는 시점에서 결정되어진다고해서 정적 스코프라고도 한다.
//함수밖에서는 beginA만 참조가능하지만 함수 내부에서는 beginB와 beginC, 그리고 beginA까지 참조할 수 있다.
var beginA = 10;
console.log(beginA);

function print() {
  var beginB = 20;
  if (true) {
    var beginC = 30;
  }

  console.log(beginC);
}

print();

//console.log(beginB);//beginB is not defined
//렉시컬은 이미 var name에 "happy"값을 할당하라고 작성하는 순간 결정되어 wrapper()함수 내부에 전역벽수 name을 참조하게 되는것
//만약 다이나믹 스코프였다면 wrapper는 호출되는 시점에서 참조하여 nero가 출력됬을 것이다.
var name = "happy";

function log() {
  console.log(name);
}

function wrapper() {
  var name = "nero";
  log();
}

wrapper();

/*초급40 함수 호이스팅 */
//호이스팅 건설현장에서 무거운 자재/화물 들어올리는 중장비에서 유래
//함수를 선언하기 전에 호출

//위에서 아래로 읽는 방식이라면 함수선언식이 없는데 먼저 호출되어 작성하는 방식
hello();
function hello() {
  console.log("안녕하세요");
}

//리터럴 방식으로 함수표현식을 선언한 경우 렉시컬 스코프(작성시점)의 영향을 받아 에러가 발생한다.
//hello2();//hello2 is not a function
var hello2 = function () {
  console.log("안녕하세요");
};
hello2();

/*초급41 let 변수 선언 */
//함수내 결과처리를 위해 중괄호내 var 변수를 선언해도 함수 내에서 어디서든 참조가능하고 전역 변수까지 참조가능해 유효 블록범위를 찾기가 헷갈리 수 있다.
//let은 중괄호 내에서 선언된 변수는 해당 중괄호에서만 유효 범위를 갖도록 한다.
//let 또한 변수 초기화 코드를 작성하는 시점에서 참조가 이루어지기때문에 할당하지 않고 먼저 호출하게 되면 에러가 발생한다. 따라서 변수 초기화 위치 주의할 것

if (true) {
  var varUser = "sonday";
  let letUser = "everyday";
  console.log(letUser);
}

console.log(varUser);
//console.log(letUser);//letUser is not defined

let outValue = "바깥값";

if (true) {
  let innerValue = "안쪽값";
  console.log(innerValue);
  //let innerValue = "안쪽값";// Cannot access 'innerValue' before initialization
  //var innerValue = "안쪽값"; //에러는 아니지만 undefined 발생
}

/*초급42 const 상수 선언 */
//let 키워드와 동일하게 블록단위로 스코프를 정의하며 선언 후 다시 재할당 하지 못한다는 것

const URL = "http://js.com";
//URL = "http://js.com"; //object.js:337 Uncaught TypeError: Assignment to constant variable.

if (true) {
  //console.log(URL2);
  const URL2 = "http://js.com";
  console.log(URL2);
}

//console.log(URL2);//ReferenceError

//java의 final의 불변값처럼 행동하지만 객체를 할당할경우 불변 객체가 되는것이아니다.
//내부의 properties의 상태를 변경할 수 있다. 객체 할당된 주소를 참조하고 있고다른 객체주소를 참조하지 못한다는 개념으로 이해하면 될 것 같다.
const CONST_USER = { name: "jay", age: 30 };
console.log(CONST_USER.name, CONST_USER.age);
//내부 키값 변경
CONST_USER.name = "happy-sonday";
CONST_USER.age = "secret";
console.log(CONST_USER.name, CONST_USER.age);
//객체 재할당 -> ERROR
//CONST_USER = { name: "JAYJAY", age: 28 }; //Uncaught TypeError

/*초급43 스코프 체인 */
//중첩함수(Nested Function)에서 자식 함수가 부모 함수 변수에 어떻게 접근 가능한지 확인
//실행 컨텐스트(Execution Context):전역코드와 함수코드 등  실행되기 위해 필요한 정보를 갖고 있음 새로운 실행 컨텍스트(예. 함수)생성되면 스택을 쌓고 실행중인 코드가 종료되면 스택에서 제거
/** 실행순서
 * 1 .전역 실행
 * 2. print() 실행 컨텍스트 및 평가
 * 3. innerPrint()실행컨텍스트 및 평가
 * 4. innerPrint() 평가 종료 후 스택에서 삭제
 * 5. print 실행 컨텍스트 종료 및 스택에서 제거
 * 6. 전역실행 종료
 */
var person = "harin";
function print() {
  var person2 = "jay";

  function innerPrint() {
    console.log(person);
    console.log(person2);
  }
  innerPrint();
  console.log("print finished");
}

print();
console.log("finishied");

// executionContext = {
//   lexicalEnviorment: {
//     environmentRecod: {},
//     outerLexicalEnviroment: 참조,
//   },
// };
//실행 컨텍스트는 렉시컬 환경 객체를 가지고 있으며,
//렉시컬 환경 객체에는 실행에 필요한 소스 코드들이 키와 값 한쌍으로 선언되어있고 , 외부 렉시컬에의해 스코프체인이 발생하여 참조하는 실행컨텍스트 렉시컬 환경을 찾아 환경코드를 실행

/*초급44 클로저  */
//클로저랑 함수가 정의될 때의 렉시컬 환경을 기억하는 함수를 말한다. 어렵다.. 그냥 '함수가 반환되는 것'이라고 우선 이해하자
function makeAdder(x) {
  var y = 1;
  return function (z) {
    y = 100;
    return x + y + z;
  };
}
var add5 = makeAdder(5);
var add10 = makeAdder(10);
//console.dir(add5); //[[Scopes]]: Scopes[3] 0: Closure (makeAdder) {x: 5, y: 1} 확인
//클로저에 x는 5또는 10와 y=1의 환경이 저장되고 기억하고 있음
console.log(makeAdder(5));
console.log(add5(2)); // 107 (x:5 + y:100 + z:2)
//console.dir(add5);
// console.log(add10(2)); // 112 (x:10 + y:100 + z:2)
//함수 실행 시 클로저에 저장된 x, y값에 접근하여 값을 계산

/*초급44 객체 속성 기술자 이해하기  */
let objUser = {
  name: "jeado",
};

//모든 객체의 property는 자기자신의 정보,즉 속성 기술자(PropertyDescriptor)를 가지고 있다.
//getOwnPropertyDescriptor 인자로 참조할 객체와 key명을 찾아 해당 property의 속성 기술자 정보를 객체로 반환한다

let descriptor = Object.getOwnPropertyDescriptor(objUser, "name");
console.log(descriptor);

///////////////////////
let objUser2 = {};
Object.defineProperty(objUser2, "name", {
  value: "jeado",
  enumerable: true, //나열 문법을 사용할때 가능여부를 정의 false일 경우 나열 하지 않음
  configurable: true, //속성 기술자를 재정의 할 수 있는지 여부를 설정, false일 경우 변경 불가
  writable: false, //값을 변경할 수 있는지 여부
});
console.log(objUser2.name);
objUser2.name = "happy-sonday";
console.log(objUser2.name); //writable을 false로 주었기때문에 변경값이 적용 안됨 : true로 바꾸면 변경 확인가능

///////////////////////
let objUser3 = {
  name: "jeado",
  toString() {
    return this.name;
  },
};

///////////////////////
Object.defineProperty(objUser3, "toString", {
  enumerable: false, //toString속성을 루프에 나열되지 않도록 정의하여 출력되지 않는다.
});

for (let key in objUser3) {
  console.log(key); //toString함수명은 출력되지 않는다.
}

///////////////////////
let objUser4 = {};
Object.defineProperty(objUser4, "name", {
  value: "jeado",
  configurable: false,
});

delete objUser4.name; //configurable false로 인해 name 속성 삭제 되지 않음
console.log(objUser4);
// Object.defineProperty(objUser4, "name", {
//   writable: true, //configurable false로 인해 재정의하지 못하므로 redefined Error발생
// });

/* 초급46 Get,Set을 통한 속성 접근 관리하기 */
let accessUser = {};
//age라는 accessUser 객체에 age 속성 선언
Object.defineProperty(accessUser, "age", {
  get: function () {
    return this._age;
  },

  //속성값을 대입할 때 호출되어 인자age의 값이 _age에 대입
  set: function (age) {
    if (age < 0) {
      console.error("0보다 작은값은 올 수 없습니다.");
    } else {
      //참고. 자바스크립트에서 public 접근제어자가 없어 암묵적으로 private임을 나타내기위해 컨벤션룰로 앞에 언더바를 붙인다.
      this._age = age;
    }
  },
  enumerable: true,
});

accessUser.age = 10;
console.log(accessUser.age); //10 , this._age속성값이 반환되어 출력됨
//accessUser.age = -1;

let accessUser2 = {
  get name() {
    return this._name;
  },
  set name(val) {
    if (val.length < 3) {
      throw new Error("3자 이상이어야 합니다.");
    }
    this._name = val;
  },
};
accessUser2.name = "happy-sonday";
console.log(accessUser2.name);
//accessUser2.name = "ha";

/* 초급47 화살표 함수 */
/** 매개변수가 하나일 경우 괄호 생략가능
 * 둘 이상일 경우 괄호 작성
 * 블록을 지정하지않고 return 키워드 없이 결과값 반환 가능
 * 중괄호 블럭 지정시 return 키워드 작성해야함 안그러면 undefined 발생
 * arguments 객체는 생성하지 않으므로 ...나머지 매개변수를 사용하자
 * 개인적으로 정말 간단한 연산이 아니면 인자값 구분과 함수의 정의 범위가 어디인지 중괄호와 return 키워드는 다 써주는 게 좋을 것 같다.
 */

//생략 가능한 경우
const double = (x) => x + x; //인자가 하나기때문에 괄호없이도 작성 가능
const funDouble = function (x) {
  return x + x;
};

console.log(double(2));
console.log(funDouble(2));

//multi parameter인 경우
const add = (a, b) => a + b;
console.log(add(1, 2));

const arrowSum = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
};

console.log(arrowSum(1, 2, 3));
// const printArguments = () => {
//   console.log(arguments);
// };

setTimeout(() => {
  console.log("화살표 함수 실행 완료!!");
}, 5000);

// printArguments(1, 2, 3);
