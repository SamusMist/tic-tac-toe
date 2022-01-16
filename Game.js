class Game {
  constructor() {
    this.one = new Player(1, '🧚‍♂️');
    this.two = new Player(2, '🧞‍♀️');
    this.startingPlayer = 1;
    this.currentPlayer = this.startingPlayer;
    this.board = ['', '', '', '', '', '', '', '', ''];
  }

  whoStarts() {
    if (this.startingPlayer === 1) {
      this.startingPlayer = 2;
    } else {
      this.startingPlayer = 1;
      }
    }

  changeTurn() {
    if (this.currentPlayer === this.one.id) {
      this.currentPlayer = this.two.id;
    } else if (this.currentPlayer === this.two.id) {
      this.currentPlayer = this.one.id;
    }
  }

checkForWin() {
  if (this.board[0] === this.board[1] && this.board[1] === this.board[2] && this.board[0] !== '') {
    this.win()
  } else if (this.board[3] === this.board[4] && this.board[4] === this.board[5] && this.board[3] !== '') {
    this.win()
  } else if (this.board[6] === this.board[7] && this.board[7] === this.board[8] && this.board[6] !== '') {
    this.win()
  } else if (this.board[0] === this.board[3] && this.board[3] === this.board[6] && this.board[0] !== '') {
    this.win()
  } else if (this.board[1] === this.board[4] && this.board[4] === this.board[7] && this.board[1] !== '') {
    this.win()
  } else if (this.board[2] === this.board[5] && this.board[5] === this.board[8] && this.board[2] !== '') {
    this.win()
  } else if (this.board[0] === this.board[4] && this.board[4] === this.board[8] && this.board[0] !== '') {
    this.win()
  } else if (this.board[2] === this.board[4] && this.board[4] === this.board[6] && this.board[2] !== '') {
    this.win()
  }
  this.draw();
}

  reset() {
    this.board = ['', '', '', '', '', '', '', '', ''];
    this.currentPlayer = this.startingPlayer;
    this.whoStarts();
  }

  draw() {
    if (!this.board.includes('')) {
      console.log('Draw!')
      winnerText.innerHTML += `<h2>Draw!</h2>`
    }
  }

  win() {
    if (this.currentPlayer === 1) {
      this.one.wins++;
      winnerText.innerHTML += `<h2>🧚‍♂️ wins!</h2>`;
    }
    if (this.currentPlayer === 2) {
      this.two.wins++;
      winnerText.innerHTML += `<h2>🧞‍♀️ wins!</h2>`;
    }
  }

  playerMove(position) {
    var playerOneValue = '🧚‍♂️';
    var playerTwoValue = '🧞‍♀️';
    if (this.board[position] !== '' || position < 0 || position > 8) {
      return `Try again, bish`;
    }
    if (this.currentPlayer === 1) {
      this.board[position] = playerOneValue;
    }
    if (this.currentPlayer === 2) {
      this.board[position] = playerTwoValue;
    }
    this.checkForWin();
    this.changeTurn();
  }
}
