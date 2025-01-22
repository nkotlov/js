function updateBestScore(score, difficulty) {
    const bestScoreKey = difficulty === "normal" ? "bestScoreNormal" : "bestScoreHard";
    let bestScore = parseInt(localStorage.getItem(bestScoreKey)) || 0;

    if (score > bestScore) {
        localStorage.setItem(bestScoreKey, score);
    }

    document.getElementById("best-score-value").textContent = localStorage.getItem(bestScoreKey);
}

function showFinalScreen(score, totalRounds) {
    document.querySelector(".game-container").style.display = "none";
    const finalScreen = document.querySelector(".final-screen");
    finalScreen.classList.remove("hidden");
    document.getElementById("final-score").textContent = `Ваш результат: ${score} / ${totalRounds}`;
}

function updateUI(score, currentRound, totalRounds, difficulty) {
    document.getElementById("score-value").textContent = score;
    document.getElementById("question-counter").textContent = `Вопрос: ${currentRound + 1} из ${totalRounds}`;
    document.getElementById("difficulty-title").textContent = difficulty === "normal" ? "Обычный уровень" : "Сложный уровень";

    const bestScoreKey = difficulty === "normal" ? "bestScoreNormal" : "bestScoreHard";
    document.getElementById("best-score-value").textContent = localStorage.getItem(bestScoreKey) || 0;
}

export { updateBestScore, showFinalScreen, updateUI };
