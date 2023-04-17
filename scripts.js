
const PLAYER_ATTACK = 2;
const MONSTER_ATTACK = 1;
const PLAYER_DEFENCE = 15;
const MONSTER_DEFENCE = 12;

// returns true or false if the attack was a success
function calculateHitOrMiss (attack, defense) {
    const ATTACK_DICE = 20;
    return attack + getRandomNumber(ATTACK_DICE) >= defense;
}

// returns damage amount
function calculateDamage (numberOfDice, diceSize) {
    let damage = 0;
    for (let i = 0; i < numberOfDice; i++) {
        damage += rollDice(diceSize);
    }
    return damage;
}

// returns a random number between 1 and diceSize
function rollDice(diceSize) {
    return Math.floor(Math.random() * diceSize)+1;
}

// load array of rooms from rooms.json
function loadRooms() {
    const fs = require('fs');
    const buffer = fs.readFileSync('rooms.json');
    const rooms = JSON.parse(buffer);
    return rooms;
}

function getRandomRoomDescription(randomNumber) {
    return loadRooms().find(room => room.id === randomNumber).description;
}

var text = getRandomRoomDescription(rollDice(10));
console.log(text);