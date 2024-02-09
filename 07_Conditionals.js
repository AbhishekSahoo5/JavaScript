//prompt for input
//alert just notify

Number, String, undefined, null
a="78";
a=Number(a);   //converting the string to a number

console.log(typeof a);

if(a>0)
{
    console.log("This is a valid age");
}

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

//Ternary Operator
let age=20;
console.log("You can",age>18?"drive":"not drive");
