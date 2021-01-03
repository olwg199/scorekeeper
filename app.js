const p1 = {
    score: 0,
    button: document.getElementById('p1Button'),
    display: document.getElementById('p1Display')
}

const p2 = {
    score: 0,
    button: document.getElementById('p2Button'),
    display: document.getElementById('p2Display')
}

const resetButton = document.getElementById('reset');

const winScoreSelect = document.getElementById('playto');
let winScore = Number.parseInt(playto.value);
let isGameOver = false;

p1.button.addEventListener('click', function (e) {
    updateScore(p1, p2)
});

p2.button.addEventListener('click', function (e) {
    updateScore(p2, p1);
});

winScoreSelect.addEventListener('change', function (e) {
    winScore = Number.parseInt(this.value);
    reset(p1, p2);
});

resetButton.addEventListener('click', function (e) { reset(p1, p2); });

function disableScoreButtons() {
    p1Button.disabled = true;
    p2Button.disabled = true;
}

function activateScoreButtons() {
    p1Button.disabled = false;
    p2Button.disabled = false;
}

function updateScore(player, opponent) {

    if (!isGameOver) {
        player.score = Number.parseInt(player.display.innerText) + 1;
        player.display.innerText = player.score;

        if(player.score === opponent.score && player.score === (winScore-1)){
            winScore++;
        }

        if (winScore === player.score) {
            disableScoreButtons();
            isGameOver = true;
            player.display.classList.add("has-text-danger");
            opponent.display.classList.add("has-text-success");
        }
    }
}

function reset(...players) {
    for (let player of players) {
        player.score = 0;
        player.display.innerText = player.score;
        player.display.classList.remove("has-text-success", "has-text-danger");
    }
    winScore = Number.parseInt(winScoreSelect.value);
    activateScoreButtons();
    isGameOver = false;
}