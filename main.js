// ***** Game Instantiation *****
var newGame = new Game();

// var cubes = documzent.querySelectorAll('.game-board');
var cubes = document.querySelector('#gameBoard');

cubes.addEventListener('click', boardClickHandler);


function boardClickHandler(event) {
  newGame.playerMove(event.target.id);
    for (var i = 0; i < newGame.board.length; i++) {
      if (newGame.board[i] === event.target.id && newGame.currentPlayer === 1) {
        event.target.id.innerHTML += `<p>🍨</p>`;
      } else if (newGame.board[i] === event.target.id && newGame.currentPlayer === 2) {
          event.target.id.innerHTML += `<p>🍦</p>`;
        }
      }
    }
