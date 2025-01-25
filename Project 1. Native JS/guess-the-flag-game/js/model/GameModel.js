import { fetchCountries } from '../api.js';

export class GameModel {
    constructor() {
        this.countries = [];
        this.easyCountries = [];
        this.hardCountries = [];
        this.currentCountry = null;
        this.score = 0;
        this.selectedOption = null;
        this.timeLeft = 0;
        this.difficulty = null;
        this.totalRounds = 20;
        this.currentRound = 0;
        this.bestScoreNormal = parseInt(localStorage.getItem("bestScoreNormal")) || 0;
        this.bestScoreHard = parseInt(localStorage.getItem("bestScoreHard")) || 0;
    }

    async fetchCountries() {
        this.countries = await fetchCountries();
        this.filterCountries();
    }

    filterCountries() {
        this.easyCountries = this.countries.filter(country =>
            ["Europe", "North America", "Australia"].includes(country.region) ||
            ["China", "Japan", "India"].includes(country.name)
        );

        this.hardCountries = this.countries.filter(country =>
            !this.easyCountries.some(easy => easy.name === country.name) &&
            ["Africa", "Oceania", "South America"].includes(country.region)
        );
    }

    startNewGame(difficulty) {
        this.difficulty = difficulty;
        this.score = 0;
        this.currentRound = 0;
    }

    getRandomCountry() {
        return this.difficulty === "normal"
            ? this.easyCountries[Math.floor(Math.random() * this.easyCountries.length)]
            : this.hardCountries[Math.floor(Math.random() * this.hardCountries.length)];
    }

    generateOptions(correctAnswer) {
        let options = new Set();
        options.add(correctAnswer);

        while (options.size < 4) {
            let randomCountry = this.getRandomCountry().name;
            options.add(randomCountry);
        }

        return Array.from(options).sort(() => Math.random() - 0.5);
    }

    updateBestScore() {
        if (this.difficulty === "normal" && this.score > this.bestScoreNormal) {
            this.bestScoreNormal = this.score;
            localStorage.setItem("bestScoreNormal", this.bestScoreNormal);
        } else if (this.difficulty === "hard" && this.score > this.bestScoreHard) {
            this.bestScoreHard = this.score;
            localStorage.setItem("bestScoreHard", this.bestScoreHard);
        }
    }
}
