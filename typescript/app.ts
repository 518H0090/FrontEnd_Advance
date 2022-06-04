// Type Variable
let aString = "Hi";

aString = "Hello World";

let aStringWithType: string;

aStringWithType = "Helalwa";

let aStringAssignInType: string = "Hello World";

let anyNum = 5;

let anyNumType: number;

anyNumType = 10;

let aBool: boolean = true;

// Any
let anyVar: any = "Stwa";

anyVar = 3;

// Union type
let year: string | number;

year = 5353;

year = "haha";

const parYear = parseInt(year);

let arrString: string[] = ["a", "b"];

arrString[0] = "gagwa";

arrString.push("HAHAW");

let arrBoolean: boolean[] = [true, false, true];

// Mix Array
let arrMix: (number | string | boolean)[] = [1, "a", false];

// Tuple
let arrTuple: [string, number] = ["a string", 5];

arrTuple = ["aa", 10];

// Object
let person = {
  name: "Hieu",
  age: 22,
};

person.age = 20;

// Custom types
type stringOrnumber = string | number;
let yearNE: stringOrnumber;

yearNE = 2022;
yearNE = "2022";

// Function
function calcSum(a: number, b: number): number {
  return a + b;
}

calcSum(2, 3);

// Function type
let calcSumFunc: (a: number, b: number, third?: number) => number;

calcSumFunc = (first: number, second: number, third?: number) => {
  if (third == null) {
    return first + second;
  } else {
    return first + second + third;
  }
};

calcSumFunc(3, 4);
calcSumFunc(3, 4, 5);

// Void
const sayHi = () => {
  console.log("Hi");
};

let voidFunc: (message: string) => void;

voidFunc = (message: string) => {
  console.log("OK Void " + message);
};

voidFunc("OK HELLO");
