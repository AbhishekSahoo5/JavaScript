let num=[3,54,1,2,4];

//for loop
for(let i=0;i<num.length;i++)
{
    console.log(num[i]);
}
console.log("-----------------------");

//for each loop
num.forEach((i)=>{
    console.log(i*i);
}) 

console.log("-----------------------");

//Array.from
//string --------> Array
let name="Abhishek";
let arr=Array.from(name);
console.log(arr);

//for of
//shortcut to access the element of array
for(let i of num)
{
    console.log(i);
}

//for in
for(let i in num){
    console.log(`key=${i}  value=${num[i]}`);
}

