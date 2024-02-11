//Q1

// let age=prompt("Enter your age");
// age=Number(age);

// //can drive function
// const canDrive=()=>{
//     age>=18?true:false;
// }

// if(canDrive(age))
// {
//     alert("You can drive");
// }
// else{
//     alert("You cannot drive");
// }




// //Q2
// let runAgain=true;
// while(runAgain)
// {
//     let age=prompt("Enter your age");
//     if(age>18)
//     {
//         alert("You can drive");
//     }
//     else{
//         alert("You cannot drive");
//     }
//     runAgain=confirm("Do you want to check again");
//     if(!runAgain)
//     {
//         alert("Thanx for checking");
//     }
// }



// //Q3
// let runAgain=true;
// while(runAgain)
// {
    
//     let age=prompt("Enter your age");
//     if(age<0)
//     {
//         console.error("Age cannot be negative");
//         break;
//     }
//     else if(age>18)
//     {
//         alert("You can drive");
//     }
//     else{
//         alert("You cannot drive");
//     }
//     runAgain=confirm("Do you want to check again");
//     if(!runAgain)
//     {
//         alert("Thanx for checking");
//     }
// }


// //Q4
// let num=prompt("Enter your number");
// num=Number.parseInt(num);
// if(num>4)
// {
//     location.href="https://google.com";
// }

//Q5
let color=prompt("Enter color you want");
document.body.style.background=color;
document.write(color);