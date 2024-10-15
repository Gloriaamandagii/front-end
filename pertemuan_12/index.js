//ubalah syntax ES$ ke dalam ES6
//1
function calculateAge (birthYear) {
    return 2019 -  birthYear;

}

function yearUntilRetirement (object){
    var age = calculateAge(object.year);
    var retirement = 60 - age;

    if(retirement > 0){
        console.log(object.firstName + `retires in `+ retirement + `years` );
        
        else {
            console.log(object.firstName + `is already retired.`);
        }
    }
}

yearUntilRetirement({year : 1987, firstName : `John`});

//2.
const addNumber = (a, b, c, d, e, f, g) => {
    var numbers = (a, b, c, d, e, f, g) ;
    var sum = 0;
    //change to map function
    for (var i=0; i <numbers.length; i++){
                        sum += numbers [i];

    }
    return sum;
}
console.log(add.Number(1,2,3,4,5,6,7));

//3.
var phi = 3..14;
var power = 2;
var radius = 0;

var calculateArea = function (obj){
    return phi * Math.pow(obj.radius, obj.power);

};