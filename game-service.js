function GameService() {

    var target = {
        characters: [],
        items: []
    }

    // SHIP DATA

    var ship1 = new Target('USS Enterprise', 100, 1, 5, 10, 'https://upload.wikimedia.org/wikipedia/en/5/54/USS_Enterprise_%28NCC-1701-A%29.jpg')
    var ship2 = new Target('Bird of Prey', 100, 1, 5, 10, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA5L9iQu3aqufOtnwfTuw9NEZmsfmxI1pIs2Pv4OgymNCDnNtjvQ')
    target.characters.push(ship1, ship2);

    // MOD DATA

    var item1 = new Item('Shield', .2, .3, .5)
    // var item2 = new Item('Evasive maneuvers', .2, .3, .5)
    // var item3 = new Item("Scotty!!!", .2, .3, .5)
    target.items.push(item1);

    // This constructor function is used to create new characters
    var id = 1
    function Target(name, health, slap, punch, kick, picture) {
        this.id = id
        this.name = name;
        this.health = health;
        this.attacks = {
            "slap": slap,
            "punch": punch,
            "kick": kick
        };
        this.hits = 0;
        this.picture = picture;
        id++
    }
    // This constructor function is used to create new mod items

    function Item(name, shield, evasive, scotty) {
        this.name = name;
        this.items = {
            "shield": shield,
            "evasive": evasive,
            "scotty": scotty
        }
    }

    function findAttackType(attack) {
        var attackType = ship1.attacks;
        if (attackType.slap == attack) {
            return attackType.slap
        }
        else if (attackType.punch == attack) {
            return attackType.punch
        }
        else if (attackType.kick == attack) {
            return attackType.kick
        }
        else {
            console.error("No such attack")
        }
    }

    function findModType(mod) {
        var modType = item1.items

        if (modType.shield == mod) {
            return modType.shield
        }
        else if (modType.evasive == mod) {
            return modType.evasive
        }
        else if (modType.scotty == mod) {
            return modType.scotty
        }
        else {
            console.error("No such item")
        }
    }

    this.attacks = function (attack) {
        var char = findAttackType(attack)

        return char
    }

    this.mods = function (mod) {
        var mods = findModType(mod)
        return mods
    }

    // GET COPIED CHARACTER DATA
    this.getChar = function () {
        var targetCopy = JSON.parse(JSON.stringify(target))
        return targetCopy
    }
}