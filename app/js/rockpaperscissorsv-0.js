////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit  */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt("Please choose either 'rock', 'paper', or 'scissors'.");
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
    var move;
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    // return the contents of move if they exist; if they don't, call the function getPlayerMove().
    return move || getInput();
}

function getComputerMove(move) {
    var move;
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    // return the contents of move if they exist; if they don't, call the function randomPlay().
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    var playerMove;
    var computerMove;
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
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while (computerWins < 5 && playerWins < 5) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);

        console.log("You chose: " + playerMove + ". " + "The computer chose: " + computerMove + ".");
        if (winner == "computer") {
            computerWins += 1;
            console.log("Computer wins this round!");
        }
        else if (winner == "player") {
            playerWins += 1;
            console.log("You win this round!");
        }
        
        else {
            console.log("That was a tie so you need to play that round again!")
        }
        
        console.log("Computer has won " + computerWins + " times. Player has won: " + playerWins + " times.");
}
    return [playerWins, computerWins];
}

// note to self: the function below works best (and possibly only, I think) in the browser console. Paste in the code and initiate with: playTo();
function playTo(x) {
    console.log("Let's play Rock, Paper, Scissors");
    var x;
    var playerWins = 0;
    var computerWins = 0;

    while (computerWins < x && playerWins < x) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);

        console.log("You chose: " + playerMove + "\nThe computer chose: " + computerMove + ".");
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
        
        console.log("Victory goes to: " + winner + ". \nComputer has won " + computerWins + " times. \nPlayer has won: " + playerWins + " times.");
}
    if (playerWins > computerWins) {
        console.log("You win the series this time! Congratulations.")
    }
    else {
        console.log("I've won the series. You");
        console.log("are a loser.");
    }
    // return [playerWins, computerWins];
}




// note to self: the function below works best (and possibly only, I think) in the browser console. Paste in the code and initiate with: playTo();
function playToinBrowser(x) {
    alert("Let's play Rock, Paper, Scissors");
    var bestOf = prompt("Best of how many times do you want to play?");
    alert("You elected to play best of " + bestOf + " games. Sit tight!");
    if (bestOf % 2 == 0) {
        var x = bestOf / 2 + 1;
    }
    else {
        var x = Math.round(bestOf / 2)
    }
    alert("You need to win " + x + " games to win the series. Good luck!")
    var playerWins = 0;
    var computerWins = 0;

    while (computerWins < x && playerWins < x) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);

        alert("You chose: " + playerMove + "\nThe computer chose: " + computerMove + ".");
        if (winner == "computer") {
            computerWins += 1;
            alert("Computer wins this round!");
        }
        else if (winner == "player") {
            playerWins += 1;
            alert("You win this round!");
        }
        
        else {
            alert("That was a tie; you need to play that round again!")
        }
        
        alert("Victory goes to: " + winner + ". \nComputer has won " + computerWins + " times. \nPlayer has won: " + playerWins + " times.");
}
    if (playerWins > computerWins) {
        alert("You win the series this time! Congratulations.")
    }
    else {
        alert("I've won the series. You");
        alert("are a loser.");
    }
    // return [playerWins, computerWins];
}
playTo();