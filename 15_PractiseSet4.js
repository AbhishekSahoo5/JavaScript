//Strings

//Q1
console.log("har\"".length);

//Q2
let name="Abhishek Sahoo"; 
console.log(name.includes("sahoo"));
console.log(name.includes("Sahoo"));

console.log(name.startsWith("Abhis"));
console.log(name.startsWith("Abhiz"));

console.log(name.endsWith("sahu"));
console.log(name.endsWith("Sahoo"));
console.log(name.endsWith(""));
console.log(name.endsWith("o"));


//Q3
console.log(name.toLowerCase());

//Q4
let str2="Please give Rs. 1000";
let amt=str2.slice("Please give Rs. ".length,str2.length);
console.log(amt);
console.log(typeof amt);
amt=Number(amt);
console.log(typeof amt);




//Q5
/*
No I am not able to do it, because String are immutable.SO, we cannot change the existing content.
*/
