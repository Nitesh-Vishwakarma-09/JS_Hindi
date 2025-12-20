function setUsername(username){
    // complex DB Calls 
    this.username = username 
}

function CreateUser (username,email,password){
    setUsername.call(this,username) // that call method is use for another function executed in another function and this keyword is use for holding current context 
    this.email = email
    this.password = password
}
const babu = new CreateUser("babu","babu@fb.com",'234')
console.log(babu);
