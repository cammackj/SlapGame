function GameService(){

var dataStore = this;

// This is the object data.
var target = {
    characters: [],
    items: []
}

// This constructor function is used to create and push new characters to the target.characters array

function Target(name, health, hits) {
    this.name = name;
    this.health = health;
    this.hits = hits;
}

var ship1 = new Target('USS Enterprise', 100, 0)
var ship2 = new Target('Bird of Prey', 100, 0)

target.characters.push(ship1, ship2);

// This constructor function is used to create and push new characters to the target.items array

function Item(name, modifier, description) {
    this.name = name;
    this.modifier = modifier;
    this.description = description;
}

var shield = new Item('Shield', .2, 'Deflector Shield')
var phaser = new Item('Evasive maneuvers', .3, 'Evade and Attack')
var torpedo = new Item("Scotty!!!", .5, "Miracle Worker")

target.items.push(shield, phaser, torpedo);

// Function used to update previous function data
function update() {
    document.getElementById("name").innerText = target.characters[0].name;
    document.getElementById("health").innerText = target.characters[0].health;
    document.getElementById("hits").innerText = target.characters[0].hits;
}

update();





}