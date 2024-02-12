function computerChoice(){
    let min=0;
    let max=30;
    let num=Math.floor(Math.random()*(max-min)+1);

    let compChoice;
    if(num>=0 && num<=10)
    {
        compChoice="stone";
    }

    else if(num>=11 && num<=20)
    {
        compChoice="paper";
    }

    if(num>=21 && num<=30)
    {
        compChoice="scissors";
    }
    return compChoice;
}
function UserChoice()
{
    let userInp=prompt("Enter your choice \n 1--->stone \n 2-->paper \n 3--->scissors) ");
    let userChoice;
    if(userInp==1)
    {
        userChoice="stone";
    }

    else if(userInp==2)
    {
        userChoice="paper";
    }

    if(userInp==3)
    {
        userChoice="scissors";
    }
    return userChoice;
}

function winner(compChoice, userChoice){
    let tie=0;
    let userWin=0;
    let compWin=0;
    if(userChoice==compChoice)
    {
        tie++;
        return tie;
    }
    //for stone
    else if(compChoice=="stone" && userChoice=="paper"){
        userWin++;
        return userWin;
    }
    else if(compChoice=="stone" && userChoice=="scissors"){
        compWin++;
        return compWin;
    }
    //for paper
    else if(compChoice=="paper" && userChoice=="stone"){
        compWin++;
        return compWin;
    }
    else if(compChoice=="paper" && userChoice=="scissors"){
        userWin++;
        return userWin;
    }
    //for scissors
    else if(compChoice=="scissors" && userChoice=="stone"){
        userWin++;
        return userWin;
    }
    else if(compChoice=="scissors" && userChoice=="paper"){
        compWin++;
        return compWin;
    }

}

let count=0;
let compChoice;
let userChoice;
let tie=0;
while(count<=10)
{
    compChoice=computerChoice();
    userChoice=UserChoice();
    let win=winner(compChoice, userChoice);
    
}