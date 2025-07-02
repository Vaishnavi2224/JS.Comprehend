
let score= 33 //  its a number

console.log(typeof score)             //both give number type in output
console.log(typeof (score))            //both give number type in output

// String to number-----------

score= "33";       // its a string, written btw ""
let valueInNumber= Number(score);          // Way to conversion, syntax 
console.log(valueInNumber)                 // "33"string converted to 33 number
console.log(typeof valueInNumber)          // type of 33 is number , changed from string to number

//case
score= "33abc" // its a string
valueInNumber= Number(score)
console.log(valueInNumber)                 // "33abc"string converted to NaN, not a number gives
console.log(typeof valueInNumber)          // but its type is number

//case
score= null
valueInNumber= Number(score)
console.log(valueInNumber)                 // null converted to 0
console.log(typeof valueInNumber)          // types is number

//case
score= "hello"
valueInNumber= Number(score)
console.log(valueInNumber)                 // string converted to NaN
console.log(typeof valueInNumber)          // types is number


// number to string
 let someNumber= 33
 let stringNumber= String(someNumber)          //conversion way
 console.log(stringNumber)                       // 33 number to 33 string changed
 console.log(typeof stringNumber)               //type is number

 
//Boolean to number -----------
 score= true
valueInNumber= Number(score)
console.log(valueInNumber)                 // boolean True converted to 1
console.log(typeof valueInNumber)          // type is number
 // similarly false-> 0

// To Boolean conversion----------

let isLoggedIn= 1
let booleanIsLoggedIn= Boolean(isLoggedIn)          // conversion way
console.log(booleanIsLoggedIn)
console.log(typeof booleanIsLoggedIn)


isLoggedIn= ""
 booleanIsLoggedIn= Boolean(isLoggedIn)          // conversion way
console.log(booleanIsLoggedIn)                      // 0 gives
console.log(typeof booleanIsLoggedIn)

isLoggedIn= "hello"
 booleanIsLoggedIn= Boolean(isLoggedIn)          // conversion way
console.log(booleanIsLoggedIn)
console.log(typeof booleanIsLoggedIn)

 
 //  1-> true, 0-> false
 //  ""-> false
 //  "hello"-> true

 //string concatenation 
 console.log("1"+"2")
 console.log("1"+2+2)            //starting mai string, treat all string
 console.log(1+2+"3")            // end mai string, perfrom given operation first then conact with last string

// prefix ++count, postfix count++, +, -, /,*, %, **powerof

let value=4
let negValue= -value
console.log(negValue)