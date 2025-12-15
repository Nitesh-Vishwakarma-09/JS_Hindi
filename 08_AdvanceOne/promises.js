// Creating Promises in javaScript 

const PromiseOne= new Promise(function(resolve,reject){
    // Do an async task 
    // DB Calls ,Cryptography ,newtork call
    setTimeout(function(){
        console.log("Async Task Is complete");
        resolve();
    } ,1000)
})
// In Promises .then Direct Connection with resolve 

PromiseOne.then(function(){
    console.log("promised consummed ");
    
})
//------------------- 2nd Way To Create a Promises 
 
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve()
    } ,1000)
}).then(function(){
    console.log("Async 2 resolved ");
    
}) // this promises is created without any variable hold that 

const promiseThree= new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Nitesh" ,email:"nitesh7415663723@gmail.com"})
    },1000)
})
promiseThree.then(function(anyname){
    console.log(anyname)
}) // In third you see that how data interact with then() method 


const promisefour= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =false
        if(!error){
            resolve({username: "Nitesh",password:"123"})
        }else{
            reject("Error Something Went Wrong")
        }
    },1000)
})
promisefour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() =>console.log("The Promised is either resolved or rejected"))

// in promises catch () method is directly connected with reject and the finally () method is work as default that promised are complete or reject

const promisefive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =true
        if(!error){
            resolve({username:"Nitesh",email:"Nitesh12@gmail.com"})
        }else{
            reject("Error:Something JS Went Wrong")
        }
    } ,1000)
})
async function conusmedfivepromised(){
    try {
        const response = await promisefive
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
}
    conusmedfivepromised(); // async bhi ek method h promised ko handle aur consumed karne par isme try - catch ka use hota try ke andar response diya jata mtlb working code and catch m (error) 

    // aap chahiye toh promisedfour wali method bhi use kar skte h .then.catch.finally walii dono sahi method hai 

    // async function getalluser(){
    //     try {
    //       const response = await fetch("https://jsonplaceholder.typicode.com/users")
    //       const data=  await response.json()
    //       console.log(data);
          
    //     } catch (error) {
    //         console.log("E:",error);
            
    //     }
    // }
    // getalluser() fetch function using url data in string convert it json by async and await method 

    // -- 2nd Using .then.catch.finally method 

    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=> {
        return response.json()
    })
    .then((data) => {
        console.log(data);
        
    }).catch((error)=> console.log(error)
    )