//String Methods
let name="Abhishek\'s";
console.log(name);

console.log(name.length);    //it is a property. so no ()

console.log(name.toUpperCase);
console.log(name.toUpperCase());    //It is a method. so () is used

console.log(name.toLowerCase());

console.log(name.slice(0,4));
console.log(name.slice(4,10));
console.log(name.slice(0));

console.log(name.replace('A','z'));

let name1="Abhishek";
let name2="Sahoo";
console.log(name1.concat(" ",name2));

let str="     shiv      ";
console.log(str);
console.log(str.trim());

//strings are immutable

let fr="Shivika";
console.log(fr[0]);
// fr[0]=A;          //----------------->error
console.log(fr);

//Quick Quiz---> Use for loop to print a string
for(let i=0;i<fr.length;i++)
{
    console.log(fr[i]);
}

let n="Abhishek"+"sahoo";
console.log(n);

//every string returns a string. It doesnot change the existing strings
