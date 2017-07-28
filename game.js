var health = 100;
var name = 'Federation';
var hits = 0;

// This function reduces the health variable by 1

function slap() {
    health -= 1;
    hits += 1;
    update();
}

function punch() {
    health -= 5;
    hits += 1;
    update();
}

function kick() {
    health -= 10;
    hits += 1;
    update();
}

function update() {
    document.getElementById("health").innerText = health;
    document.getElementById("hits").innerText = hits;
    document.getElementById("name").innerText = name;
}
update();