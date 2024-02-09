//Q5
function mean(num1,num2,num3,num4,num5)
{
    meanValue=(num1+num2+num3+num4+num5)/5;
    return meanValue;
}
let meanOfNum=mean(1,2,3,4,5);
console.log(meanOfNum);

let mean1=(a,b,c,d,e)=>{
    return (a+b+c+d+e)/5;
}
console.log(mean1(1,2,3,4,5));

//Q1
let obj={
    Name:"Abhishek",
    RegdNo:2141019026,
    section:"D",
    College:"ITER"
}
for(let i in obj)
{
    console.log(`${i}  =  ${obj[i]}`);
}
//Q2
let arr=["Abhishek",2141019026,"D","ITER",null,undefined];
for(let i of arr)
{
    console.log(`${i} ${typeof i}`);
}