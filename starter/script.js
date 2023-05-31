'use strict';

const score0 = document.querySelector('#score-0'); 
const score1 = document.getElementById('score-1');
const diceModal = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
let currentScore, activePlayer, gameIsNotOver, scores;

const initialiseGame = () =>{
    currentScore = 0;   
    activePlayer = 0;        
    score0.textContent=0;
    score1.textContent=0;   

    scores = [0, 0];                    
    diceModal.classList.add('hidden');       
    document.getElementById(`current--0`).textContent = 0;
    document.getElementById(`current--1`).textContent = 0; 
    gameIsNotOver = true;

    player0.classList.remove('player--winner')
    player1.classList.remove('player--winner')
    player0.classList.add('player--active')
    player1.classList.remove('player--active')
}

    initialiseGame();   

const switchPlayer = () => {
activePlayer = activePlayer === 0 ? 1 : 0;   
currentScore = 0;
player0.classList.toggle('player--active');  
player1.classList.toggle('player--active');
}


btnRoll.addEventListener('click', function(){
    if(gameIsNotOver){
    const diceResult = Math.trunc(Math.random() * 6) + 1; 
    diceModal.classList.remove('hidden');               
    diceModal.src=`dice-${diceResult}.png`;           

    if(diceResult !== 1){                           
    currentScore += diceResult;                                     
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
     }else {
        switchPlayer();
     };
    }
});

btnHold.addEventListener('click', function(){
    if(gameIsNotOver){
    scores[activePlayer] += currentScore;              
    document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer]; 

    if (scores[activePlayer] >=100)      {
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');   
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');  
        gameIsNotOver = false;            
        diceModal.classList.add('hidden');
    }
    else{
        switchPlayer();
    }}
});

btnNew.addEventListener('click', function(){
  initialiseGame();
});