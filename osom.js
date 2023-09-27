const displayComputerChoice = document.getElementById('computer-choice')
const displayUserChoice = document.getElementById('user-choice')
const displayResult = document.getElementById('result')
const choices = document.querySelectorAll('button')
const computer = document.getElementById('comp-score')
const player = document.getElementById('player-score')



let userChoice
let computerChoice
let compScore = 0
let playerScore = 0




function generateComputerChoice(){
    const random = Math.floor(Math.random() * choices.length)
    console.log(random)

    if (random === 1 ) {
        computerChoice = 'batu'
    }

    if (random === 2) {
        computerChoice = "burung"
    }

    if (random === 3){
        computerChoice = "air"
    }

    displayComputerChoice.innerHTML = computerChoice
}

function disableButtons() {
    choices.forEach(elem => {
        elem.disabled = true
    })
}



function getResult(user){

    if ((computerChoice === 'batu' && userChoice === 'air') ||
       (computerChoice === 'burung' && userChoice === 'batu') ||
       (computerChoice === 'air' && userChoice === 'burung')){
        displayResult.innerText = " You won! You picked " + userChoice + " & computer picked " + computerChoice
        playerScore++;

        if(playerScore == 5){
            displayResult.innerText = " You won! Reload to play again. "
            disableButtons()
        }
    }

    else if (computerChoice === userChoice){
    displayResult.innerText = " It's a tie! You both picked " + computerChoice
    }
    
    else{
        displayResult.innerText = " You lose! You picked " + userChoice + " & computer picked " + computerChoice
        compScore++;

        if(compScore == 5){
            displayResult.innerText = " You lost! Reload to play again."
            disableButtons()
        }
   
   }
   player.innerText = playerScore
   computer.innerText = compScore

}

choices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    displayUserChoice.innerHTML = userChoice
    generateComputerChoice() 
    getResult()
}))