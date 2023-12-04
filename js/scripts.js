function PlayerList() {
    this.players = [];
}

function Player(playerId, turnTotal, gameTotal, active) {
    this.playerId = playerId;
    this.turnTotal = turnTotal;
    this.gameTotal = gameTotal;
    this.active = active;
}

PlayerList.prototype.addPlayer = function (player) {
    this.players.push(player);
};

PlayerList.prototype.getActivePlayer = function () {
    return this.players.find(player => player.active);
};

PlayerList.prototype.turnSwap = function () {
    this.players.forEach(player => {
        player.active = !player.active;
    });
};

Player.prototype.rollDice = function () {
    const roll = Math.floor(Math.random() * 6) + 1;
    if (roll !== 1) {
        this.turnTotal += roll;
    } else {
        this.turnTotal = 0;
        players.turnSwap();
    }
    return roll;
};

Player.prototype.hold = function () {
    this.gameTotal += this.turnTotal;
    this.turnTotal = 0;
    players.turnSwap();
};

let players = new PlayerList();
players.addPlayer(new Player(1, 0, 0, true));
players.addPlayer(new Player(2, 0, 0, false));

// Event listeners for roll and hold buttons
document.getElementById('rollButton').addEventListener('click', function () {
    const activePlayer = players.getActivePlayer();
    const roll = activePlayer.rollDice();
    // Example of updating the UI directly
    document.getElementById('currentRoll').textContent = 'Roll: ' + roll;
    document.getElementById('player' + activePlayer.playerId + 'TurnTotal').textContent = 'Turn Total: ' + activePlayer.turnTotal;
});

document.getElementById('holdButton').addEventListener('click', function () {
    const activePlayer = players.getActivePlayer();
    activePlayer.hold();
    // Update UI for holding
    document.getElementById('player' + activePlayer.playerId + 'GameTotal').textContent = 'Game Total: ' + activePlayer.gameTotal;
    // Optionally, update UI to reflect the turn swap
});

// test