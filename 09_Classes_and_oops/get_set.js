class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }
     get password(){ // getter me koi apki class ki property access karta h toh apko kese dena h originally ya thodi modified means alag jese password pr get karega toh sharma automatically add ho jayega 
    return `${this._password}sharma`
    }
     set password(value){
     this._password = value
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email =value
    }
}

const Nitesh = new User("Nitesh@12gmail.com","nitesh1")
console.log(Nitesh.email);
console.log(Nitesh.password);

