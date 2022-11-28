class GameMulti {
  player1;
  player2;
  players;

  constructor(player1, player2) {
    this.players = [player1, player2];
  }

  currentPlayer() {
    return this.players[0];
  }

  otherPlayer() {
    return this.players[1];
  }

  switch() {
    this.players.reverse();
  }
}
export default GameMulti;
