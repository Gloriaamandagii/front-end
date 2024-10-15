// rest parameter dan spread operator

//1. rest parameter
//rest parameter digunakan ketika kita ingin menggunkan fungsi yang banyak parameter

//cth tanpa rest parameter
const funct1 = (param1, param2, param3, param4) => {
  console.log(param1, param2, param3, param4);
};
funct1("A", "B", "C", "D");

//menggunakan rest parameter
const funct2 = (...params) => {
  console.log(params);
};
funct2("A", "B", "C", "D");

//rest parameter harus beraeda di terakhir dalam parameter list
const funct3 = (param1, param2, param3, ...params) => {
  console.log(param1, param2);
  console.log(params);
};
funct3("A", "B", "C", "D");

//exercise
// const penjumlahan = (a, b, c, d, e, f) => {
//     let arr = [a, b, c, d, e, f];
//     let hasil = 0;
//     arr.forEach((item) => (hasil += item)) ;
//     return hasil;

// };

// console.log (penjumlahan(1, 2, 3, 4, 5, 6));

//menggunakan rest parameter
const penjumlahan = (...args) => {
  let hasil = 0;
  args.forEach((item) => (hasil += item));
  return hasil;
};

penjumlahan(1, 2, 3, 4, 5, 6);

//spread  operators
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(...numbers);

//kegunaan spread operater pada array
//1.duplicate array
numbers2 = [...numbers];
numbers.push(6);
console.log(numbers);
console.log(numbers2);

//fungsi spread operator yang kedua digunakan untuk menggabungkan array

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];

let numbers3 = arr1.concat(arr2, arr3);
let numbers4 = [...arr1, ...arr2, ...arr3];

//object
//1. duplikasi objek
const gloria = {
  fullName: "gloria mandagi",
  age: 19,
};
const gloria2 = { ...gloria, address: "manado" };
//2. menggabungkan object
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let obj3 = { e: 5, f: 6 };

let combineObj = { ...obj1, ...obj2, ...obj3 };
