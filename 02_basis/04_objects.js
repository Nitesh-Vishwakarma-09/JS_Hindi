const TinderUser={}

TinderUser.id="123abc"
TinderUser.name="Kutta"
TinderUser.isLoggedIn=false

//console.log(TinderUser);

const regular_user={
    email:"someone@google.com",
    fullname:{
        userfullname:{
            firstname:"Nitesh",
            lastname:"Sharma"

        }// this object ke andar object h isko access karne ke liye . . . ke use karke access kar skte 
    }
    
    

}

//console.log(regular_user.fullname.userfullname); // this example how object of object is accessed by the method 


// how to object merge in js 

const obj1={ 1:"a",2:"b"} //create 1st object
const obj2={3:"c",4:"d"} // create 2nd object

//const obj3=Object.assign(obj1,obj2) // that assign method is used to combine 2 object to in a single object 
obj3={...obj1,...obj2} // combine 2 object by spread operator ...
console.log(obj3);

