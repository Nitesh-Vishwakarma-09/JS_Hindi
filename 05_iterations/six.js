// const coding=["Hero","Honda","Bajaj","Yamaha","TVS"]

// const values=coding.forEach( (item) => {
// console.log(item);
// return item // but for each can not provide any return value that we use filter method 
// })

// console.log(values);


const Mynum=[1,2,3,4,5,6,7,8,9,10]
const val=Mynum.filter( (num) => (num>5))
 // that filter is method like for each type but for each loop has no return type and filter has return type and he also access by arrow function and with a vaild condition 
//console.log(val);

const Books =[
    {title : 'Book One',genre:'Friction',publish:'1981',edition:'1995'},
    {title : 'Book Two',genre:'History',publish:'1982',edition:'2000'},{title : 'Book Three',genre:'Science',publish:'1984',edition:'2002'},{title : 'Book Four',genre:'EVS',publish:'1985',edition:'1988'},   {title : 'Book Five',genre:'Hindi',publish:'1986',edition:'2002'},{title : 'Book Six',genre:'Friction',publish:'1998',edition:'2001'},{title : 'Book Seven',genre:'History',publish:'1997',edition:'2003'},{title : 'Book Eight',genre:'Science',publish:'1999',edition:'2006'},{title : 'Book Nine',genre:'EVS',publish:'2000',edition:'2008'},  {title : 'Book Ten',genre:'Hindi',publish:'2001',edition:'2007'}
]
//const userbooks=Books.filter( (bk) => (bk.genre ==='Hindi'))
let userbooks=Books.filter( (bk) => (bk.publish >= 1980) && bk.genre ==="Science")
console.log(userbooks)
