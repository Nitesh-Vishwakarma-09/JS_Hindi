

class User{
     constructor(username){
        this.username = username
     }

     logMe(){
        console.log(`USERNAME IS ${this.username}`);
        
     }
}

  class Teacher extends User{
    constructor(username,email,password){
        super(username) // inherits user classes add access username
        this.email =email
        this.password = password
    }
    addCourse(){
        console.log(`A New Course Added By ${this.username}`);
        
    }
  }

  const chai= new Teacher ("Chai","chai@teacher.co.in","123345")

  chai.addCourse()

  const masalachai = new User("Masalachai")

  masalachai.logMe()