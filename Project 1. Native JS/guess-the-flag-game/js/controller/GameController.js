import { GameModel } from '../model/GameModel.js';
import { GameView } from '../view/GameView.js';

export class GameController {
    constructor() {
        this.model = new GameModel();
        this.view = new GameView(this);
        this.timer = null;
    }

    async startGame(selectedDifficulty) {
        this.model.difficulty = selectedDifficulty;
        await this.model.fetchCountries();
        this.model.startNewGame(selectedDifficulty);
        this.nextRound();
    }

    nextRound() {
        if (this.model.currentRound >= this.model.totalRounds) {
            this.view.showFinalScreen(this.model.score, this.model.totalRounds);
            return;
        }

        this.model.currentCountry = this.model.getRandomCountry();
        const options = this.model.generateOptions(this.model.currentCountry.name);

        this.view.updateQuestion(this.model, options);

        document.getElementById("confirm-button").classList.remove("hidden");
        document.getElementById("confirm-button").disabled = true;
        document.getElementById("next-button").classList.add("hidden");

        this.startTimer();
    }

    startTimer() {
        if (this.timer) clearInterval(this.timer);
        this.model.timeLeft = this.model.difficulty === "normal" ? 20 : 15;
        this.view.updateTimer(this.model.timeLeft);

        this.timer = setInterval(() => {
            if (this.model.timeLeft > 0) {
                this.model.timeLeft--;
                this.view.updateTimer(this.model.timeLeft);
            } else {
                clearInterval(this.timer);
                this.checkAnswer(true);
            }
        }, 1000);
    }

    checkAnswer(timeExpired = false) {
        clearInterval(this.timer);

        if (!timeExpired && this.model.selectedOption === this.model.currentCountry.name) {
            this.model.score++;
        }

        this.model.currentRound++;
        this.model.updateBestScore();
        this.view.updateScore(this.model);
        this.view.showCorrectAnswer(this.model.currentCountry.name, this.model.selectedOption, timeExpired);
    }

    selectOption(option) {
        this.model.selectedOption = option;
        this.view.highlightSelectedOption(option);
        document.getElementById("confirm-button").disabled = false;
    }

    finishGame() {
        clearInterval(this.timer);
        this.view.showFinalScreen(this.model.score, this.model.totalRounds);
    }
}
