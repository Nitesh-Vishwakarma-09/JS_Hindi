

// class User{
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     encryptPassword(){ // this method is used for encrytion of password this is method provided by classes 
//     return `${this.password}abc`
// }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const chai = new User("chai","chai12@gmail.com","235")

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());
// behind the scene without classes 

function user(username,email,password){ // this also works  
    this.username =username;
    this.email = email;
    this.password = password;

}
user.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
user.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const asus =new user ("teaasus","asus@gmail.com","12345")

console.log(asus.encryptPassword());
console.log(asus.changeUsername());

