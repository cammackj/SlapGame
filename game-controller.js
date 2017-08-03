function GameController() {

    var gameService = new GameService();
    var characters = gameService.getChar().characters;
    var items = gameService.getChar().items[0].items;

    function draw() {
        //console.log(characters)
        var template = ''
        for (var i = 0; i < characters.length; i++) {
            var char = characters[i];
            template += `
            
            <header>
                <span>Name: <span>${char.name}</span></span>
                <span>Health: <span> ${char.health}</span></span>
                <span>Hits: <span> ${char.hits}</span></span>
                <img src="${char.picture}" style="width:300px;height:200px" alt="starship enterprise">
            </header>
            `
        }
        document.getElementById("chars").innerHTML = template;
    }

    //public data

    // THIS IS THE ATTACK FUNCTION
    this.attack = function (attack) {
        gameService.attacks(attack);
        characters[1].health -= attack * items;
        characters[1].hits++;
        draw()
    }

    this.giveItem = function (mod) {
        gameService.mods(mod);
        items = 1 + mod;
    }
    draw()
}