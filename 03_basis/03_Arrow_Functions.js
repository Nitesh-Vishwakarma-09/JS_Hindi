const user={
    username:"Nitesh",
    price:999,
    WelcomeMessage:function(){
        console.log(`${this.username}, Welcome To Website`);
        // this function is used for current context of this scope  
    }
}

// user.WelcomeMessage()
// user.username="Raja"
// user.WelcomeMessage()

console.log(this); // Note :-    Output:-{} Because in node environment this keyword show the blank Currly Braces

// In This keyword use broswer console that mostly there global object is window 

