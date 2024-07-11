document.addEventListener('DOMContentLoaded', () => {
    const gameDiv = document.getElementById('game');
    const numCerditos = 10;
    const cerditoEnfermoIndex = Math.floor(Math.random() * numCerditos);

    for (let i = 0; i < numCerditos; i++) {
        const cerditoDiv = document.createElement('div');
        cerditoDiv.classList.add('cerdito');
        cerditoDiv.style.backgroundImage = i === cerditoEnfermoIndex ? "url('cerdito_enfermo.png')" : "url('cerdito_sano.png')";
        cerditoDiv.addEventListener('click', () => {
            if (i === cerditoEnfermoIndex) {
                alert('¡Encontraste el cerdito enfermo!');
            } else {
                alert('Ese cerdito está sano.');
            }
        });
        gameDiv.appendChild(cerditoDiv);
    }
});
