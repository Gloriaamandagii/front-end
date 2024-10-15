//javascript function
//cara pertama
function greetings1(){
    console.log ("hello world");
}
greetings1();
//cara kedua
let greetings2 = function() {
    console.log ("hello world");
}
greetings2();
//parameter dan argument
//input (parameter) output atau return value
                    //parameter
function greetings1(fullName) {
    return "Hello" + fullName;
}
                        //argument
let output = greetings1("Gloria")
console.log (output);

cara kedua
let greetings2 = function(fullName){

    return "Hello" + fullName
}
let output2 = greetings2("Gloria")
console.log (output2)

//global dan local scope
let x = 10;
let y = 20;
function foo(){
    console.log (x);
    console.log (y);
    if (z>y) {
        let a = 40 ;
        console.log (a);
    }
console.log (a)
}