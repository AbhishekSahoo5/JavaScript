//Some more Array Elements
let num=[1,2,3,4,5,6,7,8,9];
console.log(num.length);
delete num[0];
delete num[7];
console.log(num);
console.log(num.length);

//Interview Questions
//What the length of the array after deleting the elements???????????
//Ans---> Array length will be the same after deletion

//concat----------> returns new array
let num2=[10,11,13,14,15];
let num3=[100,200,300]
let newArray=num.concat(num2,num3);
console.log(newArray);

let arr=[10,899,2,3,45,90];
let arr1=[89,88,87,86,85,84,83];
arr.sort();       //it sort alphabatically
arr1.sort();       
console.log(arr);
console.log(arr1);

//to sort in ascending order
let compare=(a,b)=>{
    return a-b;
}
arr.sort(compare);
console.log(arr);

//to sort in descending order
let compare1=(a,b)=>{
    return b-a;
}
arr.sort(compare1);
console.log(arr);

//reverse()
arr.reverse();
console.log(arr);

//splice and slice
let ar=[1,2,3,4,5,6,7,8,9,10];
//splice(start,no of element to remove, new element to insert)
let deletedVal =ar.splice(2,3,1021,1022,1023);
console.log(ar);
console.log(deletedVal);

let sliceAr=ar.slice(2,5);
console.log(sliceAr);

//slice doesnot manipulate the original array
//splice does manipulate the original array