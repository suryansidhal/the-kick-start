// --- 1. OBJECT MANIPULATION & DESTRUCTURING ---

// Line 1: Standard object declaration
const userProfile = {
    firstName: "Charlie",
    lastName: "Dale",
    city: "New York",
    isOnline: true
};

// Line 6: Accessing object properties (dot and bracket notation)
console.log(userProfile.firstName);
console.log(userProfile['city']);

// Line 10: Object Destructuring (pulling properties into variables)
const { firstName, isOnline } = userProfile;
console.log(firstName); // "Charlie"

// Line 14: Rest/Spread Operator (...) for objects (copying/merging)
const defaults = { country: "USA", isOnline: false };
const fullProfile = { ...defaults, ...userProfile, age: 25 }; // order matters for overrides!
console.log(fullProfile.isOnline); // true (userProfile overrides defaults)

// Line 19: Object.keys(), Object.values(), Object.entries()
const keys = Object.keys(userProfile); // Returns an array of property names
console.log(keys);

// --- 2. ADVANCED ARRAY METHODS (Iterators) 
const numbers = [10, 20, 30, 40];

// Line 25: .forEach() - Executes a function for each array element
numbers.forEach((num, index) => {
    console.log(`Element at ${index}: ${num}`);
});

// Line 30: .map() - Creates a NEW array by transforming every element
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [20, 40, 60, 80]

// Line 34: .filter() - Creates a NEW array with elements that pass a test
const largeNumbers = numbers.filter(num => num > 25);
console.log(largeNumbers); // [30, 40]

// Line 38: .reduce() - Accumulates array values into a single value
// The 0 is the initial value of the accumulator ('acc')
const sum = numbers.reduce((acc, current) => acc + current, 0);
console.log(sum); // 100

// Line 44: .find() - Returns the VALUE of the FIRST element that passes a test
const firstOver20 = numbers.find(num => num > 20);
console.log(firstOver20); // 30

// Line 48: .some() and .every() - Check if *any* or *all* elements pass a test
const hasLargeNum = numbers.some(num => num > 50); // false
const allPositive = numbers.every(num => num > 0);  // true

// --- 3. SCOPE, HOISTING, & CLOSURES ---

// Line 53: Global Scope: accessible everywhere
const globalVar = "I am global";

// Line 56: Block Scope: 'let' and 'const' are restricted to their block {}
if (true) {
    let blockVar = "I am block-scoped";
    // console.log(blockVar); // Accessible here
}
// console.log(blockVar); // Error: blockVar is not defined outside {}

// Line 63: Hoisting (Variables declared with 'var' are hoisted, but not initialized)
console.log(hoistedVar); // undefined (var is hoisted)
var hoistedVar = "I am hoisted";

// Line 67: Closures (A function remembers its outer scope variables)
function makeCounter() {
    let count = 0; // The outer variable
    return function() {
        count++;
        return count;
    };
}
const myCounter = makeCounter();
console.log(myCounter()); // 1
console.log(myCounter()); // 2 (The inner function "closes over" and preserves 'count')

// --- 4. DOCUMENT OBJECT MODEL (DOM) FUNDAMENTALS ---
// (These lines assume a browser environment)

// Line 80: Selecting a single element by its ID
// const header = document.getElementById('main-title');

// Line 83: Selecting the first element matching a CSS selector
// const primaryBtn = document.querySelector('.primary');

// Line 86: Selecting ALL elements matching a CSS selector (returns a NodeList)
// const allListItems = document.querySelectorAll('ul li');

// Line 89: Modifying element content
// primaryBtn.textContent = 'Clicked!'; // Changes the text inside the element

// Line 92: Modifying element attributes (e.g., class)
// primaryBtn.classList.add('active');
// primaryBtn.classList.remove('inactive');

// Line 96: Event Listener (Responding to user interaction)
/*
// primaryBtn.addEventListener('click', () => {
//    console.log('Button was clicked!');
//    header.style.color = 'red'; // Inline styling change
// });
*/
//create a game to find the gamenumber by keep asking the user an input
let gamenum=30;
let userin=prompt("randomnum");
while(gamenum!=userin){//keeps taking the input
     userin=prompt("again");
}
console.log("hurrah!");

//STRINGS
//-->//nameofsringt.length
//-->//indices, strname[indices string with 0]

//TEMPLATE LITERAL ARE SPECIAL KIND OF STRING
let special=`template literal ${1+2+3}`; //CAN EVEN SOLVE EXPRESSINS
console.log(special);
let uselit=`teh cost of ${singham.dso} is ${singham.vvyu}`; //can print without commas using template literal
console.log(uselit);
console.log("the price of",singham.dso,"is",singham.vvyu); //template literals prevents such mess

//BUIT IN METHODS-- don,t alter the org str, makes another and store
//strname.toUpperCase() 
//strname.toLowerCase()
//strname.trim()-->removes the whitespace from strting and end
//strname.slice(start,end?{noninclusive and optional})-->returns part of string
//strname.concat(strname.2)-->joins two string
//strname.replace(oldval,newval)-->only first occurance
//strname.replaceAll(oldval,newval)-->replaces all values in the string, all occurance
//strname.charAt(idx)

let username=prompt("enter your name");
let sugge="@"+ username + username.length;
console.log(sugge);
//arrays
let marks=[1,2,3,78,90];
console.log(marks.length) //property to find the length of the array
//array is an object datatype
//array is mutable. in console write, marks[indx]=newvalue;
//accessing the value of arrayusing for of loop
let sum=0;
for(let mark of marks){
    sum+=mark;
}
console.log(sum);

//discount question
let price=[250,890,765,789,345];
let disc=0
for(let val of price){
    disc=10/100*val;
    val-=disc;
    console.log(val);
}

//array methods

//push()--> put values at end //namearr.push("val")
//pop()-->dlt from end and return //namearr.pop()
//toString()-->convert array to string // namearr.toString() //creates new arr of strings
//namearr.concat(secondnamearr)--> adds multiple arrays and returns it
//namearr.unshift("value")-->adds the value to the start
//namearr.shift()-->dlt from start and returns it
//namearr.slice(startindx,endindx), end idx isn't included, gives you the part, don't change the org array
//namearr.splice(startindx,how many elements to dlt from the startindx it includes the starting indx, new ele to add in the startindx)
let quest=[1,2,3,5,6];
quest.splice(2,1,101); //add element
// pass only single ele in arr then dlt everything afterwards


