//Q1
let age=3;
if(age>=10 && age<=20)
{
    console.log("Yes age is between 10 and 20");
}
else{
    console.log("No age is between 10 and 20");
}

//Q2

//switch
let month=7;
switch(month){
    case 1: console.log("January");break;
    case 2: console.log("February");break;
    case 3: console.log("March");break;
    case 4: console.log("April");break;
    case 5: console.log("May");break;
    case 6: console.log("June");break;
    case 7: console.log("July");break;
    case 8: console.log("Auguest");break;
    case 9: console.log("September");break;
    case 10: console.log("October");break;
    case 11: console.log("November");break;
    case 12: console.log("December");break;
}


//Q3
let num=20;
if(num%2==0 && num%3==0)
{
    console.log("Yes, The number is divisible by 2 and 3");
}
else{
    console.log("No, The number is not divisible by 2 and 3");
}

//Q4

if(num%2==0 || num%3==0)
{
    console.log("Yes, The number is divisible by 2 or 3");
}
else{
    console.log("No, The number is not divisible by 2 or 3");
}

//Q5

age=2;
let a=(age>18?"You can drive":"you cannot drive");
console.log(a);