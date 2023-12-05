function Game(score, turnTotal, activePlayer, playing) {
    this.score = score;
    this.gamesWon = gamesWon
    this.turnTotal = turnTotal;
    this.activePlayer = activePlayer;
    this.playing = playing;
}

let players = new Game([0, 0], [0, 0], 0, 0, false);

Game.prototype.turnSwap = function () {
    this.turnTotal = 0;
    this.activePlayer = this.activePlayer === 0 ? 1 : 0;
};

Game.prototype.rollDice = function () {
    const roll = Math.floor(Math.random() * 6) + 1;
    if (roll === 1) {
        this.turnTotal = 0;
        this.turnSwap();
    } else {
        this.turnTotal += roll;
    }
    return roll;
};

Game.prototype.hold = function () {
    this.score[this.activePlayer] += this.turnTotal;
    this.turnTotal = 0;
    players.turnSwap();
};

Game.prototype.gameWinCheck = function () {
    if (this.score[this.activePlayer] >= 100)
        this.playing = false;

}


// function turnUpdate(){
//     const activePlayer = players.getActivePlayer();
// } 

// Event listeners for roll and hold buttons
document.getElementById('rollButton').addEventListener('click', function () {
    const activePlayer = players.getActivePlayer();
    const roll = activePlayer.rollDice();
});

document.getElementById('holdButton').addEventListener('click', function () {
    const activePlayer = players.getActivePlayer();
    activePlayer.hold();
    // Update UI for holding
});


