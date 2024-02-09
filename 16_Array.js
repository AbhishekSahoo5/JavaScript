let marks=[91,82,63,84,null,false,"notPresent"];
console.log(marks);

console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);
console.log(marks[5]);
console.log(marks[6]);
console.log(marks[7]);       //undefined as it doesnot exist

console.log("No. of elements in marjs array= "+marks.length);

//Adding elements to the array
marks[7]=100;
console.log(marks);

//changing elements in array
marks[0]=0;
console.log(marks);

//Arrays are mutable and can be changed

console.log(typeof marks);

//Quick Quiz
let arr=[1,2,3,4,5,6,7,8,9,10];
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}