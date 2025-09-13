const userEmail=[]

if(userEmail){
    console.log("We Got Email");
} else{
console.log("User Dont Have Email");

}

//falasy Values 
// false,0,-0,BigInt 0n ""-emptystring,null,undefined,NaN

// Truthy Values 
//"0" String andar zero h toh woh truthy value h 
// 'false' - ye bhi truthy value h because he is on the string 
//" " truthy value
// {}-empty object []-Empty array are called truthy value
// Empty Function(){} - is also called truthy value

// Agar USeremail me empty array to check kare 
if(userEmail.length ===0){
     console.log("Array Is Empty");
     
}
// Agar Empty Object aa gye tho
const emptyObj ={}
if (Object.keys(emptyObj.length ===0)) {
console.log("Object is empty")    
}

//Nullish Colescing Operator (??) : null,undefined