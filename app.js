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
console.log(typeof sum); 

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

// String method and concatenation.

const firstname= 'Sumair';
const lastname= 'Hassan';
const age = 29;
const str = 'Hello, My name is Sumair';
const tags = 'web design, web development, programming'

let val;

val = firstname+lastname;

//Concatenation
val = firstname + ' ' +lastname;

//Append
val = 'Hassan ';
val += 'Sumair';

val = 'My name is ' + firstname + ' and I am ' + age + ' years';

// Escaping
val = 'That\'s awesome';

// Length
val = firstname.length;

//concat()
val = firstname.concat(' ', lastname);

//Change case
val = firstname.toUpperCase();
val = lastname.toLowerCase();

val = firstname[0];

//indexOf()
val = firstname.indexOf('m');

// charAt()
val = firstname.charAt('5')

// Get last char
val = firstname.charAt(firstname.length - 1);

// substring()
val = firstname.substring(0,4);

//slice()
val = firstname.slice(0,4);
val = firstname.slice(-3);

//split()
val = str.split(' ');
val = tags.split(',');

//replace()
val = str.replace('Sumair', 'Hassan');

//includes()
val = str.includes('foo');

console.log(val); 

// Template literals

const name = 'Sumair';
const age = 29;
const job = 'Technical Writer';
const city = 'Oslo';
let html;
//with es6 template string
html = `
 <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
 </ul>
`;
document.body.innerHTML = html; */

// Arrays & Arrays Method
//create some arrays
const numbers = [34,56,78,34,68];
const numbers2 = new Array(22,3,33,44,55,66);
const fruit = ['Apples', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

//Get array length
val = numbers.length;
// Check if is array
val = Array.isArray(numbers);
// Get single value
val = numbers[2];
// insert into array
numbers[2] = 100;
// Find index of value
val = numbers.indexOf(56);

console.log(numbers);
console.log(val);