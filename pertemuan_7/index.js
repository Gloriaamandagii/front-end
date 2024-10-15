//javaScript Object
//object memiliki properti dan nilai & 

//Deklari Object
//Cara 1. Object Literal

let john ={
    firstName: "John",
    age: 30,
    isMarried: true,
    grade: [80, 90, 100],
    sayGreetings: function(){
        console.log("Hello my name is " + this.firstName);
    },
    address: {
        street: 'Jl. Arnold Mononutu',
        city: 'Minahasa Utara',
        province: 'Sulawesi Utara',
        postalCode: 95371,
    }
}
console.log(john);


// Cara 2. Kata kunci new
let jane = new Object();
jane.firstName= "Jane",
jane.age = 25,
jane.isMarried = true

console.log(jane);



//Cara mengakses properti dalam object
// 1. Dot Notation
console.log(john.firstName); //Jonh
console.log(john.age); //30

//Mengubah umur dari jonh
john.age = 31;
console.log(john.age);

john.job = "Teacher"; //Menambah properti baru
console.log(john);


//2. Bracket Notation
//Kurung siku

console.log(john["isMarrie"]);   //true
john["Nationality"] = "Indonesia";
console.log(john);


//Object method
john.sayGreetings();    //Hello my name is John

//object di dalam object
console.log(john.address.city); //Minahasa Utara

//delete properti dalam object
delete john.grade;
console.log(john);

//javascript conditional
//1. if else
let numbers = 5;
if(numbers % 2 == 0){
    console.log("bilangan genap")
}
else {
    console.log("bilangan ganjil")
}

//kondisi yang banyak 
//if-else-if
// range nilai 100-80 nilai a
// range nilai 60-70
// range nilai <60 c

let nilai = 80;
if (nilai >= 80 && nilai <= 100) {
    console.log("Grade A");
} else if (nilai >= 60 && nilai < 80) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}

//switch case
let month = 1;
switch (month) {
    case 1:
        console.log ("january")
        break;

    case 2:
         console.log ("february")
         break;

    case 3:
        console.log ("march")
        break;
}

