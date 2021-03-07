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
class Cart {
  constructor() {
    this.store = {};
  }

  addProduct(product) {
    //product객체 내부 id를 store의 key로 하여 id: product{}로 저장
    this.store[product.id] = product;
  }

  getProuduct(id) {
    //store 객체의 키로 하여 값으로 가지는 해당 product 객체를 반환
    return this.store[id];
  }
} //cart class 정의 끝

//const로 정의하였기때문에 cart1에는 어떠한 값도 대입할 수 없다.
const cart1 = new Cart();
const popularCart = new Cart();

cart1.addProduct({ id: 1, name: "노트북" });
popularCart.addProduct({ id: 2, name: "씽씽 전동킥보드" });
console.log(cart1.store);
console.log(popularCart.store);

const p = cart1.getProuduct(1);
console.log(p);

/* 초보52 클래스 상속 */
class Chart {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  drawLine() {
    console.log("draw line");
  }
}

class BarChart extends Chart {
  constructor(width, height) {
    super(width, height);
  }

  draw() {
    this.drawLine();
    console.log(`draw ${this.width} X ${this.height} barChart`);
  }
}

const barchart1 = new BarChart(100, 100);
barchart1.draw();

/* 초보53 정적 메소드와 속성 정의 */
class Product {
  static build(name, price) {
    const id = Math.floor(Math.random() * 1000);
    return new Product(id, name, price);
  }

  static getTaxPrice(product) {
    return product.price * 0.1 + product.price;
  }

  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

class DeposableProduct extends Product {
  depose() {
    this.deposed = true;
  }
}

const gum = Product.build("껌", 1000);
console.log(gum);

const clothes = new DeposableProduct(1, "옷", 2000);
const taxPrice = DeposableProduct.getTaxPrice(clothes);
console.log(taxPrice);

/* 초보54 this 이해 */
class ProductWithCode {
  static get CODE_PREFIX() {
    return "PRODUCT-";
  }

  constructor(id) {
    this.id;
    this.code = ProductWithCode.CODE_PREFIX + id;
  }
}

const product1 = new ProductWithCode("001");
console.log(ProductWithCode.CODE_PREFIX);
console.log(product1.code);

/* 초보55 모듈 이해하기 */
var namespaceA = (function () {
  var privateVariable = "비공개 변수";
  return {
    publicApi: function () {
      console.log(privateVariable + "를 접근할 수 있습니다.");
    },
  };
})();

namespaceA.publicApi();
