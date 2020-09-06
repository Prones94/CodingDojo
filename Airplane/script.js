let player = {
    left: 450,
    top: 750
};
let enemies = [
    {left:850, top:250},
    {left:750, top:250},
    {left:650, top:250},
    {left:550, top:250},
    {left:450, top:250},
    {left:650, top:250},
    {left:350, top:250},
];

let missiles = [];

const drawPlayer = () => {
    content = "";
    content = `<div class="player" style="left: ${player.left}px; top: ${player.top}px;"></div>`
    document.getElementById("players").innerHTML = content
}
const drawEnemies = () => {
    content = "";
    for(let enemy of enemies) {
        content += `<div class="enemy" style="left: ${enemy.left}px; top: ${enemy.top}px;"></div>`
        document.getElementById("enemies").innerHTML = content;
        
    }
    
}

const drawMissiles = () => {
    content = "";
    for(let i = 0; i <missiles.length; i++) {
        content += "<div class='missile' style='left:"+missiles[i].left+"px; top:"+missiles[i].top+"px'></div>"
        
    }
    console.log('what what', content);
    document.querySelector(".missiles").innerHTML = content;
}

const moveMissiles = () => {
    for(missile of missiles) {
        missile.top -= 20;
    }
}

const moveEnemies = () => {
    for(let enemy of enemies){
        enemy.top += 10;
    }
}

document.onkeydown = function(e) {
    switch(e.keyCode) {
        case 37:      // LEFT
            if(player.left != 270){
                player.left-=10;
            }
            break;
        case 39:      // RIGHT
            if(player.left != 1110)
            player.left += 10;
            break;
        case 40:      // DOWN
            if(player.top != 840){
                player.top += 10;
                break;
            }
        case 38:      // UP
            if(player.top != 660){
                player.top -= 10;
                break;
        }
        case 32:        // FIRE
            missiles.push({left: player.left+34, top: player.top-15});
            break;

    }
    drawPlayer();
}



const gameLoop = () => {
    drawPlayer();
    // moveEnemies();
    drawEnemies();
    moveMissiles();
    drawMissiles();
    setTimeout(gameLoop, 300)
}

gameLoop();

