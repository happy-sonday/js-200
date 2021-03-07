console.log(`객체지향프로그래밍`);
/* 초급48 -객체지향 프로그래밍 이해하기 */
const teacherJay = {
  name: "제이",
  age: 30,

  //   teacherJa객체가 student객체로 studentBbo를 사용
  //  '메소드를 통해 메시지를 전달한다'
  teachJavascript: function (student) {
    student.gainexp();
  },
};
const studentBbo = {
  name: "뽀",
  age: 20,
  exp: 0,
  gainexp: function () {
    this.exp++;
  },
};

console.log(studentBbo.exp);
teacherJay.teachJavascript(studentBbo);
console.log(studentBbo.exp);

/* 분류(classification): 무수히 많은 객체들을 공통적인 특성을 기준으로 묶어서 하나로 정의 */
/* 원형(prototype): 자바스크립트는 프로토타입 기반으로 객체지향 프로그래밍을 지원
특징을 묘사하는 원형 객체를 만들고 이 원형 객체의 기반하는 여러객체들을 만들면 모두 같은 특징을 가질 수 있다 */
/* 자바스크립트에서 __proto__속성으로 원형 객체를 정의 가능 할당하지 않는다면 Object.prototype객체가 연결 */
/* __proto__속성을 이용해 studentProto를 연결하고 있어 경험치를 얻는 행위가 가능 */
const studentProto = {
  gainExp: function () {
    this.exp++;
  },
};

const harin = {
  name: "하린",
  age: "10",
  exp: 0,
  __proto__: studentProto,
};
const Bbo = {
  name: "뽀",
  age: "20",
  exp: 10,
  __proto__: studentProto,
};

Bbo.gainExp();

Bbo.gainExp();
Bbo.gainExp();
harin.gainExp();
harin.gainExp();
harin.gainExp();
harin.gainExp();
harin.gainExp();
console.log(`뽀 경험치는 ${Bbo.exp}고, 하린 경험치는 ${harin.exp}`);

/* 초급49 -생성자 함수 */
/* 객체: new 키워드로 만들어진 객체는 해당 타입의 인스턴스가 되면 원시타입 뿐만아니라 여러 속성이 정의된 클래스를 통해 만들어지면 '인스턴스'라고 한다. */
/* new 키워드를 사용하면 return문 없이 새로운 객체가 반환되고 함수 받에서 this 키워드를 사용하야 반환되는 객체의 초기 상태와 행위를 정의할 수 있다. */

function Teacher(name, age, subject) {
  this.thisName = name;
  this.thisAge = age;
  this.thisSubject = subject;
  this.teacher = function (student) {
    console.log(`${student}에게 ${this.thisSubject}를 가르칩니다.`);
  };
}

const jay = new Teacher("jay", 30, "java script");
console.log(jay);
jay.teacher("bbo");

// 모든 객체는 constructor 속성을 가진다.
console.log(jay.constructor);
//jay인스턴스가 Teacher의 객체인지 확인
console.log(jay instanceof Teacher);

//this는 전역 객체를 가리키게 되어 전역객체에 thisNamg과 thisAge thisSubject 속성으로 전달받은 매개변수가 할당

const jay2 = Teacher("jay", 30, "java script");
//console.log(jay2.constructor);//undefined error
console.log(jay2); //새로운 객체를 반환하지 않아 undefined 발생
//console.log(age);//error발생
console.log(thisAge);

/* 초보50 프로토타입 기반 상속 이해 */
function Storage() {
  this.dataStore = {};
}
//Stroage객체에 putMethod를 동적으로 생성
//Storage객체에는 빈객체 생성만 있는 dataStore만 있고 putMethod 함수는 없지만

Storage.prototype.putMethod = function (key, data) {
  //대괄호를 dataStore의 key 속성 접근자로 사용
  this.dataStore[key] = data;
};
Storage.prototype.getDataMethod = function (key) {
  return this.dataStore[key];
};

const productStorage = new Storage();

//Storage.prototype에 동적으로 생성한 putMethod를 검색
//정의된 익명함수의 인자값을 넣어 this.dataStorage객체에 바인딩된다.
productStorage.putMethod("id001", { name: "키보드", price: 2000 });
console.log(productStorage.getDataMethod("id001"));

function RemovableStorage() {
  Storage.call(this);
}
//Object.create의 인자를 __proto__에 연결한 새로운 객체를 반환
//Strage 함수의 프로토타입 객체가 RemovableStorage함수의 프로토타입 객체의 __proto__에 할당
//Stroage.prototype과 RemovableStroage.prototype 상속관계를 형성하게 되어
//RemovableStroage.prototype에서 동적으로 생성된 removaAll()를 추가하한다.
RemovableStorage.prototype = Object.create(Storage.prototype);
// RemovableStorage.prototype.removeAll = function () {
//   this.dataStore = {};
// };
// const productStorage2 = new RemovableStorage();
// productStorage2.put("id001", { name: "키보드", price: 2000 });
// productStorage2.removeAll();
// const item2 = productStorage2.getData("id001");
// console.log(item2);

/* 초보51 클래스 정의 */
//관례상 앞글자를 대문자로 정의
//중괄호로 클래스르 구분하여 따로 constructor라고 명시하고 매개변수도 정의할 수 있다.
//constructor는 class에 하나만 정의할 수 있다.
//constructor는 매개변수에서 전달받은 값을 속성으로 추가하거나, 속성의 초기갓을 대입하는 초기화 과정 주로 한다.
// class Cart {
//   constructor() {
//     this.store = {};
//   }

//   addProduct(product) {
//     //product객체 내부 id를 store의 key로 하여 id: product{}로 저장
//     this.store[product.id] = product;
//   }

//   getProuduct(id) {
//     //store 객체의 키로 하여 값으로 가지는 해당 product 객체를 반환
//     return this.store[id];
//   }
// } //cart class 정의 끝

// //const로 정의하였기때문에 cart1에는 어떠한 값도 대입할 수 없다.
// const cart1 = new Cart();
// const popularCart = new Cart();

// cart1.addProduct({ id: 1, name: "노트북" });
// popularCart.addProduct({ id: 2, name: "씽씽 전동킥보드" });
// console.log(cart1.store);
// console.log(popularCart.store);

// const p = cart1.getProuduct(1);
// console.log(p);

/* 초보52 클래스 상속 */
// class Chart {
//   width = 200;
//   height = 200;
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   drawLine() {
//     console.log("=======================draw line");
//   }
// }

// class BarChart extends Chart {
//   constructor(width, height) {
//     super(width, height);
//   }

//   draw() {
//     this.drawLine();
//     console.log(`draw ${this.width} X ${this.height} barChart`);
//   }
// }

// //width=100, height=100을 생성자함수의 매개변수 값으로 하는 Barchart 인스턴스 barchar1 생성
// const barchart1 = new BarChart(100, 100);
// //barchart1은 Chart클래스를 상속해서 draw메서드를 호추한다.
// //그래서 this를 통해 drawLine()메서드를 호출
// barchart1.draw();

/* 초보53 정적 메소드와 속성 정의 */
//일반적인 메소드는 new연산자를 통해 생성된 인스턴스를 통해 호출하지만 정적 메소드는 해당 클래스를 통해 직접 호출하는 메소드
// class Product {
//   static build(name, price) {
//     //Math.random()은 0부터 1까지 난수가 반환되는 함수, 1000을 곱하면 0~1000범위의 결과값으로 반환됨
//     const id = Math.floor(Math.random() * 1000);
//     return new Product(id, name, price);
//   }

//   //세금계산하는 정적 메소드
//   static getTaxPrice(product) {
//     return product.price * 0.1 + product.price;
//   }

//   constructor(id, name, price) {
//     this.id = id;
//     this.name = name;
//     this.price = price;
//   }
// }

// //폐기가 가능한 상품 클래스르 정의
// //상속시 정적메소드 또한 상속
// class DeposableProduct extends Product {
//   depose() {
//     this.deposed = true;
//   }
// }
// //new 연산자를 사용하지않고 Product클래스의 build메소드를 바로 호출
// const gum = Product.build("껌", 1000);
// console.log(gum instanceof Product);
// console.log(gum);

// const clothes = new DeposableProduct(1, "옷", 2000);
// console.log(clothes instanceof Product);
// console.log(clothes);

// //Product 클래스를 상속하였기때문에 getTaxPrice 호출 가능
// const taxPrice = DeposableProduct.getTaxPrice(clothes);
// const randomId = DeposableProduct.build("스마트폰", 110000);
// console.log(randomId);
// console.log(taxPrice);

// class ProductWithCode {
//   static get CODE_PREFIX() {
//     return "PRODUCT-";
//   }

//   constructor(id) {
//     this.code = ProductWithCode.CODE_PREFIX + id;
//   }
// }

// const product1 = new ProductWithCode("001");
// console.log(ProductWithCode.CODE_PREFIX);
// console.log(product1.code);

/* 초보54 this 이해 */
/* 함수의 호출 방법에따라 동적으로 결정
    this의 목적은 작성된 코드를 재사용
    호출되는 방식에따라 동적으로 결정되어 잘못된 코드를 작성할 수 있다.*/
/* 전역/객체안의 메소드로 정의/ 생성자 함수/ 특정로직을 게산하여 값을 반환하는 목적 */

/* 전역에 사용한경우 Window 객체를 가리킨다 따라서 window.valueA로 해석 */
this.valueA = "a";
console.log(valueA);
valueB = "b";
console.log(this.valueB);

function checkThis() {
  console.log(this);
}
function checkThis2() {
  "use strict"; //엄격모드 실행 지정
  console.log(this);
}
checkThis(); //Window객체가 반환
checkThis2(); //undefined

function Product(name, price) {
  this.name = name;
  this.price = price;
}

//new없이 호출되면 전역개체인 Windows를 가리키게된다.
const product1 = Product("가방", 2000);
console.log(window.name);
console.log(window.price);
//console.log(product1.name);//Cannot read porperty error발생

const newProduct1 = new Product("가방", 2000);
console.log(`new 키워드로 생성된 객체 ${newProduct1.name}`);
console.log(`new 키워드로 생성된 객체 ${newProduct1.price}`);

const product2 = {
  name: "가방2",
  price: 3000,
  getVAT() {
    //객체 내 정의된 함수에서 this를 사용할 경우 this는 해당 객체를 가리킨다.
    //product2.price
    return this.price / 10;
  },
};
const valueOfProduct2 = product2.getVAT(); //300=3000/10
console.log(valueOfProduct2);

const calVAT = product2.getVAT; //변수를 통해 호출하게되면 일반적인 함수 호출이 되어 this는 전역을 가리킨다.
const VAT2 = calVAT(); //윗 코드에 this.price를 통해 2000원이 저장된 window.price를 가리키게 되고 getVat()메소드 연산에 의해 200값이 출력
console.log(VAT2);

//bind메소드 뿐만아니라 call apply메소드를 통해 this가 가리키는 값을 변경할 수 있다.
const newCalVAT = calVAT.bind(product2);
const VAT3 = newCalVAT();
console.log(VAT3);

const counter1 = {
  count: 0,
  addAfter1Sec() {
    setTimeout(function () {
      console.log(this); //this는 전역Windows를 가리키고 있기때문에 정의되지 않은 count와 연산하려고해서 NaN이 발생
      console.log(this.count);
      this.count += 1;
      console.log(this.count);
    }, 2000);
  },
};
counter1.addAfter1Sec(); //NaN

//화살표함수에서 this는 호출 시점에서 동적으로 정의되는것이아니라 작성시점에서 결정
//중첩된 함수로 작성되었을때 화살표 함수를 사용하면 부모 함수의 this와 같다.
const counter2 = {
  count: 0,
  addAfter1Sec() {
    setTimeout(() => {
      console.log(this);
      this.count += 1;
      console.log(this.count);
    }, 2000);
  },
};
counter2.addAfter1Sec();
// /* 초보55 모듈 이해하기 */
// var namespaceA = (function () {
//   var privateVariable = "비공개 변수";
//   return {
//     publicApi: function () {
//       console.log(privateVariable + "를 접근할 수 있습니다.");
//     },
//   };
// })();

// namespaceA.publicApi();
