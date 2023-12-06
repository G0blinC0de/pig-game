


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