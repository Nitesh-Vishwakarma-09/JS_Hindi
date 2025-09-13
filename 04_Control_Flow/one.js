// const score=200
// if(score>100){
//     let power="Fly";
//     console.log(`User Power: ${power}`);
// }

// Nesting 

// const balance=1000;
// if(balance<500){
// console.log("less than 500");
// }else if(balance<750){
//     console.log("less than 750");
// }else if(balance<900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1100");
// }

const UserLoggedin=true
const debitcard=true
const loggedinFromGoogle=false
const loggedinFromEmail=true

if(UserLoggedin && debitcard){
    console.log("Allow To Access Content");    
}

if(loggedinFromGoogle || loggedinFromEmail){
    console.log("User Logged In ");

}

