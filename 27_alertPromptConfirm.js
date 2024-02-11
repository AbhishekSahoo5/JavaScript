alert("Hey this is alert");


//prompt with default value
let a=prompt("Enter the value of a ","567");
document.write(a);
document.write(typeof a);
a=Number(a);
document.write(typeof a);


let developerName="Abhishek Sahoo";
let show=confirm("Do you want to see the developers name");
if(show)
{
    document.write(developerName);
}
else{
    document.write("Please allow me to write");
}




