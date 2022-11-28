class Scores {
  player1Score = 0;
  player2Score = 0;
  player1Totals = [];
  player2Totals = [];
  player1Final = 0;
  player2Final = 0;
  player1Wins = false;
  player2Wins = false;
  draw = false;
  message = '';
  winner = '';

  outcomes = [
    // score matrix
    [0, 2, 1, 1, 2], // 0 Rock
    [1, 0, 2, 2, 1], // 1 Paper
    [2, 1, 0, 1, 2], // 2 Scissors
    [2, 1, 2, 0, 1], // 3 Lizard
    [1, 2, 1, 2, 0], // 4 Spock
  ];

  calcPoints(player1Choice, player2Choice) {
    if (this.outcomes[player1Choice][player2Choice] === 0) {
      // Draw
      (this.player1Score = 0), (this.player2Score = 0);
      return `It's a draw!`;
    }
    if (this.outcomes[player1Choice][player2Choice] === 1) {
      // Player 1 wins
      this.player1Score = 1;
      return `You win!`;
    }
    if (this.outcomes[player1Choice][player2Choice] === 2) {
      // Player 2 wins
      this.player2Score = 1;
      return `Marvin wins!`;
    }
  }

  saveScores(player1Score, player2Score) {
    this.player1Totals.push(player1Score);
    this.player2Totals.push(player2Score);
  }

  checkGameWinner() {
    if (player1Totals.length === 5 && player2Totals.length === 5) {
      this.player1Final = this.player1Totals.reduce(
        (partial, a) => partial + a,
        0
      );
      this.player2Final = this.player2Totals.reduce(
        (partial, a) => partial + a,
        0
      );
    }
    if (this.player1Final === this.player2Final)
      this.message = `No winner this time`;
    this.player1Final > this.player2Final
      ? (this.message = `${this.player1} is the champion!`)
      : (this.message = `${this.player2} is the champion!`);
  }
}

export default Scores;
