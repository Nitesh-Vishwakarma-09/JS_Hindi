const Myobject={
    js:"Javascript",
    cpp:"C++",
    py:"Python"
}
// In Objects there are for in loop used for finding & Printing values 

for (const key in Myobject) {
    //console.log(`${key} Shortcut is used for ${Myobject[key]}`);
    
   
    
} // for in direct key lete tho key hi aati issliye object inject kar object ke andar key ko dal dete 


const programming=["Js","Cpp","Java","py"]

for (const key in programming) {
  
    console.log(programming[key]);
    
} // for in loop me array me array ke saath key bhi dana padta hai nhi toh key hi key dange toh 0,1,2,3,4 isse key print hogi 