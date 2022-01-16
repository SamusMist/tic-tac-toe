class Game {
  constructor() {
    this.one = new Player(1, '🧚‍♂️');
    this.two = new Player(2, '🧞‍♀️');
    this.startingPlayer = this.one.token;
    this.currentPlayer = this.startingPlayer;
    this.board = ['', '', '', '', '', '', '', '', ''];
    this.winner = null;
  }

  whoStarts() {
    if (this.startingPlayer === this.one.token) {
      this.startingPlayer = this.two.token;
    } else if (this.startingPlayer === this.two.token) {
      this.startingPlayer = this.one.token;
      }
    }

  changeTurn() {
    if (this.currentPlayer === this.one.token) {
      this.currentPlayer = this.two.token;
    } else if (this.currentPlayer === this.two.token) {
      this.currentPlayer = this.one.token;
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
}

  reset() {
    this.board = ['', '', '', '', '', '', '', '', ''];
    this.currentPlayer = this.startingPlayer;
    this.winner = null;
    for (var i = 0; i < box.length; i++) {
      box[i].innerHTML = ``;
    }
    this.whoStarts();
    this.changeTurn();
  }

  win() {
    if (this.currentPlayer === this.one.token) {
      this.one.wins++;
      this.winner = this.one.token;
      console.log('player 1 wins')
    }
    if (this.currentPlayer === this.two.token) {
      console.log('player 2 wins')
      this.two.wins++;
      this.winner = this.two.token;
    }
  }

  playerMove(position) {
    if (this.board[position] !== '' || position < 0 || position > 8) {
      return `Try again, bish`;
    }
    if (this.currentPlayer === this.one.token) {
      this.board[position] = this.one.token;
    }
    if (this.currentPlayer === this.two.token) {
      this.board[position] = this.two.token;
    }
    this.checkForWin();
    this.changeTurn();
  }
}
