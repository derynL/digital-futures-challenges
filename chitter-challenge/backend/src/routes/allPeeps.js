import express from 'express';
import Peep from '../models/peep.model.js';

const router = express.Router();

router.route(`/`).get(async (req, res) => {
  try {
    const peeps = await Peep.find({});
    res.json(peeps);
  } catch (e) {
    res.status(404).send(`Not found`);
  }
});

export { router as allPeeps };
