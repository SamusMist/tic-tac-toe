// ***** Game Instantiation *****
var newGame = new Game();

// var cubes = documzent.querySelectorAll('.game-board');
var cubes = document.querySelector('#gameBoard');
var squareOne = document.getElementById('0');

squareOne.addEventListener('click', boardClickHandler);
cubes.addEventListener('click', boardClickHandler);
