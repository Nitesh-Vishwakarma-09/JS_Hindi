// for of //higher order function or higher arrayloops

const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(num);    
}

const greetings="Hello World !"
for (const greet of greetings) {
   // console.log(`Each Character is ${greet}`);
    
}

//+++++++++++++++++++MAPS++++++++++++++++++++

const map=new Map()
map.set("IN","India")
map.set("USA","United State Of America")
map.set("FR","France")
map.set("IN","India") // that no add in because map only store unique values 
//console.log(map);

for (const [key ,value] of map) { // that for off loop is used for printing key and value both in a time by using the [] brackets
    console.log(key,":-",value);
    
    //++ Maps Are Itertable & Objects are not Iterateable 
}

const Myobject={
    'game1':'PUBG',
    'game2':'FS14'
} // in this object for off loop in work because this object are not iterateable 
