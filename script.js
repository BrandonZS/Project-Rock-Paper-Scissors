function getComputerChoice() {
    let randNumber= Math.floor(Math.random() * (3) ) + 1;
    const decision = {
        1 : "rock",
        2 : "paper",
        3 : "scissors"
    };
    return decision[randNumber];
}

function playRound(compChoice,userChoice) {
    compChoice = getComputerChoice();
    userChoice = (prompt("Rock, Paper or Scissors?")).toLowerCase();

    if (compChoice!=userChoice) {

        if (compChoice=="rock"&&userChoice=="scissors" || compChoice=="paper"&&userChoice=="rock" || compChoice=="scissors"&&userChoice=="paper"){
            return `You lose! ${compChoice} beats ${userChoice}`
            
        } else{
            return `You win! ${userChoice} beats ${compChoice}`
        }
    } else {
        return "Draw!"
    }
}

function game(result) {
    let userCounter = 0;
    let compCounter = 0;
    
    while (userCounter < 5 || compCounter < 5 ) {
        result = playRound()
        console.log(result);
        result = result.substring(0,7)
        if (result == "You los") {
            compCounter++;
        } else if(result == "You win") {
            userCounter++;
        }  
    }

    return `Final score --> User: ${userCounter} Computer: ${compCounter}`
}
console.log(game());