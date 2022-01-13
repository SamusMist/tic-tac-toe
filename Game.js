class Game {
  constructor(player) {
    this.one = new Player({id: 1, token: 🍨};
    this.two = new Player({id: 2, token: 🍦};
    this.currentPlayer = player;
    this.gameBoard = {
      one: 0,
      two: 0,
      three: 0,
      four: 0,
      five: 0,
      six: 0,
      seven: 0,
      eight: 0,
      nine: 0
    };
  }
  whoStarts() {
    var goFirst = Math.floor(math.random() * 1);
    if (goFirst % 2 === 0) {
      this.currentPlayer = this.one;
    }
    if (goFirst % 2 != 0) {
      this.playerTurn = 2;
      this.currentPlayer = this.two;
    }
  }
winningScore() {
  var scoreToWin;
  if (this.currentPlayer === this.one) {
    scoreToWin = 3;
  }
  if (this.currentPlayer === this.two) {
    scoreToWin = 6;
  }
}
}
