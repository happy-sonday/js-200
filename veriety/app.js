//다양한 방식의 모듈 사용하기

//as를 통해 export나 import 하는 module을 다른 이름으로 명명하여 사용가능하다.

import { version as moduleversion } from "./version.js";
// const version = "v0";
// console.log(moduleversion);

export default function add(a, b) {
  return a + b;
}

export const version = "app1 v1.0";
