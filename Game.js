class Game {
  constructor() {
    this.one = new Player({id: 1, token: '🍨'});
    this.two = new Player({id: 2, token: '🍦'});
    this.currentPlayer;
    this.board = ['', '', '', '', '', '', '', '', ''];
  }

  whoStarts() {
    var goFirst = Math.floor(Math.random() * 2);
    if (goFirst === 1) {
      this.currentPlayer = this.one.id;
    }
    if (goFirst === 0) {
      this.currentPlayer = this.two.id;
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
    win()
  } else if (this.board[3] === this.board[4] && this.board[4] === this.board[5] && this.board[3] !== '') {
    win()
  } else if (this.board[6] === this.board[7] && this.board[7] === this.board[8] && this.board[6] !== '') {
    win()
  } else if (this.board[0] === this.board[3] && this.board[3] === this.board[6] && this.board[0] !== '') {
    win()
  } else if (this.board[1] === this.board[4] && this.board[4] === this.board[7] && this.board[1] !=='') {
    win()
  } else if (this.board[2] === this.board[5] && this.board[5] === this.board[8] && this.board[2] !== '') {
    win()
  } else if (this.board[0] === this.board[4] && this.board[4] === this.board[8] && this.board[0] !== '') {
    win()
  } else if (this.board[2] === this.board[4] && this.board[4] === this.board[6] && this.board[2] !== '') {
    win()
  }
}

  reset() {
    this.board = ['', '', '', '', '', '', '', '', ''];
  }

  draw() {

  }

  win() {
    if (this.currentPlayer === 1) {
      this.one.wins++;
    }
    if (this.currentPlayer === 2) {
      this.two.wins++;
    }
    console.log(`Player ${this.currentPlayer} wins!`)
    reset();
  }

  playerMove(position) {
    var playerOneValue = 'X';
    var playerTwoValue = 'O';
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
