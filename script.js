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

const secretNumber= Math.trunc(Math.random()*20)+1;
let score =20;

// function wrongGuess(){
//     score--;
//     document.querySelector('.score').textContent=score;
// }
document.querySelector('.number').textContent=secretNumber;
document.querySelector('.check').addEventListener('click',function(){
    const guess= Number(document.querySelector('.guess').value);
    // console.log(guess, typeof guess);
    // emgi pallate for windows windows key +. 
    if(!guess){
        document.querySelector('.message').textContent='⛔ No number! '
    }
    else if(guess===secretNumber){
        document.querySelector('.message').textContent="🌽You get the correct Number!!"
    }
    else if(guess>secretNumber){
        if(score>1){
        document.querySelector('.message').textContent="📈 Too high!";
        score--;
        document.querySelector('.score').textContent=score;
        }
        else{
            document.querySelector('.message').textContent="💥You Lost the Game!";
            document.querySelector('.score').textContent=0;
        }
       
    }
    else if(guess<secretNumber){
        if(score>1){
    document.querySelector('.message').textContent="📉 Too Low!";
    score--;
    document.querySelector('.score').textContent=score;
        }
        else{
            document.querySelector('.message').textContent="💥You Lost the Game!";
            document.querySelector('.score').textContent=0
        }

}
})