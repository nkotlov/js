import { GameController } from './controller/GameController.js';

document.addEventListener("DOMContentLoaded", function () {
    const controller = new GameController();

    document.querySelectorAll(".difficulty-button").forEach(button => {
        button.addEventListener("click", () => {
            document.querySelector(".start-container").style.display = "none";
            document.querySelector(".game-container").style.display = "flex";
            controller.startGame(button.dataset.difficulty);
        });
    });
});
