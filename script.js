function getComputerChoice() {
    let randNumber= Math.floor(Math.random() * (3) ) + 1;
    const decision = {
        1 : "Rock",
        2 : "Paper",
        3 : "Scissors"
    };
    return decision[randNumber];
    
}

console.log(getComputerChoice());