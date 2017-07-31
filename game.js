// // This is the object data.
// var target = {
//     characters: [],
//     items: []
// }

// // This constructor function is used to create and push new characters to the target.characters array

// function Target(name, health, hits) {
//     this.name = name;
//     this.health = health;
//     this.hits = hits;
// }

// var ship1 = new Target('USS Enterprise', 100, 0)
// var ship2 = new Target('Bird of Prey', 100, 0)

// target.characters.push(ship1, ship2);

// // This constructor function is used to create and push new characters to the target.items array

// function Item(name, modifier, description) {
//     this.name = name;
//     this.modifier = modifier;
//     this.description = description;
// }

// var shield = new Item('Shield', .2, 'Deflector Shield')
// var phaser = new Item('Phasers', .3, 'Directed Energy Weapon')
// var torpedo = new Item("Torpedo", .5, "Photon Torpedo Weapon")

// target.items.push(shield, phaser, torpedo);

// current function that i am working on

function giveItem(arr) {
    modTotal = 0;
    
}

function addMods(target) {
    var totalMods = 1;
    for (var i = 0; i < target.length; i++) {
        var mod = target[i];
        totalMods += mod.modifier;
    }
    // console.log(totalMods)
    return totalMods
}
// console.log(target.items)
// addMods(target.items)

// Ship attack functions
function slap() {
    target.characters[0].health -= 1 * addMods(target.items);
    target.characters[0].hits += 1;
    // console.log();
    update();
}

function punch() {
    target.characters[0].health -= 5 * addMods(target.items);
    target.characters[0].hits += 1;
    update();
}

function kick() {
    target.characters[0].health -= 10 * addMods(target.items);
    target.characters[0].hits += 1;
    update();
}

// // Function used to update previous function data
// function update() {
//     document.getElementById("name").innerText = target.characters[0].name;
//     document.getElementById("health").innerText = target.characters[0].health;
//     document.getElementById("hits").innerText = target.characters[0].hits;
// }

// update();

// addMods(target.items)

// Add new characters here and push them to the object type variable
// var char1 = new Obj('USS Enterprise', 'https://upload.wikimedia.org/wikipedia/en/5/54/USS_Enterprise_%28NCC-1701-A%29.jpg')
// var char2 = new Obj('Klingon Bird of Prey', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA5L9iQu3aqufOtnwfTuw9NEZmsfmxI1pIs2Pv4OgymNCDnNtjvQ')

// charObj.characters.push(char1, char2)