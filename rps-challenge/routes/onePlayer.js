import express from 'express';
import Game from '../src/game.js';
import Scores from '../src/scores.js';
const router = express.Router();

//Set up a new instance of game class which will instantiate a player object and a machine object
router.post('/', (req, res) => {
  const player1 = req.body.player;
  const game = new Game(player1);
  req.app.locals.game = game;
  res.redirect('/onePlayer');
});

router.get('/', (req, res) => {
  const player = req.app.locals.game.player1;
  res.render('../views/onePlayer.ejs', {
    player: player,
  });
});

export default router;
