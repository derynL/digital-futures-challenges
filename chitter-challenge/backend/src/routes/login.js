import express from 'express';
import Peeper from '../models/peeper.model.js';
import { check, validationResult } from 'express-validator';
const router = express.Router();

router
  .route(`/`)
  .post(
    [check('email').exists().notEmpty(), check('password').exists().notEmpty()],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.json({ message: `Error: \n\n Both fields are required.` });
      }

      const user = await Peeper.findOne({ email: req.body.email });
      if (user && user.password === req.body.password) {
        res.status(200).json({ message: `Success!`, user });
      } else {
        res.json({
          message: `That didn't work. Try again, or register for a new account`,
        });
      }
    }
  );

export { router as login };
