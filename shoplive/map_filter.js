const users = [
  { id: 1, name: "ID", age: 36 },
  { id: 2, name: "BJ", age: 32 },
  { id: 3, name: "JM", age: 32 },
  { id: 4, name: "PJ", age: 27 },
  { id: 5, name: "HA", age: 25 },
  { id: 6, name: "JE", age: 26 },
  { id: 7, name: "JI", age: 31 },
  { id: 8, name: "MP", age: 23 },
];

// 30세 이상 users를 추출
const more30Users = users.filter((user) => user.age >= 30);
console.log(more30Users);

// 30세 미만인 유저의 name만 추출
const less30Users = users.filter((user) => user.age < 29);
console.log(less30Users);

// 30세 미만의 users name
console.log(less30Users.map((user) => user.name));

// 30세 미만의 users의 age를 수집
console.log(less30Users.map((user) => user.age));

/**
 * forEach 문으로 작성
 */

/**
 * ArrayLike 함수가 아니라 메서드이다
 * map filter 는 인스턴스가 Array여만 가능한거다.
 * 예 querySelectorAll을 사용하는 경우 유사배열(배열처럼 중괄호로 반환)이지만 객체 인스턴스 타입이
 * nodeList 이기때문에 map filter를 사용할 수 없다.
 */

const more30UsersForEach = [];
users.forEach((user) => {
  if (user.age >= 30) more30UsersForEach.push(user);
});
console.log(more30UsersForEach);

const less30UsersForEach = [];
users.forEach((user) => {
  if (user.age < 30) less30UsersForEach.push(user);
});
console.log(less30UsersForEach);
console.log(less30Users.map((user) => user.name));
console.log(less30Users.map((user) => user.age));
