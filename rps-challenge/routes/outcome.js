import express from 'express';
import Scores from '../src/scores.js';
import Game from '../src/game.js';

const router = express.Router();

router.post('/', (req, res) => {
  const game = req.app.locals.game;
  const scores = new Scores();
  req.app.locals.scores = scores;
  const option = req.body.playerChoice;
  const humanIndex = game.personChoice(option);
  const machineIndex = game.marvinsChoice();
  const humanChoice = game.getChoiceStr(humanIndex);
  const machineChoice = game.getChoiceStr(machineIndex);
  const result = scores.calcPoints(humanIndex, machineIndex);

  res.render('outcome', {
    humanChoice: humanChoice,
    machineChoice: machineChoice,
    result: result,
  });
});

export default router;
