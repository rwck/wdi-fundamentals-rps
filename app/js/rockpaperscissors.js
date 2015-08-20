////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit - cheeky checky changey  */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
    
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if ((playerMove == "rock" && computerMove == "scissors") || (playerMove == "scissors" && computerMove == "paper") || (playerMove == "paper" && computerMove == "rock")) {
    winner = "player";
    }
    else if ((playerMove == "rock" && computerMove == "rock") || (playerMove == "scissors" && computerMove == "scissors") || (playerMove == "paper" && computerMove == "paper")) {
    winner = "tie";
    }
    else {
        winner = "computer";
    }

    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var playerMove;
    var computerMove;
    var winner;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while (computerWins < 5 && playerWins < 5) {
        playerMove = getPlayerMove();
        computerMove = getComputerMove();
        winner = getWinner(playerMove, computerMove);

        console.log("You chose: " + playerMove + "; the computer chose: " + computerMove + ".");
        if (winner == "computer") {
            computerWins += 1;
            console.log("Computer wins this round!");
        }
        else if (winner == "player") {
            playerWins += 1;
            console.log("You win this round!");
        }
        
        else {
            console.log("That was a tie; you need to play that round again!")
        }
        
        console.log("Winner is: " + winner + ". Computer has won " + computerWins + " times; Player has won: " + playerWins + " times.");
}
    return [playerWins, computerWins];
}


