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
    }
    drawPlayer();
}

drawPlayer();
drawEnemies();