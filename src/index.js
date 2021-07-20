// const name = "じゃけぇ";
// const age = 28;
// // 「私の名前はじゃけぇです。年齢は２８歳です。」

// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// // アロー関数

// const func2 = (str) => str;
// console.log(func2("func2です。"));

// const func3 = (num1, num2) => num1 + num2;

// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "toru",
//   age: 42
// }

// const message1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `私の名前は${name}です。年齢は${
//   age}です。`;

// const myProfile = ["Toru", 42];

// const message3 = `My name is ${myProfile[0]}. ${myProfile[1]}`;

// console.log(message3);

// const [name, age] = myProfile;

// const message4 = `My name is ${name}. ${age}`;
// console.log(message4);

/**
 * デフォルト値、引き数
 */
const sayHello = (name = "guest") => console.log(`Hello, ${name}.`);
sayHello();
