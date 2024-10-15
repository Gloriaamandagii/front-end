//IIFE & Callback

//IFFE (immediately Invoke Function Expression )
//syntax
(function () {
    console.log("hello world");
  })();

//with parameter
(function (fullName) {
    console.log ("hello " + fullName)
  })("Gloria");

  //with parameter, return value 
let output = (function (fullName) {
    console.log ("hello " + fullName)
  })("Gloria");

console.log(output);

// //callback function
function sayHello (callback) {
  callback();
}
sayHello (function (){
    console.log("hello callback function");
});


//with parameter, argument & return value
function sayHello (callback) {
  let output = callback("gloria")
  return output;
}

sayHello (function (fullName){
  return "Hello" + fullName 
});
console.log(output);



