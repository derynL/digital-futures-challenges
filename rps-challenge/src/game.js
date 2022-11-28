import Scores from './scores.js';

class Game {
  player1;
  player2;

  constructor(player1) {
    this.player1 = player1;
    this.player2 = 'Marvin';
  }

  personChoice(option) {
    const options = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
    let choice = options.indexOf(option);
    return choice;
  }

  marvinsChoice() {
    let machineChoice = Math.floor(Math.random() * 5);

    return machineChoice;
  }

  getChoiceStr(choiceIndex) {
    const options = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
    let string = options[choiceIndex];
    return string;
  }
}

export default Game;
