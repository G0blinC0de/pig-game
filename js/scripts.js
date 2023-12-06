
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
const btnCoin = document.getElementById('btnCoin');

let scores, currentScore, activePlayer, playing;

btnRoll.addEventListener('click', function () {
    if (playing) {

        // 1. Generating a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;

        // 2. Display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `images/dice-${dice}.png`;

        // 3. Check for rolled 1
        if (dice !== 1) {

            // Add dice to current score
            currentScore += dice;
            document.getElementById(
                `current--${activePlayer}`
            ).textContent = currentScore;
        } else {

            // Switch to next player
            switchPlayer();
        }
    }
});

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};

btnHold.addEventListener('click', function () {
    if (playing) {

        // 1. Add current score to active player's score
        scores[activePlayer] += currentScore;
        // scores[1] = scores[1] + currentScore

        document.getElementById(`score--${activePlayer}`)
            .textContent = scores[activePlayer];

        // 2. Check if player's score is >= 100
        if (scores[activePlayer] >= 100) {

            // Finish the game
            playing = false;
            gamesWon[activePlayer] += 1;
            diceEl.classList.add('hidden');

            document
                .querySelector(`.player--${activePlayer}`)
                .classList.add('player--winner');
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.remove('player--active');
        } else {

            // Switch to the next player
            switchPlayer();
        }
    }
});

const init = function () {
    scores = [0, 0];
    gamesWon = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
};
init();

btnNew.addEventListener('click', function () {
    init();
});

// Coin Flip??

currentCoinTotal = [0, 0];

document.addEventListener('DOMContentLoaded', () => {
    const btnCoin = document.getElementById('btnCoin');
    const coinReset = document.getElementById('btnCoinReset');

    btnCoin.addEventListener('click', function () {
        const coinToss = Math.trunc(Math.random() * 2) + 1;
        if (coinToss === 1) {
            flip("heads");
            currentCoinTotal[0] += 1;
            document.getElementById("totalHeads").innerText = currentCoinTotal[0];
        } else {
            flip("tails");
            currentCoinTotal[1] += 1;
            document.getElementById("totalTails").innerText = currentCoinTotal[1];
        }
    });

    function flip(coin) {
        const headsImage = document.getElementById('Heads');
        const tailsImage = document.getElementById('Tails');
        const resultText = document.getElementById("result");
        resultText.textContent = coin; // Update text

        if (coin === "heads") {
            headsImage.classList.remove('hidden');
            tailsImage.classList.add('hidden');
        } else {
            headsImage.classList.add('hidden');
            tailsImage.classList.remove('hidden');
        }
    };
    coinReset.addEventListener('click', function () {
        currentCoinTotal = [0, 0]
        document.getElementById("totalHeads").innerText = currentCoinTotal[0];
        document.getElementById("totalTails").innerText = currentCoinTotal[1];
        const headsImage = document.getElementById('Heads');
        const tailsImage = document.getElementById('Tails');
        headsImage.classList.add('hidden');
        tailsImage.classList.add('hidden');
    });
});
