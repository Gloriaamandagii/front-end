// IFFE
let bmi = (function (berat, tinggi) {
  let BMI = berat / (tinggi * tinggi);
  return BMI;
})(63, 1.6);

console.log(bmi);

//callback
const hitungBMI = function (berat, tinggi, callback) {
  let BMI = berat / (tinggi * tinggi);
  callback(BMI);
};
const tampilkanBMI = function (BMI) {
  console.log(BMI);
};
hitungBMI(63, 1.6, tampilkanBMI);
