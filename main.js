// ***** New Instantiation *****
var newGame = new Game();

// ***** Query Selectors *****
var board = document.querySelector('#gameBoard');
var playerOneWins = document.querySelector('.player-one-wins');
var playerTwoWins = document.querySelector('.player-two-wins');
var turnCounter = document.querySelector('.turn-counter');
var box = document.querySelectorAll('.box');

// ***** Event Listener *****
board.addEventListener('click', boardClickHandler);

// ***** Event Handler *****
function boardClickHandler(event) {
  if (newGame.currentPlayer === newGame.one.token) {
    setToken(newGame.one.token);
  } else if (newGame.currentPlayer === newGame.two.token) {
    setToken(newGame.two.token);
  }
  newGame.playerMove(event.target.id);
  changeTurn();
  winCondition();
}

// ***** Game Mechanics Functions *****
function clear() {
  turnCounter.innerHTML = `<h2 class='turns'>It's ${newGame.startingPlayer} turn!</h2>`;
}

function changeTurn() {
  if (newGame.winner === null) {
    turnCounter.innerHTML = `<h2 class='turns'>It's ${newGame.currentPlayer} turn!</h2>`;
  }
}

function setToken(token) {
  var boxes = document.querySelectorAll('.box');
  for (var i = 0; i < boxes.length; i++) {
    if (event.target.id === boxes[i].id && newGame.currentPlayer === token) {
      boxes[i].innerHTML += `<h1>${token}</h1>`;
    }
  }
}

// ***** Win & Draw Conditions *****
function declareWinner(token, wins, player, playerWin) {
  playerWin.innerHTML = `<p class="${player}">${wins}</p>`;
  turnCounter.innerHTML = `<h2 class='turns'>${token} wins!</h2>`;
  setTimeout(function () {
    newGame.reset();
    clear();
  }, 2000);
}

function winCondition() {
  if (newGame.winner === newGame.one.token) {
    declareWinner(newGame.one.token, newGame.one.wins, 'player-one-wins', playerOneWins);
  } else if (newGame.winner === newGame.two.token) {
    declareWinner(newGame.two.token, newGame.two.wins, 'player-two-wins', playerTwoWins);
  } else {
    declareDraw();
  }
}

function declareDraw() {
  if (!newGame.board.includes('') && !newGame.winner) {
    turnCounter.innerHTML = `<h2 class='turns'>Draw!</h2>`;
    setTimeout(function () {
      newGame.reset();
      clear();
    }, 2000);
  }
}
