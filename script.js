'use strict';

/* This is how manipulate the dom element of HTML
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent='Correct Number';
document.querySelector('.guess').value=23;
document.querySelector('.number').textContent=10;
document.querySelector('.number').innerHTML=20
*/

/*
const clickCheck= function(){
    console.log(document.querySelector('.guess').value);
}

document.querySelector('.check').addEventListener('click',clickCheck);

The same as below 🤪
*/

let secretNumber= Math.trunc(Math.random()*20)+1;
console.log(`Your secret Number is: ${secretNumber}`);
let score =20;
let highScore=0;

// function wrongGuess(){
//     score--;
//     document.querySelector('.score').textContent=score;
// }
// document.querySelector('.number').textContent=secretNumber;

const displayMessage= function(message){
    document.querySelector('.message').textContent=message;
}
document.querySelector('.check').addEventListener('click',function(){
    const guess= Number(document.querySelector('.guess').value);
    // console.log(guess, typeof guess);
    // emgi pallate for windows windows key +. 

    //No number is entered
    if(!guess){
        displayMessage('⛔ No number! ');
    }
    //The player guess correctly
    else if(guess===secretNumber){
        document.querySelector('.number').textContent=secretNumber;
        displayMessage("🌽You get the correct Number!!");
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width="30rem";
        if(score>highScore){
            highScore=score;
            document.querySelector('.highscore').textContent=highScore;
        }
        }
  
    else if(guess!==secretNumber){
        if(score>1){
            // document.querySelector('.message').textContent= guess>secretNumber?"📈 Too high!":"📉 Too low";
            displayMessage(guess>secretNumber?"📈 Too high!":"📉 Too low");
            score--;
            document.querySelector('.score').textContent=score;
            }
            else{
                displayMessage("💥You Lost the Game!");
                document.querySelector('.score').textContent=0;
            }
    }
    
    // //When guess is to high
    // else if(guess>secretNumber){
    //     if(score>1){
    //     document.querySelector('.message').textContent="📈 Too high!";
    //     score--;
    //     document.querySelector('.score').textContent=score;
    //     }
    //     else{
    //         document.querySelector('.message').textContent="💥You Lost the Game!";
    //         document.querySelector('.score').textContent=0;
    //     }
       
    // }
    // // when guess is to loow
    // else if(guess<secretNumber){
    //     if(score>1){
    // document.querySelector('.message').textContent="📉 Too Low!";
    // score--;
    // document.querySelector('.score').textContent=score;
    //     }
    //     else{
    //         document.querySelector('.message').textContent="💥You Lost the Game!";
    //         document.querySelector('.score').textContent=0
    //     }}

})

//Functionality of Agian button 

document.querySelector('.again').addEventListener('click',function(){
    secretNumber= Math.trunc(Math.random()*20)+1;
    score=0;
    document.querySelector('.score').textContent=score;
    displayMessage("Start Guessing....");
    document.querySelector('.guess').value=''
    document.querySelector('body').style.backgroundColor="#222";
    document.querySelector('.number').textContent="?";  
    document.querySelector('.number').style.width="15rem" ;
})