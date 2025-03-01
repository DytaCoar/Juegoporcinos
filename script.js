const pigsContainer = document.getElementById('pigs-container');
const message = document.getElementById('message');
const winSound = document.getElementById('win-sound');
const errorSound = document.getElementById('error-sound');

const levels = 5;
let currentLevel = 1;

document.getElementById('start-button').addEventListener('click', () => {
    loadLevel(currentLevel);
});

function loadLevel(level) {
    pigsContainer.innerHTML = ''; // Limpiar el contenedor de cerditos
    message.textContent = `Nivel ${level}: Encuentra el cerdito enfermo`;

    const numberOfPigs = 5 + level; // Número de cerditos
    const sickPigIndex = Math.floor(Math.random() * numberOfPigs); // Índice del cerdito enfermo

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
        winSound.play().catch(error => {
            console.log("Error al reproducir el sonido de victoria:", error);
        });
        if (currentLevel < levels) {
            currentLevel++;
            loadLevel(currentLevel); // Cargar el siguiente nivel
        } else {
            message.textContent = '¡Felicidades! Has encontrado todos los cerditos enfermos.';
            pigsContainer.innerHTML = '';
            currentLevel = 1; // Reiniciar
            setTimeout(() => loadLevel(currentLevel), 2000); // Esperar 2 segundos antes de reiniciar
        }
    } else {
        errorSound.play().catch(error => {
            console.log("Error al reproducir el sonido de error:", error);
        });
        alert('Ese no es el cerdito enfermo, ¡inténtalo de nuevo!');
    }
}
