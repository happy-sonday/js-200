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
