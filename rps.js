let playerScore = 0;
    let computerScore = 0;
    const resultsDiv = document.querySelector('div');

    const rockBtn = document.querySelector('.rock');
    const paperBtn = document.querySelector('.paper');
    const scissorsBtn = document.querySelector('.scissors');

    function getComputerChoice(){
        let computerChoice = Math.floor(Math.random()* 3);
        switch(computerChoice){
            case 0:
                return "Rock";
            case 1:
                return "Paper";
            case 2:
                return "Scissors";
        }
    }

    function play(playerSelection, computerSelection){
        let roundResult;
        console.log(playerSelection)
        console.log(computerSelection);
        switch(playerSelection){
            case "Rock":
                if(computerSelection === "Rock"){
                    roundResult = "You Tie!";
                }else if (computerSelection === "Paper"){
                    roundResult = "You Lose! " + computerSelection + " beats " + playerSelection;
                }else{
                    roundResult = "You Win! " + playerSelection + " beats " + computerSelection;
                }
                break;
            case "Paper":
                if(computerSelection === "Rock"){
                    roundResult = "You Win! " + playerSelection + " beats " + computerSelection;
                }else if (computerSelection === "Paper"){
                    roundResult = "You Tie!";
                }else{
                    roundResult = "You Lose! " + computerSelection + " beats " + playerSelection;
                }
                break;
            case "Scissors":
                if(computerSelection === "Rock"){
                    roundResult = "You Lose! " + computerSelection + " beats " + playerSelection;
                }else if (computerSelection === "Paper"){
                    roundResult = "You Win! " + playerSelection + " beats " + computerSelection;
                }else{
                    roundResult = "You Tie!";
                }
                break;
        }
        return roundResult;
    }

    function game(){ 
        let roundResult = document.createElement('p');
        let gameResult = document.createElement('p');

        rockBtn.addEventListener('click', function(e){
            roundResult.textContent = play('Rock', getComputerChoice())
        });
            paperBtn.addEventListener('click', function(e){
            roundResult.textContent = play('Paper', getComputerChoice())
        });
            scissorsBtn.addEventListener('click', function(e){
            roundResult.textContent = play('Scissors', getComputerChoice())
        });
        
        while(playerScore < 5 && computerScore < 5){
            if(roundResult.textContent.includes('Win')){
                playerScore++;
                roundResult.textContent += `${playerScore} + ':' + ${computerScore}`
                resultsDiv.appendChild(roundResult);

            }
            if(roundResult.textContent.includes('Lost')){
                computerScore++;
                roundResult.textContent += `${playerScore} + ':' + ${computerScore}`
                resultsDiv.appendChild(roundResult);
            }
        }


        if(playerScore > computerScore){
            gameResult.textContent = "Game Won! " + playerScore + ":" + computerScore;
        }else if (playerScore < computerScore){
            gameResult.textContent = "Game Lost! " + computerScore + ":" + playerScore; 
        }else{
            gameResult.textContent = "Game Tied! " + computerScore + ":" + playerScore;
        }
        resultsDiv.appendChild(gameResult);

    }

    game();