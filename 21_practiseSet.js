//Q1
let arr=[1,2,3,4,5];
let userNum=10;
arr.push(userNum);
console.log(arr);


//Q2
// let a;
// do{
//     //a=prompt("Enter a number");
//     arr.push(a);
// }while(a!=0);
// console.log(arr);

//Q3
let arr1=[10,3,5,15,20,23,43,45];
let arr10=arr1.filter((i)=>{
    if(i%10==0)
    {
        return i;
    }
});
console.log(arr10);

//Q4
let arr2=[1,2,3,4,5];
let square=arr2.map((i)=>{
    return i**2;
})
console.log(square);


//Q5
let arr3=[1,2,3,4,5];
let fact=(i,j)=>{
    return i*j;
}
let factArr=arr3.reduce(fact);
console.log(factArr);