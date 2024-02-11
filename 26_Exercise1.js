let number=Math.floor((Math.random()*100)+1);
let chances=0;
let guess=prompt("Enter a number between 1 and 100");
guess=Number(guess);

while(guess!=number)
{
    if(guess>number)
    {
        guess=prompt("You entered a Large Number");
        guess=Number(guess);
        chances++;
    }
    else if(guess<number)
    {
        guess=prompt("You entered a Small Number");
        guess=Number(guess);
        chances++;
    }
}
if(guess===number)
{
    alert(`You guessed the correct answer \n
            Chances taken= ${chances} and Score=${100-chances} `);
}