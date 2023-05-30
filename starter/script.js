'use strict';

//---------------Selecting elements----------------------------------
// We can either use the querySelector or getElementById method

const score0 = document.querySelector('#score-0'); // Since we are not working with classes, we put the # symbol in fron fo the id name or we use the get element by id function
const score1 = document.getElementById('score-1');
const diceModal = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

let currentScore = 0;
let activePlayer = 0;

// Starting conditions
score0.textContent=0; score1.textContent = 0;                    // TThe two players total score is 0at the begining.
diceModal.classList.add('hidden');                            // The dice should not be displayed until we roll it. Creating a hidden class in your css and setting the display property to none while adding it to the classList will hide that modal

btnRoll.addEventListener('click', function(){
    const diceResult = Math.trunc(Math.random() * 6) + 1;  // Generate a random numner

    diceModal.classList.remove('hidden');                // Remove the hidden modal class
    diceModal.src=`dice-${diceResult}.png`;             // Display Dice Result

    if(diceResult !== 1){                              // If the rolled dice is not '1'
    currentScore += diceResult;                      // Then the currentScore keeps accumulating.                
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
     }else {
        activePlayer = activePlayer ===0 ? 1 : 0;   // else if the dice is '1', switch to the next player 
        currentScore = 0;
        player0.classList.contains
     };
});

btnHold.addEventListener('click', function(){
    activePlayer = activePlayer ===0 ? 1 : 0; // Switch to the next player
    
})


