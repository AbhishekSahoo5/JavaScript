/*
Console Object Methods
assert()
clear()
log()
table()
warm()
error()
info()

*/

console.time("forLoop");
for(let i=0;i<5;i++)
{
    console.log(233);
}
console.timeEnd("forLoop");

//to differentiate between time taken by while loop and for loop

console.time("whileLoop");
let i=0;
while(i<5)
{
    console.log(233);
    i++;
}
console.timeEnd("whileLoop");

