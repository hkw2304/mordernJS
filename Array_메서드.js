

Array.isArray([1,2,3]); //true
Array.isArray(new Array()); //true
Array.isArray({}); //false
Array.isArray(null); //false
/*
let arr = [1,2,3,4,5];
console.log(arr.indexOf(2)); // 1
console.log(arr.indexOf(8)); // -1

let food = ['apple', 'orange', 'banana'];
console.log(food.includes('apple')); //true
console.log(food.includes('melon')); //false
*/

/*
const arr = [1,2,3,4];
let result = arr.push(5,6);
console.log(result); // 6
console.log(arr); // [1,2,3,4,5,6]
*/

/*
const arr = [1,2,3,4];
const result = arr.pop();
console.log(result); // 4
console.log(arr); // [1,2,3]
*/
/*
const arr = [3,4];
let result = arr.unshift(1,2);
console.log(result); // 4
console.log(arr); // [1,2,3,4]
*/

/*
const arr = [1,2,3,4,5];
let result = arr.shift();
console.log(result); // 1
console.log(arr); // [2,3,4,5]
*/
/*
const arr = [1,2];
const arr2 = [3,4];
let arr3 = arr.concat(arr2);
console.log(arr3); // [1,2,3,4]
*/

/*
const arr = [1,2,3,4,5,6,7,8];
let result = arr.splice(1,3,10,20,30);
console.log(result); // [2,3,4]
console.log(arr); // [1,10,20,30,....];

result = arr.splice(1,20,30);
console.log(arr);
*/
/*
const arr = [1,2,3];
let result = arr.slice(0,2);
console.log(result) // [1,2]
console.log(arr); [1,2,3]
result = arr.slice(-1);
console.log(result); // 3
*/

/*
const arr = [1,2,3,4,5];
let result = arr.join();
console.log(result); // 1,2,3,4,5
result = arr.join(':');
console.log(result); // 1:2:3:4:5
*/

/*
const arr = [1,2,3,4];
arr.reverse();
console.log(arr); // [4,3,2,1]
*/

const arr = [1,2,3,4,5];
arr.fill(0);
console.log(arr); // [0,0,0,0,0]

const arr2 = [1,2,3,4,5];
arr2.fill(0,2, 4);
console.log(arr2); // [1,2,0,0,5]