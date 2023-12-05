// Player Class
class Player {
    constructor() {
        this.score = 0;
        this.currentScore = 0;
    }

    reset() {
        this.score = 0;
        this.currentScore = 0;
    }

    // Other business logic methods...
}

// Game Class
class Game {
    constructor() {
        this.players = [new Player(), new Player()];
        this.activePlayerIndex = 0;
        this.playing = true;
    }

    start() {
        this.players.forEach(player => player.reset());
        this.activePlayerIndex = 0;
        this.playing = true;
    }

    switchPlayer() {
        this.activePlayerIndex = this.activePlayerIndex === 0 ? 1 : 0;
        this.players[this.activePlayerIndex].currentScore = 0;
    }

    rollDice() {
        if (!this.playing) return 0;

        const dice = Math.trunc(Math.random() * 6) + 1;
        if (dice !== 1) {
            this.players[this.activePlayerIndex].currentScore += dice;
        } else {
            this.switchPlayer();
        }
        return dice;
    }

    hold() {
        if (!this.playing) return;

        const activePlayer = this.players[this.activePlayerIndex];
        activePlayer.score += activePlayer.currentScore;
        if (activePlayer.score >= 100) {
            this.playing = false;
        } else {
            this.switchPlayer();
        }
    }

    // Other business logic methods...
}
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const game = new Game();

function updateUI() {
    score0El.textContent = game.players[0].score;
    score1El.textContent = game.players[1].score;
    current0El.textContent = game.players[0].currentScore;
    current1El.textContent = game.players[1].currentScore;
    player0El.classList.toggle('player--active', game.activePlayerIndex === 0);
    player1El.classList.toggle('player--active', game.activePlayerIndex === 1);
    diceEl.classList.toggle('hidden', !game.playing);
}

btnRoll.addEventListener('click', function () {
    if (game.playing) {
        const dice = game.rollDice();
        diceEl.src = `images/dice-${dice}.png`;
        updateUI();
    }
});

btnHold.addEventListener('click', function () {
    if (game.playing) {
        game.hold();
        updateUI();
    }
});

btnNew.addEventListener('click', function () {
    game.start();
    updateUI();
});

game.start();
updateUI();
