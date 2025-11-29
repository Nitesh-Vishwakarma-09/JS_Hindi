const coding=["Hero","Honda","Bajaj","Yamaha","TVS"]

coding.forEach( (item)=>{
//console.log(item);

}) // for each is also a array method inbuilt or loop that used by a call back function that call back function has no name and decalre with a parametre and print the parameter that works ....

// for each me ek tho 3 no line arrow function ke through array ki value print hoti aur function for each ke andar hi aur ek alag se function declare karke bhi hoti hai...

function printme(item){
    //   console.log(item);
       
}
coding.forEach(printme) // that used to declare a function method 


const myadd=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"python",
        languageFileName:"py"
    },
    {
        languageName:"java",
        languageFileName:"java"
    }
]

myadd.forEach( (item) => {
    console.log(item.languageFileName);
    
} ) // kisi array ke andar object ki values access karne ke liye for each ka use karenge woh bhi arrow function wali method and acccess karke console log ho jayega 