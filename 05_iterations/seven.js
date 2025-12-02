const MyNumbers=[1,2,3,4,5,6,7,8,9,10]

const val=MyNumbers.map( (num) => num+10)

// console.log(val); // map is also method that works same as filter or for each loop but map has return type without return declare 

const newnum=MyNumbers
                      .map( (num) => num *10)
                      .map((num) => num+1)
                      .filter( (num) => num>= 40 )

            // That process called Chaining that means in one time uses many method and filter at one time .....
console.log(newnum);
