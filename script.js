// script.js

const pigsContainer = document.getElementById('pigs-container');
const message = document.getElementById('message');
const backgroundMusic = document.getElementById('background-music');
const winSound = document.getElementById('win-sound');
const errorSound = document.getElementById('error-sound');

const levels = 5;
let currentLevel = 1;

function startGame() {
    backgroundMusic.play();
    loadLevel(currentLevel);
}

function loadLevel(level) {
    pigsContainer.innerHTML = '';
    message.textContent = `Nivel ${level}: Encuentra el cerdito enfermo`;

    const numberOfPigs = 5 + level; // Aumenta el número de cerditos en cada nivel
    const sickPigIndex = Math.floor(Math.random() * numberOfPigs);

    for (let i = 0; i < numberOfPigs; i++) {
        const pig = document.createElement('div');
        pig.classList.add('pig');
        pig.style.backgroundImage = i === sickPigIndex ? `url('cerdito enfermo ${level}.jpeg')` : `url('cerdito sano ${level}.jpeg')`;
        pig.addEventListener('click', () => checkPig(i === sickPigIndex));
        pigsContainer.appendChild(pig);
    }
}

function checkPig(isSick) {
    if (isSick) {
        winSound.play();
        if (currentLevel < levels) {
            currentLevel++;
            loadLevel(currentLevel);
        } else {
            message.textContent = '¡Felicidades! Has encontrado todos los cerditos enfermos.';
            pigsContainer.innerHTML = '';
        }
    } else {
        errorSound.play();
        alert('Ese no es el cerdito enfermo, ¡inténtalo de nuevo!');
    }
}

startGame();
