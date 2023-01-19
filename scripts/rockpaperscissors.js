const playArea = document.getElementById("playArea");
const playWrapper = document.getElementById("playWrapper");
const winText = document.getElementById('winText');
const title = document.getElementById('title');
const screenHeight = getComputedStyle(playWrapper).height;
const screenWidth = getComputedStyle(playWrapper).width;
const numberOfPlayers = 15;
const movementSpeed = .5;
const playerSize = 50;
var players = [];
var rocks = [];
var papers = [];
var scissors = [];
var updateInterval = null;
var slowUpdateInterval = null;
var winner = '';

const Player = {
    element: null,
    type: 0,
    selfList: null,
    enemyList: null,
    attackerList: null,
    fleeing: false,
    x: 0,
    y: 0,

    init() {
        switch (this.type) {
            case 1:
                this.selfList = rocks;
                this.enemyList = scissors;
                this.attackerList = papers;
                break;
            case 2:
                this.selfList = papers;
                this.enemyList = rocks;
                this.attackerList = scissors;
                break;
            case 3:
                this.selfList = scissors;
                this.enemyList = papers;
                this.attackerList = rocks;
                break;
            default:
                break;
        }
    },

    update() {
        // console.log(this.enemyList.length);
        if (this.enemyList.length === 0) {
            this.target = getClosestTarget(this, this.attackerList);
            this.fleeing = true;
        } else {
            this.target = getClosestTarget(this, this.enemyList);
            this.fleeing = false;
            // console.log('running!!');
        }
        if (this.target === null) { return };


        let movementVector = getMovementVector(this, this.target);
        if (this.fleeing === true) { movementVector.x *= -1; movementVector.y *= -1; };
        let deltaX = this.x + movementVector.x / this.target.distance * movementSpeed;
        let deltaY = this.y + movementVector.y / this.target.distance * movementSpeed;

        if (deltaX < 0 || deltaX > parseInt(screenWidth) - playerSize) { deltaX = this.x };
        if (deltaY < playerSize || deltaY > parseInt(screenHeight)) { deltaY = this.y };

        placeElement(this, deltaX, deltaY)
    },

    slowUpdate() {
        for (var i = 0; i < this.attackerList.length; i++) {
            if (isColliding(this, this.attackerList[i])) {
                console.log("Ah!");
                switch (this.type) {
                    case 1:
                        switchType(this, 2);
                        break;
                    case 2:
                        switchType(this, 3);
                        break;
                    case 3:
                        switchType(this, 1);
                    default:
                        break;
                }
            }
        }
    }

}

window.onload = Start();
function Start() {
    for (i = 0; i < numberOfPlayers; i++) {
        let currElement = document.createElement('p');
        let currType = getRandomInt(1,4);
        currElement.className = "type_"+currType;
        // currElement.textContent = i;
        playArea.appendChild(currElement);

        let currPlayer = Object.create(Player);
        currPlayer.element = currElement;
        currPlayer.type = currType;

        switch (currType) {
            case 1:
                rocks.push(currPlayer);
                break;
            case 2:
                papers.push(currPlayer);
                break;
            case 3:
                scissors.push(currPlayer);
            default:
                break;
        }
        currPlayer.init();
        currElement.style.left = getRandomInt(30, parseFloat(screenWidth) -30) + "px";
        currElement.style.top = getRandomInt(30, parseFloat(screenHeight) -30) + "px";
        players.push(currPlayer);
    }
    updatePositions();
    updateInterval = setInterval(Update, 30/1000);
    // setInterval(Update, 2000);
    slowUpdateInterval = setInterval(SlowUpdate, 500);
    // Update();
}





function Update() {
    title.innerText = rocks.length+"🗿 | "+papers.length+"📜 | "+scissors.length+"✂️";
    if (players.length === rocks.length) { winner = 'rock'; stop() } else
    if (players.length === papers.length) { winner = 'paper'; stop() } else
    if (players.length === scissors.length) { winner = 'scissors'; stop() }
    winText.innerText = winner;


    for (var i = 0; i < rocks.length; i++) {
        rocks[i].update();
    }
    for (var i = 0; i < papers.length; i++) {
        papers[i].update();
    }
    for (var i = 0; i < scissors.length; i++) {
        scissors[i].update();
    }

}

function SlowUpdate() {
    for (var i = 0; i < rocks.length; i++) {
        rocks[i].slowUpdate();
    }
    for (var i = 0; i < papers.length; i++) {
        papers[i].slowUpdate();
    }
    for (var i = 0; i < scissors.length; i++) {
        scissors[i].slowUpdate();
    }
}



function placeElement(e, x, y) {
    if (x > parseFloat(screenWidth)) {
        return;
    }
    e.element.style.top= parseFloat(screenHeight) - y +"px";
    e.element.style.left= x +"px";
    e.x = parseFloat(e.element.style.left);
    e.y = parseFloat(screenHeight) - parseFloat(e.element.style.top);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}


function isColliding(a, b) {

    return !(
        ((a.y + playerSize) < (b.y)) ||
        (a.y > (b.y + playerSize)) ||
        ((a.x + playerSize) < b.x) ||
        (a.x > (b.x + playerSize))
    );
}

function updatePositions() {
    for (var i = 0; i < numberOfPlayers; i++) {
        players[i].x = parseFloat(players[i].element.style.left);
        players[i].y = parseFloat(screenHeight) - parseFloat(players[i].element.style.top);
        console.log(players[i]);
    }
}

function getClosestTarget(player, targetList) {
    var closestTarget = null;
    for (var i = 0; i < targetList.length; i++) {
        if (closestTarget === null) { closestTarget = targetList[i]};
        
        let testTargetDistance = getDistance(player, targetList[i]);
        
        if (testTargetDistance === 0) { return };
        
        let closestTargetDistance = getDistance(player, closestTarget);

        if (testTargetDistance < closestTargetDistance) {
            closestTarget = targetList[i];
        }
    }
    closestTarget.distance = getDistance(player, closestTarget);
    return closestTarget;
}

function getDistance(object1, object2) {
    let x = object1.x - object2.x;
    let y = object1.y - object2.y;
    return Math.sqrt(x*x + y*y);
}

function getMovementVector(player, target) {
    var tx = target.x - player.x;
        ty = target.y - player.y;
        // angle = Math.atan2(tx, ty) / Math.PI * 180;;
        distance = getDistance(player, target);
        x = tx/distance;
        y = ty/distance;
        vector = {x: tx, y: ty};
    return vector;
}

function switchType(player, typeID) {
    player.type = typeID;
    player.element.className = "type_"+typeID;
    player.selfList.splice(player.selfList.indexOf(player), 1);
    switch (typeID) {
        case 1:
            rocks.push(player);
            break;
        case 2:
            papers.push(player);
            break;
        case 3:
            scissors.push(player);
        default:
            break;
    }
    player.init();
}

function stop() {
    clearInterval(updateInterval);
    clearInterval(slowUpdateInterval);
}


