// const user = {
//     username: "Nitesh",
//     logincount: 8,
//     signedin:true 
// }

// console.log(user.username);


function user(username,logincount,isLoggedIn){
    this.username = username
    this.logincount = logincount
    this.isLoggedIn = isLoggedIn
}

const userone=new user("Nitesh",12,true);
const usertwo = new user("Raja",10,false)

console.log(userone);
console.log(usertwo);

// (new)keyword is provide a new instance everytime without new keyword the values are overright in a users that completely wrong 

// when you use new keyword that first all of a empty object created that are called instance 

// a constructor function called because of new keyword 

// this keyword is used to inject argument in instances 