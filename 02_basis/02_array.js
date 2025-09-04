const marvel_heros=["Thor","Ironman","Spiderman"];
const dc_heros=["Batman","Superman","Flash"];

//marvel_heros.push(dc_heros); // that push dc array in marvel array as data 
//console.log(marvel_heros);
//console.log(marvel_heros[3][0]); // access second array values because you push into first array

const allhero =marvel_heros.concat(dc_heros) // that method is used to concat two array but in a new array 
//console.log(allhero);

// two and more array add in array how 

const heros=[...dc_heros,...marvel_heros];
//console.log(heros);

const arrayinsidearray=[1,2,3,[4,5,6],7[8,[9,0]]]
// flat method is used solving complexing array inside array problem 
const convertarray=arrayinsidearray.flat(Infinity);

console.log(convertarray);


