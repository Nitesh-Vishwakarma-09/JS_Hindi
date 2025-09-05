// Singleton 

// objects literations
const Sym=Symbol("Key1") // symbol define 
const JsUser={
    name:"Nitesh",
    age:18,
    [Sym]:"key1" ,// access symbol through correct synatx 
    location : "Indore",
    email: "Nitesh12@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]

    
    
}
console.log(JsUser.email); // objects access by 1st method 
console.log(JsUser["location"]); // objects access by 2nd method 
console.log(JsUser[Sym]);

JsUser.email="Nitesh12@google.com" // to change value in object
//Object.freeze(JsUser) // is used to freeze object or and not change anything in object from applied this method...
JsUser.email="Nitesh12@microsoft.com"
//console.log(JsUser);

JsUser.greeting=function()
{
    console.log("Hello JS User");
    
}
JsUser.greeting_two=function(){
    console.log(`Hello JS User,${this.name}`);// using same name reference we use backtick ``
    
}
console.log(JsUser.greeting());
console.log(JsUser.greeting_two());
