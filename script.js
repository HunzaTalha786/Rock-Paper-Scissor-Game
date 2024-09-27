
let attempts=0;

function play(userSelection){
    const choices = ["rock", "paper", "scissor"];
    const randomSelection=Math.floor(Math.random()*3);
    const computerSelection=choices[randomSelection];
    let result=document.getElementById('result');
    attempts++;

if(userSelection===computerSelection){
    result.textContent="Wow! Its a tie.";
    
}
else if(
    (userSelection==='rock' && computerSelection==='scissor')||
    (userSelection==='scissor' && computerSelection==='paper')||
    (userSelection==='paper' && computerSelection==='rock')   

){
    result.textContent="You Win!";
}

else{
    result.textContent="You lose! Try again.";

}

document.getElementById('attempts').textContent=`Attempts: ${attempts}`;
}

function restart(){
    attempts=0;
   
   document.getElementById('result').textContent="...";
   document.getElementById('attempts').textContent="Attempts: 0"
}


