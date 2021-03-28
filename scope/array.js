function lottoNum(array) {
  if (!array) {
    var array = [];
  }
  let n = Math.floor(Math.random() * 10) + 2;
  if (array.length < 10 && array.indexOf(n) < 0) {
    array.push(n);
    return lottoNum(array);
  } else if (array.length > 9) {
    return array;
  } else return lottoNum(array);
}

//임의의 배열 추출
let array = lottoNum();
console.log(array);

//배열에서 최솟값
let min = Math.min.apply(null, array);
console.log(min);
