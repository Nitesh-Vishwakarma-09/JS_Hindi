class User{
  constructor(username){
    this.username = username 
  }
  logMe(){
   console.log(`UserName :${this.username}`);
   
  }
static createId(){ // 
    return `123`
  }
}
 
const nitesh = new User("Nitesh")
console.log(nitesh.createId());
