if(true) 
    {
    let a=10;
    const b=20;
    var c=30;
    } //  that create scope that variable inside in currly braces 

   // console.log(a);  that not print because is defined in outside body that scope 
    // console.log(b); that not print because is defined in outside body that scope 
   // console.log(c); // but c is print because var is not scope that by var is not use java scripyt 
    
    //+++++++++++++++++++++++++ INTERESTING +++++++++++
console.log(addone(5)); // in this simple we can access function in before declarition of function
    function addone(num1){ // simple function declare example 
        return num1 +1
    
    }
    console.log(b(5)); //Cannot access 'b' before initialization this type error 
    
    const b=function two(num1){ // because this is used in mini hosting & this function declare in a variable 
        return num+1
    }

