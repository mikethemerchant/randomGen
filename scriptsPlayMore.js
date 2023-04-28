//create array of objects with attack, defense, name, and hitpoint properties
var ThingArray = [
    {
        id: 1,
        name: "Tordack",
        attack: 6,
        defense: 15,
        damage: 10,
        hitpoints: 30
    },
    {
        id: 2,
        name: "Orc",
        attack: 4,
        defense: 13,
        damage: 12,
        hitpoints: 30
    },
    {
        id: 3,
        name: "Goblin",
        attack: 1,
        defense: 10,
        damage: 5,
        hitpoints: 10
    },
    {
        id: 4,
        name: "Dragon",
        attack: 30,
        defense: 25,
        damage: 50,
        hitpoints: 250
    }
];

// create a function that will display this list of objects with a console.table
function displayThings() {
    console.table(ThingArray);
}

function fight(attacker, defender) {
    // create a function that will take two objects and have them fight
    // the function should return the result of the attack and reduce the hitpoints of the object that was attacked
    let attackValue = attacker.attack + Math.floor(Math.random() * 20);
    let attackDamage = Math.floor(Math.random() * attacker.damage);
    let text = "nothing happened...";

    if (attackValue > defender.defense) {
        defender.hitpoints -= attackDamage;
        if(defender.hitpoints <= 0) {
            text = `${attacker.name} hit ${defender.name} for ${attackDamage} damage!` + ` ${defender.name} is dead.`;
        } else { 
            text = `${attacker.name} hit ${defender.name} for ${attackDamage} damage!` + ` ${defender.name} has ${defender.hitpoints} hitpoints left!`;
        }
    } else {
        text = `${attacker.name} missed!`;
    }

    return text;
}

displayThings();

while (ThingArray[0].hitpoints > 0 && ThingArray[1].hitpoints > 0) {
    console.log( fight(ThingArray[1], ThingArray[0]) );
    console.log( fight(ThingArray[0], ThingArray[1]) );
}
