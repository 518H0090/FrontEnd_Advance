"use strict";
// Type Variable
let aString = "Hi";
aString = "Hello World";
let aStringWithType;
aStringWithType = "Helalwa";
let aStringAssignInType = "Hello World";
let anyNum = 5;
let anyNumType;
anyNumType = 10;
let aBool = true;
// Any
let anyVar = "Stwa";
anyVar = 3;
// Union type
let year;
year = 5353;
year = "haha";
const parYear = parseInt(year);
let arrString = ["a", "b"];
arrString[0] = "gagwa";
arrString.push("HAHAW");
let arrBoolean = [true, false, true];
// Mix Array
let arrMix = [1, "a", false];
// Tuple
let arrTuple = ["a string", 5];
arrTuple = ["aa", 10];
// Object
let person = {
    name: "Hieu",
    age: 22,
};
person.age = 20;
let yearNE;
yearNE = 2022;
yearNE = "2022";
// Function
function calcSum(a, b) {
    return a + b;
}
calcSum(2, 3);
// Function type
let calcSumFunc;
calcSumFunc = (first, second, third) => {
    if (third == null) {
        return first + second;
    }
    else {
        return first + second + third;
    }
};
calcSumFunc(3, 4);
calcSumFunc(3, 4, 5);
// Void
const sayHi = () => {
    console.log("Hi");
};
let voidFunc;
voidFunc = (message) => {
    console.log("OK Void " + message);
};
voidFunc("OK HELLO");
