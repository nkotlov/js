export class GameView {
    constructor(controller) {
        this.controller = controller;
        this.initEventListeners();
    }

    initEventListeners() {
        document.getElementById("confirm-button").addEventListener("click", () => {
            this.controller.checkAnswer();
        });

        document.getElementById("next-button").addEventListener("click", () => {
            this.controller.nextRound();
        });

        document.getElementById("quit-button").addEventListener("click", () => {
            this.controller.finishGame();
        });

        document.getElementById("return-menu-button").addEventListener("click", () => {
            window.location.reload();
        });
    }

    updateQuestion(model, options) {
        document.getElementById("flag-image").src = model.currentCountry.flag;
        document.getElementById("flag-image").alt = `Флаг страны ${model.currentCountry.name}`;
        document.getElementById("question-counter").textContent = `Вопрос: ${model.currentRound + 1} из 20`;

        document.getElementById("difficulty-title").textContent = model.difficulty === "normal" ? "Обычный уровень" : "Сложный уровень";
        document.getElementById("best-score-value").textContent = model.difficulty === "normal" ? model.bestScoreNormal : model.bestScoreHard;

        const optionsContainer = document.getElementById("options-container");
        optionsContainer.innerHTML = "";

        options.forEach(option => {
            const button = document.createElement("button");
            button.textContent = option;
            button.classList.add("option-button");
            button.addEventListener("click", () => this.controller.selectOption(option));
            optionsContainer.appendChild(button);
        });

        document.getElementById("confirm-button").disabled = true;
        document.getElementById("confirm-button").classList.remove("hidden");
        document.getElementById("next-button").classList.add("hidden");
    }

    updateScore(model) {
        document.getElementById("score-value").textContent = model.score;
        document.getElementById("best-score-value").textContent = model.difficulty === "normal" ? model.bestScoreNormal : model.bestScoreHard;
    }

    updateTimer(timeLeft) {
        document.getElementById("time-left").textContent = timeLeft;
    }

    highlightSelectedOption(option) {
        document.querySelectorAll(".option-button").forEach(btn => {
            btn.classList.remove("selected");
            if (btn.textContent === option) {
                btn.classList.add("selected");
            }
        });
    }

    showCorrectAnswer(correctAnswer, selectedOption, timeExpired) {
        document.querySelectorAll(".option-button").forEach(btn => {
            btn.disabled = true;
            if (btn.textContent === correctAnswer) {
                btn.classList.add("correct");
            } else if (!timeExpired && btn.textContent === selectedOption) {
                btn.classList.add("wrong");
            }
        });

        document.getElementById("confirm-button").classList.add("hidden");
        document.getElementById("next-button").classList.remove("hidden");
    }

    showFinalScreen(score, totalRounds) {
        document.querySelector(".game-container").style.display = "none";
        document.querySelector(".final-screen").classList.remove("hidden");
        document.getElementById("final-score").textContent = `Ваш результат: ${score} / ${totalRounds}`;
    }
}
