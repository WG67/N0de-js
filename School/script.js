// Pick out the span elements
const computerDisplay = document.getElementById("computer-choice")
const userDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll('button')


// declare global variables
let userChoice
let computerChoice
let result

/*
The Game Code
=============

This code checks if any button has been pressed and saves it as userChoice. 
It then displays this on the web page.
It then gets the computer to pick a random rock / paper or scissors
Finally, it works out who won or if it is a draw

*/

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) =>{
  // Set the variable to whichever button was pressed.
  userChoice = e.target.id
  // Display the choice on screen
  userDisplay.innerHTML = userChoice
  // Call the function to pick a rock, etc.
  generateComputerChoice()
  // Who won?
  getResult()
  
}))

function generateComputerChoice()
  {
    const randomNumber = Math.floor(Math.random() * 3) + 1 // starts at 0 (or you can use possibleChoices.length)
    

    if (randomNumber === 1){
      computerChoice = "rock"
    }

    
    if (randomNumber === 2){
      computerChoice = "paper"
    }

    
    if (randomNumber === 3){
      computerChoice = "scissors"
    }

    computerDisplay.innerHTML = computerChoice
    
  }

function getResult()
  {
    if (computerChoice === userChoice){
      // It's a draw!
      result = "it's a draw!"
    }
    
    if (computerChoice === 'rock' && userChoice === 'paper'){
      // It's a draw!
      result = "you win!"
    }

    
    if (computerChoice === 'rock' && userChoice === 'scissors'){
      // It's a draw!
      result = "you lose!"
    }

    
    if (computerChoice === 'paper' && userChoice === 'rock'){
      // It's a draw!
      result = "you lose!"
    }
    
    if (computerChoice === 'paper' && userChoice === 'scissors'){
      // It's a draw!
      result = "you win!"
    }

    
    if (computerChoice === 'scissors' && userChoice === 'paper'){
      // It's a draw!
      result = "you lose!"
    }
    
    if (computerChoice === 'scissors' && userChoice === 'rock'){
      // It's a draw!
      result = "you win!"
    }
    resultDisplay.innerHTML = result
  }