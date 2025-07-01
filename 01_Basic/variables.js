// Let, const, var
// camelCase 
const accountId = 1264;              // value locked, no redeclaration, no updation
let accountEmail = "vaishnavi@google.com";         //no redeclaration, updation
var accountPassword="12345";                       // redeclartion and updation
accountCity="Udaipur";                             // not good way to reserve memory
let accountState;

// accountId= 1222;

// console.log(accountId)    Throw typeerror that is assignment to constant variable
 
accountEmail= "aman@google.com";
accountPassword= "2222";
accountCity= "Banglore";

console.table([accountId , accountEmail, accountPassword, accountCity, accountState]);

/* Note
  preffer not using var due to;
  Issue in block scope and functional scope 
/*