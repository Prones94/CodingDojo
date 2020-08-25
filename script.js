let leftValue = 450, topValue = 100, direction = 'down', walkValue = 1;

const update = () => {
    document.getElementById("character").style.left = leftValue + "px"
    document.getElementById("character").style.top = topValue + "px";
    document.getElementById("character").style.backgroundImage = `url('img/${direction}${walkValue}.png')`;
}
document.onkeydown = function (evt) {
    if(walkValue === 1){
        walkValue = 2;
    } else if(walkValue === 2){
        walkValue = 1
    }
    // console.log(evt);
    if (evt.keyCode == 37 && leftValue > 0) { // LEFT
        leftValue -= 10;
        direction='left'
    } else if (evt.keyCode == 39 && leftValue < 500) { //RIGHT
        leftValue += 10
        direction='right'
    } else if (evt.keyCode == 38 && topValue > 0) { //UP
        topValue -= 10;
        direction = 'top'
    } else if (evt.keyCode == 40 && topValue < 500) { // DOWN
        topValue += 10;
        direction='down'
    }
    update();
}

