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
    activePlayer = 0;         // The active player is initialised to be the player 0 at the begining
    score0.textContent=0;        // TThe two players total score is 0 t the begining.
    score1.textContent=0;   

    scores = [0, 0];                     // Here, the index0 holds the score for playre0 and Index1 holds the score for player 1
    diceModal.classList.add('hidden');       // The dice should not be displayed until we roll it. Creating a hidden class in your css and setting the display property to none while adding it to the classList will hide that modal
    document.getElementById(`current--0`).textContent = 0;
    document.getElementById(`current--1`).textContent = 0; 
    gameIsNotOver = true;

    player0.classList.remove('player--winner')
    player1.classList.remove('player--winner')
    player0.classList.add('player--active')
    player1.classList.remove('player--active')
}

    initialiseGame();   // Here we call this function so that the game will be initialised before it starts.

const switchPlayer = () => {
activePlayer = activePlayer === 0 ? 1 : 0;   // else if the dice is '1', switch to the next player 
currentScore = 0;
player0.classList.toggle('player--active');   // The toggle method checks if the player class has the player active, if yes, it removes it but if no, it adds the player--active class to it
player1.classList.toggle('player--active');
}


btnRoll.addEventListener('click', function(){
    if(gameIsNotOver){
    const diceResult = Math.trunc(Math.random() * 6) + 1;  // Generate a random numner
    diceModal.classList.remove('hidden');                // Remove the hidden modal class
    diceModal.src=`dice-${diceResult}.png`;             // Display Dice Result

    if(diceResult !== 1){                              // If the rolled dice is not '1'
    currentScore += diceResult;                      // Then the currentScore keeps accumulating.                
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
     }else {
        switchPlayer();
     };
    }
});

btnHold.addEventListener('click', function(){
    if(gameIsNotOver){
    scores[activePlayer] += currentScore;               // Add current score to current player
    document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer]; // Display the updated score

    if (scores[activePlayer] >=100)      {// Finish the game if the active player reaches 100 points.
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');   // Add the winner class
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');  // Remove the active player class
        gameIsNotOver = false;             // THEN END THE GAME
        diceModal.classList.add('hidden');
    }
    else{
        switchPlayer();
    }}
});

btnNew.addEventListener('click', initialiseGame);
