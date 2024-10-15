//Asychronous Java Script
//kebalikannya sychronous
//sychronous atau single thread/suatu proses/blocking

//Asychronous --> multithread
//1.paralel
// setTimeout(() => {
//     console.log("Proses 1");
// }, 3000);
// console.log("Proses 2");
// setTimeout(()=> {
//     console.log("Proses 3")
// },3000)
// console.log("Proses 4");

//2.concurent
// setTimeout(()=>{
//     console.log("Proses 1");
//     setTimeout(()=>{
//         console.log("Proses 2");
//         setTimeout(()=>{
//             console.log("Proses 3")
//             setTimeout(()=>{
//                 console.log("Proses 4")
//             },3000)
//         },3000)
//     },3000);
// },3000)

//promise
let condition = false;
const newPromise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("Berhasil");
  } else {
    reject("Gagal");
  }
});

// Cara pakai Promise

// 1. then - catch
newPromise
  .then((result) => result)
  .then((result2) => console.log(result2))
  .catch((error) => console.log(error));

// 2. Asyc - Await
//harus dibuat dalam fungsi
// const consumePromise = async () => {
//     try {
//       let result = await newPromise;
//       console.log(result);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   consumePromise();

//pakai promise yang sudah ada menggunakan fetch

// 1. Fetch
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => console.log(json));

// Atau dengan async/await
(async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let json = await response.json();
  json.forEach(({ name }) => console.log(name));
})();

//2. Axios
axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((result) => console.log(result.data));

(async () => {
  let result = await axios.get("https://jsonplaceholder.typicode.com/users");
  result.data.forEach(({ name }) => console.log(name));
})();
