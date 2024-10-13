
const character = document.getElementById('character');
const obstacle = document.getElementById('obstacle');

function jump() {
    if (character.classList != 'animate') {
        character.classList.add('animate');
        setTimeout(function() {
            character.classList.remove('animate');
        }, 500);
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === " " || event.key === "ArrowUp") {
        jump();
    }
});

setInterval(function() {
    const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('bottom'));
    const obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue('right'));

    if (obstacleLeft < 50 && obstacleLeft > 0 && characterTop <= 20) {
        alert("Game Over!");
    }
}, 10);

character.addEventListener('animationend', () => {
    character.style.bottom = '0px';
});
