console.log("Var let const");

var a=45;
let b="harry";
{
    let b="this";
    console.log(b);
}
console.log(b);

//let is blocked scoped
//var is global scope


/*
-->var is globally scoped while let & const are block scoped
--> var can be updated & re-declared within its scope.
--> let can be updated but not redeclared.
--> const can neither be updated nor be re-declared
--> var variables are initialized with undefined whereas let and const variables are not initialized.
-->const must be initialized during declaration unlike let and var
*/


