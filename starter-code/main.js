var cardOne = "king";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "queen";
var gameBoard = document.getElementByID("game-board");


var createCards = function () {
for (var x = 0; x < 4; x++){
	var newDiv = document.createElement('div');
	newDiv.id = 'game-card' + x;
	newDiv.className = 'card';
}
};

document.appendChild (gameBoard);
