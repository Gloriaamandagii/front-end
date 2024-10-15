//JavaScript Loop & Array Built-in Method

//JavaScript Loop
//Sekumpulan kode yang akan dijalankan berulang kali sampai batas yang ditentukan.

// 1. for loop
// for (let i=1; i<=10; i++){
//     console.log(i);
// }


// // 2. while loop
// let i = 1;
// while (i<=10) {
//     console.log(i);
//     i++;
// }


// 3. do-while loop
// let i = 1;
// do{
//     console.log(i);   
//     i++;
// }while (i <=10);




// Array built-in method

// let numbers = [1,2,3,4,5]
// console.log(numbers);

// for (let i = 0; i< 5; i++) {
//     console.log(numbers[i]);
// }

// //Menampilkan element array satu per tau
// for (let i = 0; i< numbers.length; i++) {
//     console.log(numbers[i]);
// }


//Array Object
let students = [
    {
        id: 1,
        firtsName:'Jonh',
        isActive: true,
        grade: 80,
    },
    {
        id: 2,
        firtsName:'Jane',
        isActive: true,
        grade: 90,  
    },
    { 
        id: 3,
        firtsName:'Bob',
        isActive: true,
        grade: 100,  
    },
];

//cara lama
// for (let i=0; i<students.length; i++){
//     console.log(students[i]);
// }


//format json seperti diatas

//1. forEach()
// students.forEach(function (item) {
//     console.log(item);
// });

//cara lain
// students.forEach(function (item,index) {
//     console.log(item);
//     console.log(index);
//     console.log(item.firtsName);//menampilkan first name saja
// });

//2. map()
// let output = students.map(function(item){
//     return item; 
// });
// console.log(output);

// di map ada return value

//3. filter()
// mencari data di dalam array, mirip search

let filteredStudent = students.filter(function(item){
    return item.grade > 80;
})
console.log(filteredStudent);

//4. find()
// let output = students.find(function(item){
//     return item.grade > 80;
// })
// console.log(output);

let countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp;Barbuda","Argentina",
    "Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium",
    "Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands",
    "Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China",
    "Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic",
    "Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia",
    "Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia",
    "Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana",
    "Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy",
    "Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia",
    "Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania",
    "Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands",
    "Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay",
    "Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa",
    "San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea",
    "Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan",
    "Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda",
    "Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"
];

//1. Cari indeks negara "Togo"
let index = countries.findIndex(function(item) {
    return item === "Togo";
});
console.log(index);

// menggunakan filter untuk mencari negara yang berakhiran sia

let filteredCountries = countries.filter(function(item){
    return item.endsWith('sia');
});

console.log(filteredCountries);