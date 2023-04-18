
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


function loadJson(file) {
    const fs = require('fs');
    const buffer = fs.readFileSync(file);
    const rooms = JSON.parse(buffer);
    return rooms;
}

const roomFile = 'rooms.json';
function getRandomRoomDescription(randomNumber) {
    return loadJson(roomFile).find(room => room.id === randomNumber).description;
}

// var text = getRandomRoomDescription(rollDice(10));
// console.log(text);



// return a few elements of an array
function getRandomElements(array, numberOfElements) {
    let randomElements = [];
    for (let i = 0; i < numberOfElements; i++) {
        randomElements.push(array[rollDice(array.length)-1]);
    }
    return randomElements;
}

const itemsFile = 'items.json';
const itemsInRoom = getRandomElements(loadJson(itemsFile), 3);

// itemsInRoom.forEach(item => {
//     console.log(item);
// });

const monsterFile = 'monsters.json';
const monstersInRoom = getRandomElements(loadJson(monsterFile), 1);

// // monstersInRoom.forEach(monster => {
//     console.log(monster);
// });
    

function createEnconter() {
    const encounter = {
        roomDescription: getRandomRoomDescription(rollDice(10)),
        monster: getRandomElements(loadJson(monsterFile), 1),
        items: getRandomElements(loadJson(itemsFile), 3)
    }
    return encounter;
}

const encounter = createEnconter(); 

var textResult =  encounter.roomDescription + " Looking around the room you see, "
encounter.items.forEach(item => {
    textResult += item.description + " ";
});
textResult += "In the middle of the room stands, " + encounter.monster[0].description;

console.log(textResult);