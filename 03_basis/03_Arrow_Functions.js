const user={
    username:"Nitesh",
    price:999,
    WelcomeMessage:function(){
        console.log(`${this.username}, Welcome To Website`);
        // this function is used for current context of this scope  
    }
}

// user.WelcomeMessage()
// user.username="Raja"
// user.WelcomeMessage()

//console.log(this); // Note :-    Output:-{} Because in node environment this keyword show the blank Currly Braces

// In This keyword use broswer console that mostly there global object is window 

// function chai(){    /// in that function we use this function and he cannnot worked in function this keyword worked as on object 
//     let username = "Nitesh"
//     console.log(this.username);
    
// } // that output comes undefined 
// chai() 

// 2nd type to declare function 

// const chai=function(){
//       let username = "Nitesh"
//       console.log(this.username);

// }

// chai() // that output also comes undefined beacuse this cannnot work 

// Define to declare arrow function in js 

const arr=()=>{
    let username="Nitesh "
    console.log(this.username);
    
} 
arr() // and also this keyword is not work in arrow function 

// BAsic synatx of arrow-- ()=>{}

    // Implisit Return that 
    const addtwo=(num1,num2)=> (num1+num2) // that the implisit return that rep in braces and not need to return type that implisit also worked without return keyword  

    console.log(addtwo(6,7))

    