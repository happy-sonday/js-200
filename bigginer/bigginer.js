// console.log("js에제200 part 2 초보자");

/* 초급16 숫자형 */
//숫자형은 부호 지수 가수로 구성된  64bit Floating Point(부동 소수점)
//숫자를 표현하는 값 외 Infinity(무한대)와 (NaN)이 있음

// console.log(Infinity); //Infinity
// console.log(1 / Infinity); //0
// console.log(0 / 0); //NaN
// console.log(Infinity - Infinity); //NaN
// console.log(0 / "문자열"); //NaN

/* 초급17 문자열 */
//큰따옴표 작은따옴표 백틱(억음)부호

// console.log("큰따옴표 문장");
// console.log("작은띠옴표로 감싼 문장");
// console.log(`백틱문자로 표현한 문장`);
// console.log(
//   '내부의 문자를 구분하기 위해 사용된 "Considering the current sad state of our computer programs, software development is clearly still a black art, and cannot yet be called an engineering discipline."'
// );
// console.log(
//   "In the one and only true way. The object-oriented version of 'Spaghetti code' is, of course, 'Lasagna code'. (Too many layers)."
// );

// var author = "haapy-sonday";
// console.log("JS200 예제 스터디 인원 : " + author); //문자열 합침으로 표현
// console.log(`JS200 예제 스터디 인원 : ${author}`); //백틱문자내 ${}이용하여 처리하는 것을 삽입처리(interpolation)이라고 한다.

/* 초급18 불린형 */
//참이면 true(object, true, ”Value”, 1) 거짓이면 false  (null,undefined,false,””,0)
// console.log(7 > 3);
// console.log(7 < 3);

/* 초급19 null과 undefined 차이 */
// null은 의도적으로 비어있음을 표현 적합한 객체도 존재하지 않을 때 반환
//undefined 선언한 후에 값을 할당하지 않은 변수나 값이 주어지지 않은 인수 : 전역 범위 외에서 변수 이름으로 사용할 수 있어 유지보수와 디버깅에 어려움이 있기때문에 사용을 지양한다.
// console.log(null == undefined);
// console.log(null === undefined);
// console.log(typeof undefined); //undefined
// console.log(typeof null); //object
// console.log(undefined + 1); //NaN
// console.log(null + 1); //1

/* 초급20 템플릿 문자열 */
//백틱 문자로 멀티라인 문자열을 만들 수 있다.'
// var cart = [{ name: "옷", price: 2000 }];
// var cartTable = `<ul><li>품목 : ${cart[0].name}, 가격 ${cart[0].price}</li></ul>`;
// console.log(cartTable);

/* 초급21 산술 연산자 */
// var x = 10;
// var cloneX = 10;
// x = x + 5;
// cloneX += 5;
// console.log(x === cloneX);
// console.log(15 % 2); //나머지 연산자, 15에서 3을 몫으로 나눗셈 했을때, 남은 나머지 값을 반환 15= (2*7)+1
// console.log(2 ** 3); //거듭제곱 연산 2*2*2
// //number 변수에 string변수를 더하면 문자열로 변한다
// var isString = x + "2";
// console.log(`결과값은 ${isString} type은 ${typeof isString}`);

/* 초급22 비교연산자 */
//동등연산자 자료형이 다르면 강제로 형변환하여 내용이 같은 경우에 참
//일치연산자는 자료형과 값 모두 일치해야 참
//부등연산자의 경우 앞에 등호를 !를 바꿔서 같지 않을 때 true를 반환
//부등연산자(!=)과 불일치 연산자(!==)로 나눔
//> , <, >=, <=

// console.log(8120 != "8120"); //값만 비교
// console.log(8120 !== "8120"); //값과 자료형 둘다 비교, 값은 같으나 자료형이 일치하지 않아 true
// console.log(3 > 3); //3이 3보다 크다
// console.log(3 >= 3); //3이 3보다 같거나 크다
// console.log("korea" < "Korea"); //유니코드 기준에따라 맨 앞글자 기준으로 비교 가능
// console.log("K".charCodeAt(0)); // 75, charCodeAt(idx) 문자(열)의 인덱스 번호를 인수로 넣어 유니코드 값으로 반환
// console.log("k".charCodeAt(0)); // 107

/*초급23 논리연산자  */
//&& AND 2개이상의 연산결과 모두 true여야 true
//|| OR 2개이상의 연산결과 중, 일부라도 true이면 true
//! not 논리연산자
//!! 이중 부정 논리연산자로 부정에 부정문으로 결과

var selectedBrand = "new balance";
var anotherBrand = "addidas";
var others;
var popularBrand = "nike";

if (selectedBrand && selectedBrand === "new balance")
  console.log(`선택한 브랜드는 ${selectedBrand}`);

if (others) console.log(`신규 브랜드 ${others} `);

if (others || popularBrand)
  console.log(`랭크에 있는 브랜드 ${popularBrand}, ${others}`);

if (!others) console.log("선택한 브랜드가 없습니다.");

var dubleNot = 0;
if (dubleNot)
  console.log(`숫자 0에 javascript는 false로 인식하여 실행되지 않습니다.`);
else if (!!dubleNot === false)
  console.log("이중부정으로 bool타입으로 변경되어 반환되는 값이 0이 되어 출력");

/*초급24 삼항 연산자  */
//조건연산자 ? 결과과 참일경우의 표현 : 아닐경우의 표현

var selectedContent = "king dom";
//var selectedContent = "";

selectedContent
  ? console.log(`선택한 컨텐츠는 ${selectedContent}`)
  : console.log("선택한 컨텐츠가 없습니다");

/*초급25 비트 연산자  */

//bit는 1과 0으로 표현되는 이진수(binary digit)의 줄임말로 메모리 최소 단위
//1byte = 8bit  byte는 컴퓨터 RAM과 하드 디스크, 파일 브라우저에서 보여진ㄴ 파일의 크기 단위로 사용
// AND &
// OR  |
// NOT ~

//3 -> 0011 ->       (2^1)+(2^0)
//7 -> 0111 -> (2^2)+(2^1)+(2^0)
console.log(3 & 7); //3

console.log(3 | 7); //7
console.log(~7); //0111-> 1000(2^3)으로 계산하여 -부호 연산 결과값이 출력
console.log(14 ^ 11); //1101 과 1011 에서 서로 맞지않는 bit만 선별하여 0101을 십진수 결과값으로 출력
console.log(3 << 1); //0011 -> 0110 이진수 위치를 왼쪽으로 1칸 이동
console.log(8 >> 2); //1000 -> 0010 이진수 위치를 오른쪽으로 2칸 이동

//십진수를 이진수로 바꾸는 방법
var dec = 8;
console.log(dec.toString(2));

/*초급26 자료형 변환 */
//+연산자를 통해 숫자+문자열= 문자열 문자열+문자열=문자열 변수=+문자열 등 형변환을 할 수 있다.
//그 외 다른 연산자들은 string으로 표현된 숫자를 강제 형변환하여 연산결과만 얻어낼 수 있다.
console.log(`숫자+문자열 ${4 + "10"}`); //410
console.log(`문자열+문자열 ${"20" + "21"}`); //2021
var transNum = +"21";
console.log(
  `${transNum}의 자료형은 ${typeof transNum}이며 2000을 더한 연산 결과 ${
    transNum + 2000
  }`
);

console.log(4 * "5");
console.log(22 / "2");

//내장 함수로 형 변환
console.log(
  `transNum을 String() 내장 함수를 통해 문자열 타입으로 변경, 숫자 2000과 더한 결과 ${
    2000 + String(transNum)
  } `
);

var str = "2021";
console.log(
  `str 문자열을 Number() 내장 함수를 통해 숫자형으로 바꿔 2300을 더한 결과 ${
    2300 + Number(str)
  }`
);
