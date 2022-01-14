class Game {
  constructor() {
    this.one = new Player({id: 1, token: '🍨'});
    this.two = new Player({id: 2, token: '🍦'});
    this.currentPlayer;
    this.board = [];
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

// checkForWin() {
//  if (this.board.includes(1, 2, 3) ||
//    this.board.includes(4, 5, 6) ||
//    this.board.includes(7, 8, 9) ||
//    this.board.includes(1, 4, 7) ||
//    this.board.includes(2, 5, 8) ||
//    this.board.includes(3, 6, 9) ||
//    this.board.includes(1, 5, 9) ||
//    this.board.includes(3, 5, 7)) {
//      return `Player ${this.currentPlayer} wins!`
//   }
// }

  playerMove(x) {
    if (this.board.includes(x)) {
      return `Try again, bish`;
    }
    if (this.currentPlayer === 1 && x > 0 && x < 10) {
      this.board.push(x);
    }
    if (this.currentPlayer === 2 && x > 0 && x < 10) {
      this.board.push(x)
    }
    this.checkForWin();
    this.changeTurn();
  }
}
