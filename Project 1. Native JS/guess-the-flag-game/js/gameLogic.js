import { fetchCountries } from './api.js';
import { updateUI, updateBestScore, showFinalScreen } from './ui.js';

let countries = [];
let easyCountries = [];
let hardCountries = [];
let currentCountry = null;
let score = 0;
let selectedOption = null;
let timer;
let timeLeft;
let difficulty;
let totalRounds = 20;
let currentRound = 0;

const difficultySettings = {
    normal: { time: 20 },
    hard: { time: 15 }
};

async function startGame(selectedDifficulty) {
    difficulty = selectedDifficulty;
    countries = await fetchCountries();

    easyCountries = countries.filter(country =>
        ["Europe", "North America", "Australia"].includes(country.region) ||
        ["China", "Japan", "India"].includes(country.name)
    );

    hardCountries = countries.filter(country =>
        !easyCountries.some(easy => easy.name === country.name) &&
        ["Africa", "Oceania", "South America"].includes(country.region)
    );

    score = 0;
    currentRound = 0;
    updateUI(score, currentRound, totalRounds, difficulty);

    startRound();
}

function startRound() {
    if (currentRound >= totalRounds) {
        showFinalScreen(score, totalRounds);
        return;
    }

    clearInterval(timer);
    selectedOption = null;

    document.getElementById("confirm-button").disabled = true;
    document.getElementById("confirm-button").classList.remove("hidden");
    document.getElementById("next-button").classList.add("hidden");

    currentCountry = getRandomCountry();
    document.getElementById("flag-image").src = currentCountry.flag;
    document.getElementById("flag-image").alt = `Флаг страны ${currentCountry.name}`;

    generateOptions();
    startTimer();
    updateUI(score, currentRound, totalRounds, difficulty);
}

function startTimer() {
    timeLeft = difficultySettings[difficulty].time;
    document.getElementById("time-left").textContent = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("time-left").textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            checkAnswer(true);
        }
    }, 1000);
}

function getRandomCountry() {
    return difficulty === "normal"
        ? easyCountries[Math.floor(Math.random() * easyCountries.length)]
        : hardCountries[Math.floor(Math.random() * hardCountries.length)];
}

function generateOptions() {
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";
    const correctAnswer = currentCountry.name;
    let options = new Set();
    options.add(correctAnswer);

    while (options.size < 4) {
        let randomCountry = getRandomCountry().name;
        options.add(randomCountry);
    }

    let shuffledOptions = Array.from(options).sort(() => Math.random() - 0.5);
    shuffledOptions.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option-button");
        button.addEventListener("click", () => selectOption(button, option));
        optionsContainer.appendChild(button);
    });
}

function selectOption(button, option) {
    selectedOption = option;
    document.getElementById("confirm-button").disabled = false;
    document.querySelectorAll(".option-button").forEach(btn => btn.classList.remove("selected"));
    button.classList.add("selected");
}

function checkAnswer(timeExpired = false) {
    clearInterval(timer);
    document.getElementById("confirm-button").classList.add("hidden");
    document.getElementById("next-button").classList.remove("hidden");

    let buttons = document.querySelectorAll(".option-button");
    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === currentCountry.name) {
            btn.classList.add("correct");
        } else if (!timeExpired && btn.textContent === selectedOption) {
            btn.classList.add("wrong");
        }
    });

    if (!timeExpired && selectedOption === currentCountry.name) {
        score++;
    }

    updateBestScore(score, difficulty);
    updateUI(score, currentRound, totalRounds, difficulty);
}

function nextRound() {
    currentRound++;
    startRound();
}

function finishGame() {
    showFinalScreen(score, totalRounds);
}

export { startGame, startRound, checkAnswer, nextRound, finishGame };
