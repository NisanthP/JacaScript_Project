// A function to display player information

var player1;
var player2;
var player;
var showPlayerInfo;

player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50
};

player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40
};

showPlayerInfo = function () {
    console.log(player.name);
    console.log("------------------------------");
    console.log(player.name + " is in " + player.place);
    console.log(player.name + " has health " + player.health);
    console.log("------------------------------");
    console.log("");
};

player = player1;
showPlayerInfo();

player = player2;
showPlayerInfo();

function where(){
    console.log(player.name + " is in " + player.place);
}

player = player1;
where();

player = player2;
where();

function fitness(){
    console.log(player.name + " has health " + player.health);
}

player = player1;
fitness();

player = player2;
fitness();

var player1;
var player2;
var currentPlayer;
var showPlayerInfo;
var getPlayerName;
var getPlayerPlaceAndHealth;

player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50
};

player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40
};

getPlayerName = function(player) {
    return player.name;
};

getPlayerPlaceAndHealth = function(player) {
    return player.name + " is in " + player.place + "\n" + player.name + " has health " + player.health;
};

showPlayerInfo = function () {
    console.log(getPlayerName(currentPlayer));
    console.log("------------------------------");
    console.log(getPlayerPlaceAndHealth(currentPlayer));
    console.log("------------------------------");
    console.log("");
};

// Set current player and display their info
currentPlayer = player1;
showPlayerInfo();

currentPlayer = player2;
showPlayerInfo();


/* Further Adventures
 *
 * 1) Write a function that just shows
 *    where the player is.
 *
 * 2) Write a function that just shows
 *    the player's health.
 *
 * 3) Change the showPlayerInfo function
 *    to use your two functions.
 *
 */