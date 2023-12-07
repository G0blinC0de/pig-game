function Game(activePlayer, score) {
    this.score = score;
    this.activePlayer = activePlayer;
    this.turnTotal = [];
    this.currentdie = [];
}

const player1 = new Game("Player 1", 0)
const player2 = new Game("Player 2", 0)
const btnRoll1 = document.getElementById('btnRoll1');
const btnRoll2 = document.getElementById('btnRoll2');
const btnHold1 = document.getElementById('btnHold1');
const btnHold2 = document.getElementById('btnHold2');
const btnDiceReset = document.getElementById('btnDiceReset');


Game.prototype.turnSwap = function () {
    if (activePlayer === player1) {
        btnHold1.classList.add('disable');
        btnRoll1.classList.add('disable');
        btnHold1.classList.remove('enable');
        btnRoll1.classList.remove('enable');

        btnHold2.classList.remove('disable');
        btnRoll2.classList.remove('disable');
        btnHold2.classList.add('enable');
        btnRoll2.classList.add('enable');
    } else if (activePlayer === player2) {
        btnHold2.classList.add('disable');
        btnRoll2.classList.add('disable');
        btnHold2.classList.remove('enable');
        btnRoll2.classList.remove('enable');

        btnHold1.classList.remove('disable');
        btnRoll1.classList.remove('disable');
        btnHold1.classList.add('enable');
        btnRoll1.classList.add('enable');
    }
};


btnRoll.addEventListener('click', function () {
    const currentdie = Math.trunc(Math.random() * 6) + 1;
    if (currentdie !== 1) {
        this.turnTotal += this.currentdie;
    } else {
        this.turnSwap();
    }
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