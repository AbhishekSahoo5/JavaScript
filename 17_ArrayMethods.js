//Array Methods
let num=[1,2,3,34,44];

//toString()
let b=num.toString();
console.log(b);
console.log(typeof b);

//join()
let c=num.join("_");
console.log(c);
console.log(typeof c);

//pop()------> remove the last and return the deleted elememts
let d=num.pop();
console.log(d);
console.log(num);

//push()-----> add element at the end and return the length of new array
let e=num.push(100);
console.log(e+"--->length");
console.log(num);

//shift()-----> remove the first element
let  f=num.shift();
console.log(f);
console.log(num);

//unshift------>add element at the begining and return the length of new array
let g=num.unshift(1000);
console.log(g+"---->length");
console.log(num);

