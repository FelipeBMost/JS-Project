const game = () => {
    let score = {
        wins : 0, 
        drawns : 0, 
        losses : 0,
        rounds: 0
    }
    let playerSelection = '';
    let computerSelection = '';
    
    let computerPlay = () => {
        return Math.floor(Math.random() * 3) + 1;
    }
    
    let playerSelectionPrompt = () => {
        playerSelection = prompt("Choose 'rock(1)', 'paper(2)' or 'scissors(3)'");
        if (playerSelection !== null) {
            playerSelection = playerSelection.toLowerCase();
            if (playerSelection == 'rock' || playerSelection == '1' || playerSelection == 'paper' || playerSelection == '2' || playerSelection == 'scissors' || playerSelection == '3' ) {
                return
            } else {
                alert("You didn't choose a valid option.")
                playerSelectionPrompt();
            }
        }
    }
    // alert("Welcome to the JS Rock, Paper and Scissors game by Felipe B. M.!");
    // alert("You have to beat the AI through 5 stages to be the winner.")
    // alert("You can click 'cancel' at any time to exit the game and then reload the website to start over.")
    while(score.wins < 5 && playerSelection !== null) {
        let round = (score) => {
            playerSelectionPrompt();
            computerSelection = computerPlay();
            if (playerSelection == '1' || playerSelection == 'rock') {
                switch (computerSelection) {
                    case 1:
                    alert("You played Rock. Computer played Rock. It was a drawn.");
                    score.drawns += 1;
                    break;
                    case 2:
                    alert("You played Rock. Computer played Paper. It was a loss.");
                    score.losses += 1;
                    break;
                    case 3:
                    alert("You played Rock. Computer played Scissors. It was a win.");
                    score.wins += 1;
                    break;
                }
            } else if (playerSelection == '2' || playerSelection == 'paper') {
                switch (computerSelection) {
                    case 1:
                    alert("You played Paper. Computer played Rock. It was a win.");
                    score.wins += 1;
                    break;
                    case 2:
                    alert("You played Paper. Computer played Paper. It was a drawn.");
                    score.drawns += 1;
                    break;
                    case 3:
                    alert("You played Paper. Computer played Scissors. It was a loss.");
                    score.losses += 1;
                    break;
                }
            } else if (playerSelection == '3' || playerSelection == 'scissors') {
                switch (computerSelection) {
                    case 1:
                    alert("You played Scissors. Computer played Rock. It was a loss.");
                    score.losses += 1;
                    break;
                    case 2:
                    alert("You played Scissors. Computer played Paper. It was a win.");
                    score.wins += 1;
                    break;
                    case 3:
                    alert("You played Scissors. Computer played Scissors. It was a drawn.");
                    score.drawns += 1;
                    break;
                }
            }
            if (playerSelection !== null) {
                score.rounds++;
                console.log(`wins: ${score.wins}, drawns: ${score.drawns}, losses: ${score.losses}`)
            }
            
        }
        round(score)
    }

    if (score.wins == 5) {
        console.log(`Congratulations! You won after ${score.rounds} rounds!`)
    } else if (score.wins < 5) {
        console.log(`You played ${score.rounds} rounds.`)
    }
}

game();

