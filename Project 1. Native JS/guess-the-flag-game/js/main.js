import { startGame, checkAnswer, nextRound, finishGame } from './gameLogic.js';

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".difficulty-button").forEach(button => {
        button.addEventListener("click", () => {
            document.querySelector(".start-container").style.display = "none";
            document.querySelector(".game-container").style.display = "flex";
            startGame(button.dataset.difficulty);
        });
    });

    document.getElementById("confirm-button").addEventListener("click", () => {
        checkAnswer();
    });

    document.getElementById("next-button").addEventListener("click", () => {
        nextRound();
    });

    document.getElementById("quit-button").addEventListener("click", () => {
        finishGame();
    });

    document.getElementById("return-menu-button").addEventListener("click", () => {
        window.location.reload();
    });
});
