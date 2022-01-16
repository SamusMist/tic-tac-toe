// ***** Game Instantiation *****
var newGame = new Game();

// var cubes = documzent.querySelectorAll('.game-board');
var board = document.querySelector('#gameBoard');
var winnerText = document.querySelector('.board-area');
// var squareOne = document.getElementById('0');

// squareOne.addEventListener('click', boardClickHandler);
board.addEventListener('click', boardClickHandler);


function boardClickHandler(event) {
  newGame.playerMove(event.target.id);
  var boxes = document.querySelectorAll('.box');
  for (var i = 0; i < boxes.length; i++) {
    if (event.target.id === boxes[i].id && newGame.currentPlayer === 1) {
      boxes[i].innerHTML += `
      <h1>${newGame.one.token}</h1>
      `;
    } else if (event.target.id === boxes[i].id && newGame.currentPlayer === 2) {
        boxes[i].innerHTML += `
        <h1>${newGame.two.token}</h1>
        `;
      }
    }
  }
