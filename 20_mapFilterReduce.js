//map. filter, reduce

let arr=[45,23,21];
let a=arr.map((value)=>{
    console.log(value);
    return value+10;
})
console.log(a);
console.log("-------------------------");
a=arr.map((value,index,array)=>{
    console.log(value,index,array);
    return value+index;
})
console.log(a);

//why use map??
//--> to create a new array with some different values

//difference betwee map and forEach
/*
---> map create a new array
---> forEach doesnot creates a new array
*/

console.log("---------------------------------");

//Array filter method
let arr2=[45,23,21,0,3,5];
let a2=arr2.filter((i)=>{
    return i<10;
})
console.log(a2);

//filter doesnot modify the original array

console.log("---------------------------------");

let arr3=[1,2,3,5,2,1];
const red_func=(h1,h2)=>{
    return h1+h2*2;
}
/*
How is reduce working in the above function
1+2=3
3+3=6
6+5=11
11+2=13
13+1=14(ans)
*/
let newArr3=arr3.reduce(red_func);
console.log(newArr3);
//recomend explanation code with harry 
//javascript lecture 20, Time-->10:30




