// Idle Empires Game Mechanics

// Click Handler
let score = 0;
document.getElementById('clickButton').addEventListener('click', function() {
    score++;
    updateUI();
});

// Upgrades System
let upgrades = [];
function buyUpgrade(upgrade) {
    if (score >= upgrade.cost) {
        score -= upgrade.cost;
        upgrade.level++;
        updateUI();
    }
}

// Auto-click Loop
setInterval(function() {
    score += calculateAutoClicks();
    updateUI();
}, 1000);

function calculateAutoClicks() {
    let total = 0;
    upgrades.forEach(upgrade => {
        total += upgrade.level * upgrade.autoClickValue;
    });
    return total;
}

// Save and Load Functions
function saveGame() {
    const gameData = {
        score: score,
        upgrades: upgrades,
    };
    localStorage.setItem('idleEmpires', JSON.stringify(gameData));
}

function loadGame() {
    const gameData = JSON.parse(localStorage.getItem('idleEmpires'));
    if (gameData) {
        score = gameData.score;
        upgrades = gameData.upgrades;
        updateUI();
    }
}

// UI Updates
function updateUI() {
    document.getElementById('scoreDisplay').innerText = 'Score: ' + score;
    // Update other UI elements as necessary
}

// Load game on startup
loadGame();
