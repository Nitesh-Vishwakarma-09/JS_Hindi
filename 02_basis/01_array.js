// Array 
// Define Array In Multiple Ways
const myArr =[0,1,2,3,4,5] // define a array in js 
const MyArr1 =["Nitesh","Hero","Dell"]
const MyArr2 = new Array(1,2,3,4)
console.log(MyArr1[1]);

// Array Method 
myArr.push(6) // this is used push element in array 
console.log(myArr);
myArr.pop()
console.log(myArr); // this used for remove last element from array 

myArr.unshift(9) // this is used add element in the first of array
console.log(myArr);
myArr.shift(); // this is used for remove first element from  array 
console.log(myArr);

console.log(myArr.includes(3)); // this is for include element in array that confirm in boolean value

console.log(myArr.indexOf(3)); // this is for index 

const newArr=myArr.join()// join is for use copy array and automatically converted to a string 
console.log(typeof(myArr));
console.log(typeof(newArr));

const myna=myArr.slice(1,3)
console.log(myna);





