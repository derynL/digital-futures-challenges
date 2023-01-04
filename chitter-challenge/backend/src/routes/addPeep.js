import express from 'express';
import { check, validationResult } from 'express-validator';

const router = express.Router();

import Peep from '../models/peep.model.js';

router.route(`/`).post(
  // [
  //   check('peepMsg').exists(),
  //   check('date').exists(), //.isISO8601(),
  //   check('userName').exists(),
  // ],
  (req, res) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   console.log(errors);
    //   return res.status(422).send(`Peep post failed`);
    // }

    const peep = new Peep(req.body);
    peep
      .save()
      .then((peep) => {
        res.status(201).json({ message: 'Peep added', peep });
      })
      .catch((err) => {
        console.log(err.message);
        res.status(400).json({
          message: 'Post failed',
          error: err,
        });
      });
  }
);

export { router as addPeep };
