let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');

function getComputerChoice(){
    const computerChoice = ['Rock', 'Paper', 'Scissors'];
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

function disableButtons(){
    buttons.forEach(elem => {
        elem.disabled = true;
    })
}

function play(playerSelection, computerSelection){
    let roundResult;
    console.log(playerSelection)
    console.log(computerSelection);
    if((playerSelection == "Rock" && computerSelection == "Scissors") ||
        (playerSelection == "Paper" && computerSelection == "Rock") ||
        (playerSelection == "Scissors" && computerSelection == "Paper")){
        
        playerScore++;
        roundResult = ("You Win! " + playerSelection + " beats " + computerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore);
        
        if(playerScore == 5){
            roundResult += "<br><br> You won the game!";
            disableButtons();
        }

    }else if(playerSelection == computerSelection){
        roundResult = ("You Tie!" 
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore);
    }else{
        computerScore++;
        roundResult = ("You Lose! " + computerSelection + " beats " + playerSelection
        + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore);
        
        if(computerScore == 5){
            roundResult += "<br><br> You lost the game!";
            disableButtons();
        }
    }

    document.getElementById('results').innerHTML = roundResult;

    return;
}

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        play(button.value, getComputerChoice());
    })
})