// types of loops
/*
for loop
for in loop
for of loop
while loop
do-while loop
*/

//print sum of n natural number
let n=10,sum=0;
for(let i=1;i<=n;i++)
{
    sum+=i;
}
console.log(sum);

//for in loop
let obj={
    harry:90,
    subh:91,
    rivika:34,
    abhishek:32,
    shiv:12
}
for(let i in obj)
{
    console.log("Marks of "+i+" is  "+obj[i]);
}
//---> for in loop also works with array


//for of loop
//objest must be iterable to use for of loop
for(let i of "harry")
{
    console.log(i);
}

//difference between for of and for in