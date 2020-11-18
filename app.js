//log to console
/*console.log("Hello World");
console.log(123);
console.log(true);
var greeting = "Hello";
console.log(greeting);
console.log([1,2,3,4]);

console.log({a:1, b:2});
console.table({a:1, b:2});

console.error("This is some error");
console.clear();
console.warn("This is some warning");

console.time('Hello');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.timeEnd('Hello');

let name='sumair';
console.log(name);
name='hassan';
console.log(name);

const name1 = 'fahad';
console.log(name1);
name1='shafique';
console.log(name1);

const person = {
    name: 'sumair',
    age: '26'
}
person.age='28'
console.log(person); 

// Data types in JS. Primitive Data Type
// String
const name = 'Sumair Hassan';
//Number
const age = 25;
//Boolean
const hasKid = false;
//Null
const car = null;
//Undefined
let test;
//Symbol
const sym = Symbol();

// Reference DataType
//Array
const hobbies = ['movies','music'];
//object literal
const address = {
    city: 'Oslo',
    Country: 'Norway'
}
console.log(typeof address);

const today = new Date();
console.log(today);
console.log(typeof today);

// Type conversion

let val;
//number to string
val = String(555);
val = String(4+4);
// Bool to string
val=String(true);
// Date to string
val = String(new Date());
// Array to string
val=String([1,2,3,4]);

//to string
val = (5).toString();
val = (true).toString();

//String to number
val=Number('5');
val=Number(true);
val=Number(false);
val=Number(null);
val=Number('hello');
val=Number([1,2,3]);

val=parseInt('100.30'); // on numbers
val=parseFloat('100.30');


//output
console.log(val);
console.log(typeof val);
// console.log(val.length) apply only on string
console.log(val.toFixed(2)); 

const val1= String(5);
const val2= 6;
//const sum = val1+val2;
const sum = Number(val1+val2);
console.log(sum);
console.log(typeof sum); */

// Numbers & Math Object
num1 = 2;
num2 = 22;
// simple math with numbers
val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1 / num2;
val = num1 % num2;

// Math object
val = Math.PI;
val = Math.E;
val = Math.round(2.4);
val = Math.ceil(2.4);
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8, 2);
val = Math.min(2, 33, 4, 1, 55, 6, 3, -2);
val = Math.max(2, 33, 4, 1, 55, 6, 3, -2);
val = Math.random();

val = Math.floor(Math.random() * 20 + 1);

console.log(val);
