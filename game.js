alert("Welcome to the JavaScript Rock, Paper and Scissors game by Felipe B. M.! Use Ctrl+Shift+I to access the developer tools to read console messages");
alert("You have to beat the AI in a best of 5 to be the winner.")
alert("You can click 'cancel' at any time to exit the game and then reload the website to start over.")

const game = () => {
    let score = {
        wins : 0, 
        draws : 0, 
        losses : 0,
        rounds: 0
    }
    let playerSelection = '';
    let computerSelection = '';
    
    let computerPlay = () => {
        let playNumber = Math.floor(Math.random() * 3) + 1;
        switch (playNumber) {
            case 1:
                return 'Rock';
            case 2:
                return 'Paper';
            case 3:
                return 'Scissors';
        }
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

    let playRound = (score) => {
        playerSelectionPrompt();
        computerSelection = computerPlay();
        switch (playerSelection) {
            case '1' || 'rock':
            switch (computerSelection) {
                case 'Rock':
                    console.log(`Round ${score.rounds + 1}: You played Rock. Computer played Rock. It was a draw.`);
                    score.draws += 1;
                break;
                case 'Paper':
                    console.log(`Round ${score.rounds + 1}: You played Rock. Computer played Paper. It was a loss.`);
                    score.losses += 1;
                break;
                case 'Scissors':
                    console.log(`Round ${score.rounds + 1}: You played Rock. Computer played Scissors. It was a win.`);
                    score.wins += 1;
                break;
            } 
            break;

            case '2' || 'paper':
                switch (computerSelection) {
                    case 'Rock':
                        console.log(`Round ${score.rounds + 1}: You played Paper. Computer played Rock. It was a win.`);
                        score.wins += 1;
                    break;
                    case 'Paper':
                        console.log(`Round ${score.rounds + 1}: You played Paper. Computer played Paper. It was a draw.`);
                        score.draws += 1;
                    break;
                    case 'Scissors':
                        console.log(`Round ${score.rounds + 1}: You played Paper. Computer played Scissors. It was a loss.`);
                        score.losses += 1;
                    break;
            }
            break;

            case '3' || 'scissors':
                switch (computerSelection) {
                    case 'Rock':
                        console.log(`Round ${score.rounds + 1}: You played Scissors. Computer played Rock. It was a loss.`);
                        score.losses += 1;
                    break;
                    case 'Paper':
                        console.log(`Round ${score.rounds + 1}: You played Scissors. Computer played Paper. It was a win.`);
                        score.wins += 1;
                    break;
                    case 'Scissors':
                        console.log(`Round ${score.rounds + 1}: You played Scissors. Computer played Scissors. It was a draw.`);
                        score.draws += 1;
                    break;
            }
            break;
        }
        if (playerSelection) {
            score.rounds++;
        } else {
            console.log(`You gave up after ${score.rounds} rounds. Score: ${score.wins}(W), ${score.draws}(D), ${score.losses}(L).`)
        }
        
    }

    while(score.rounds < 5 && playerSelection !== null) {
        playRound(score)
    }
    if (playerSelection) {
        if (score.wins == 5) {
            console.log('Congratulations! You got a perfect win!')
        } else if (score.losses == 5) {
            console.log('Congratulations! You got a perfect loss!')
        } else if (score.wins > score.losses ) {
            console.log(`Congratulations! You are the winner! Score: ${score.wins}(W), ${score.draws}(D), ${score.losses}(L).`)
        } else if (score.wins == score.losses){
            console.log(`It ended as a draw! Score: ${score.wins}(W), ${score.draws}(D), ${score.losses}(L).`)
        } else {
            console.log(`Nice job! Unfortunately you lost! Score: ${score.wins}(W), ${score.draws}(D), ${score.losses}(L).`)
        }
        let tryAgain = prompt('Do you want to try again? (Y)/(N)')
        if (tryAgain !== null) {
        tryAgain = tryAgain.toLowerCase();
        if(tryAgain == 'yes' || tryAgain == 'y') {
            console.log('New game')
            game();
        }
    }   
    }
    
}

game();

