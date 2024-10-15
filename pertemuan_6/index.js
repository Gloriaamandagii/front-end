//array & object
//variable yang dapat menyimpan banyak data

//array
//deklarasi variable array
//1. array literal
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

//2. menggunakan kata kunci new
let numbers2 = new Array(6, 7, 8, 9, 10);
console.log(numbers2);

//tipe data dalam array
let numbers3 = [2, 4, 6, 8, 10];
let students = ["john", "jane", "Gloria"];
let john = ["John", 30, true, [90, 100, 100]];
console.log(numbers3);
console.log(students);
console.log(john);

//array length
console.log(numbers3.length);
console.log(students.length);
console.log(john.length);

//mengakses element tertentu di dalam array
//bisa dilakukan melalui index dan index selalu dimulai dari 0
console.log(numbers3[2]); // 6
console.log(students[2]); // gloria

//mengakses element terakhir dalam array
let numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, , 9, 10];
console.log(numbers4.length); //tampilkan length
console.log(numbers4[numbers.length - 1]);

//array method
let array = [1, 2, 3, "halo", false, true, "selamat pagi"];
console.log(array);
console.log(array.toString);
console.log(array.join(" "));
console.log(array.join("_"));
array.pop(); //hapus paling terakhir
array.push(); // tambah paling terakhir
array.shift(); // hapus yang paling depan
array.unshift("selamat pagi"); //tambah paling depan

//array splice
array.splice(3, 0, 4, 5);
console.log(array);

//8. concatination
let buah = ["pisang", "apel", "jeruk"];
let sayur = ["tomat", "bayam", "wortel"];
let bijibijian = ["kedelai", "kacang tanah", "kacang polong"];
let makanan = buah.concat(sayur, bijibijian);
console.log(makanan);
//slice
let sayuran = makanan.slice(3, 6);
console.log(sayuran);
