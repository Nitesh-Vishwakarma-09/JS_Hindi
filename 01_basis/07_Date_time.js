// Dates 
/*
let Mydate=new Date();
console.log(Mydate);// output:- 2025-08-31T15:48:46.494Z which is not readable
console.log(Mydate.toString()); //  output :- Sun Aug 31 2025 15:53:03 GMT+0000 (Coordinated Universal Time)
console.log(Mydate.toDateString()); // output :- Sun Aug 31 2025

console.log(Mydate.toISOString()); // output :-2025-08-31T15:55:41.799Z

console.log(Mydate.toJSON()); // output :- 2025-08-31T15:56:28.177Z

console.log(Mydate.toLocaleDateString()); // output :- 8/31/2025

console.log(Mydate.toLocaleString()); // output:- 8/31/2025, 3:59:15 PM

// Create Your Manual Date 

let MyCreateDate =new Date (2023,0,23);
console.log(MyCreateDate.toDateString()); // 1st Method To Declare Date 

// 2nd Method To Declare Date In YY-MM-DD 
let createdate=new Date("2024-06-22")
console.log(createdate.toDateString());
*/
// 3rd method to declare date in mm-dd-yy
let createdate=new Date("06-22-2003")
// console.log(createdate.toLocaleString());

// TIME STAMP

let myTimeStamp= Date.now()
//console.log(myTimeStamp);
//console.log(createdate.getTime());

//console.log(Date.now());

let newdate=new Date
console.log(newdate.getMonth()+1 ); // months -1 // that i am add +1 in last because in getMonth method months started from 0 ; 

console.log(newdate.getDay()); // days are started from 0 = sunday & 1 = Monday










