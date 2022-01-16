var newGame = new Game();

var board = document.querySelector('#gameBoard');
var playerOneWins = document.querySelector('.player-one-wins');
var playerTwoWins = document.querySelector('.player-two-wins');
var turnCounter = document.querySelector('.turn-counter');
var box = document.querySelectorAll('.box');


board.addEventListener('click', boardClickHandler);


function boardClickHandler(event) {
  var boxes = document.querySelectorAll('.box');
  for (var i = 0; i < boxes.length; i++) {
    if (event.target.id === boxes[i].id && newGame.currentPlayer === newGame.one.token) {
      boxes[i].innerHTML += `
      <h1>${newGame.one.token}</h1>
      `;
    } else if (event.target.id === boxes[i].id && newGame.currentPlayer === newGame.two.token) {
        boxes[i].innerHTML += `
        <h1>${newGame.two.token}</h1>
        `;
      }
    }
    newGame.playerMove(event.target.id);
    changeTurn();
    winCondition();
  }

function winCondition() {
  console.log('test')
  if (newGame.winner === newGame.one.token) {
    playerOneWins.innerHTML = `<p class='player-one-wins'>${newGame.one.wins}</p>`;
    turnCounter.innerHTML = `<h2 class='turns'>${newGame.one.token} wins!</h2>`;
    setTimeout(function () {
      newGame.reset();
      clear();
    }, 2000);
  } else if (newGame.winner === newGame.two.token) {
    playerTwoWins.innerHTML = `<p class='player-two-wins'>${newGame.two.wins}</p>`;
    turnCounter.innerHTML = `<h2 class='turns'>${newGame.two.token} wins!</h2>`;
    setTimeout(function () {
      newGame.reset();
      clear();
    }, 2000);
  } else {
    draw();
  }
}


function changeTurn() {
  if (newGame.winner === null) {
    turnCounter.innerHTML = `<h2 class='turns'>It's ${newGame.currentPlayer} turn!</h2>`;
}
}

function clear() {
  turnCounter.innerHTML = `<h2 class='turns'>It's ${newGame.startingPlayer} turn!</h2>`;
}

function draw() {
  if (!newGame.board.includes('') && !newGame.winner) {
    turnCounter.innerHTML = `<h2 class='turns'>Draw!</h2>`
    setTimeout(function () {
      newGame.reset();
      clear();
    }, 2000);
  }
}
