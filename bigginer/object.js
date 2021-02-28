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
