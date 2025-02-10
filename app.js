//2
var Kendrick = 11;
var Lamar = 12;
sumArg = Kendrick + Lamar;

function sumArg() {
    return Kendrick + Lamar;
}

console.log(sumArg)


//4
var Kendrick = 11;
var Lamar = 12;
difArg = Kendrick - Lamar;

function difArg() {
    return Kendrick - Lamar;
}

console.log(difArg)

//5
var Kendrick = 11;
var Lamar = 12;
multiArg = Kendrick * Lamar;

function multiArg() {
    return Kendrick * Lamar;
}

console.log(multiArg)

//6
var Kendrick = 11;
var Lamar = 12;
difArg = Kendrick / Lamar;

function difArg() {
    return Kendrick / Lamar;
}

console.log(difArg)

//7

var Kendrick = 11;
var Lamar = 12;

// 1. sumArg (Addition)
const sumArg = (num1, num2) => num1 + num2;
console.log(sumArg(Kendrick, Lamar));

// 2. difArg (Subtraction)
const difArg = (num1, num2) => num1 - num2;
console.log(difArg(Kendrick, Lamar));

// 3. multiArg (Multiplication)
const multiArg = (num1, num2) => num1 * num2;
console.log(multiArg(Kendrick, Lamar));

// 4. divArg (Division)  (Corrected variable name to avoid conflict)
const divArg = (num1, num2) => num1 / num2; // Corrected function name
console.log(divArg(Kendrick, Lamar));


