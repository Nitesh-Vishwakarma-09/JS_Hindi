// Immediately Invoked Function Expression (IIFE)

function DB(){
    console.log('DATABASE CONNECTED');// simple function 
}

// IIFE FUNCTION is known as imediaetly invoked for Global Scope Pollution 

(function DB1(){
    console.log('DATABASECONNECTED'); 
})() ;
// to create IIFE Function Just NOrmal Function Rep in Pranthises () is called IIFE

/// IIFE USING ARROW FUNCTION 

( (name) => {
    console.log(`DATABASE CONNECT ${name}`);
})("Nitesh")  

//--------------------------------------------------