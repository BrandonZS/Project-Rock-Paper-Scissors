let userCounter = 0;
let compCounter = 0;
function getComputerChoice() {
    let randNumber= Math.floor(Math.random() * (3) ) + 1;
    const decision = {
        1 : "rock",
        2 : "paper",
        3 : "scissors"
    };
    return decision[randNumber];
}

function playRound(userChoice) {
    let compChoice = getComputerChoice();
    if (compChoice!=userChoice) {

        if (compChoice=="rock"&&userChoice=="scissors" || compChoice=="paper"&&userChoice=="rock" || compChoice=="scissors"&&userChoice=="paper"){
            return `You lose! ${compChoice} beats ${userChoice}`;
            
        } else{
            return `You win! ${userChoice} beats ${compChoice}`;
        }
    } else {
        return "Draw!";
    }
};

function game(data) {
    
    
    if(userCounter < 5 && compCounter < 5 ){
        let result = playRound(data)
        jugada.textContent = `${result}`
        let decision = result.substring(0,7)
        if (decision == "You los") {
            compCounter++;
        } else if(decision == "You win") {
            userCounter++;
        } 
        scorePlayer.textContent = `Player: ${userCounter}`;
        scorePC.textContent = `PC: ${compCounter}`;
    } 
    if(userCounter == 5 || compCounter == 5){
        console.log("juego ha terminado");
        if (userCounter === 5) {
            jugada.textContent = `El jugador ha ganado!`
        } else {
            jugada.textContent = `El jugador ha Perdido!`
        }
    }
    
};
function resetGame(){
    jugada.textContent = "Start Game!"
    userCounter = 0;
    compCounter= 0;
    scorePlayer.textContent = `Player: ${userCounter}`;
    scorePC.textContent = `PC: ${compCounter}`;
};

const scorePlayer = document.querySelector('#player-points');
const scorePC = document.querySelector('#pc-points');

const jugada = document.querySelector('#jugada');
const reset = document.querySelector('#reset');



const btnRock = document.querySelector('#rock-btn');
const btnPaper = document.querySelector('#paper-btn');
const btnSciss = document.querySelector('#scissors-btn');


btnRock.addEventListener('click', () => game(btnRock.value));
btnPaper.addEventListener('click', () => game(btnPaper.value));
btnSciss.addEventListener('click', () => game(btnSciss.value));
reset.addEventListener('click',() => resetGame())

