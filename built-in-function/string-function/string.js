console.log("내장함수 연습");
/* 중급67 문자열 양 끝의 공백 업애기  trim() */

// const sentences = [
//   "  ABC abc  ",
//   "Abc abc       ",
//   `first              second             third`,
// ];

// const filterSentence = (sentences) => {
//   const filtered = [];
//   sentences.forEach((s) => {
//     sentences.push(s.trim());
//   });
//   return filtered;
// };

// console.log(filterSentence(sentences));

// const sentences = [
//   "   ABC abc",
//   "ABC abc   ",
//   ` first
// second third
//         forth
// sentence

// `,
// ];
// const filterSentence = (sentences) => {
//   const filtered = [];

//   //forEach 반복문으로 순회 및 각 요소에 접근하여 trim() 좌우 여백 탭 줄 바꿈을 삭제
//   sentences.forEach((s) => {
//     filtered.push(s.trim());
//   });
//   return filtered;
// };

//console.log(filterSentence(sentences));

/* 중급68 문자열 자르기 slice, substring, substar */
//slice는 음수를 활용하여 뒤에서부터 출력가능하지만 substirng은 음수를 넣으면 작동하지 않는다.
const sentence = "The sun will shine on us again";
console.log(sentence.slice(13)); //13번째 인덱스부터 출력
console.log(sentence.slice(13, 24)); //13번째 인덱스에서 24번인덱스까지만 출력
console.log(sentence.slice(0, 12) + "..."); //몇자까지만 노출을 원할경우 해당 slice 함수를 활용해 보자
console.log(sentence.substring(0, 12));
console.log(sentence.substr(0, 12));

/* 중급71 문자열 길이 */
//TODO:동적으로 배열 선언법
//TODO:forEach문에 대해서 문법 정리
// const arr = [
//   "short",
//   "happy-sonday",
//   "it is not approprite",
//   "house",
//   "mrsmiler",
// ];
// arr.forEach((str) => {
//   if (str.length < 10) console.log(str);
// });

/* 중급72 문자열로 변한하기 */
//원시타입으로 정의된 변수 포함 모든 객체는 Object를 상속받기때문에 내장 메소드 toString()에 접근하고 재정의(Override)
//따라서 toString d
const num = 5;
const bool = true;
const str = "문장열 값";
const arr = [1, 2, 3];
const obj = { a: 14 };

console.log(num.toString());
console.log(bool.toString());
console.log(arr.toString());
console.log(obj.toString());
num.__proto__.toString = () => {
  return "toString 덮어쓰기";
};
//prototype에 접근하여 toString내장 함수를 고정 출력하도록 재정의
console.log(num.toString());

/* 중급73 두 개의 문자열 하나로 합치기 concat */
//호출 문자열에 문자열 인수를 이어 붙인 결과를 반환
//TODO:+연산자보다 concat이 왜 성능이 더 좋을까 (참고로 배열도 있음) :https://web.archive.org/web/20170404182053/https://jsperf.com/concat-vs-plus-vs-join

const str1 = "happy-sonday";
const str2 = "Good Evening";
const str3 = "and Good night!";
const str4 = "- The Truman Show, 1998";
console.log(str1.concat(str2, str3, str4));

var greetList = ["Hello", " ", "Venkat", "!"];
console.log("".concat(...greetList)); // "Hello Venkat!"
