import express from 'express';
import { check, validationResult, body } from 'express-validator';
import Peeper from '../models/peeper.model.js';
const router = express.Router();

router.route(`/`).post(
  [
    check('name.firstName').isLength({ min: 2 }),
    check('name.lastName').isLength({ min: 2 }),
    check('userName').exists().notEmpty(),
    check('email').exists().isEmail(),
    check('password').exists().notEmpty(),
    body('email').custom(async (email) => {
      const user = await Peeper.find({ email: email });
      if (user.length) {
        return Promise.reject('E-mail already in use');
      }
    }),
    body('userName').custom(async (userName) => {
      const user = await Peeper.find({ userName: userName });
      if (user.length) {
        return Promise.reject('userName already in use');
      }
    }),
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({
        ...errors,
        message: `There may be a few issues - please check and try again: \n\n - All fields are required \n - Names should be minimum 2 characters  \n - Email address must follow a valid format`,
      });
    }

    const newUser = new Peeper(req.body);
    try {
      if (false) {
        res.json({
          message: `This email address and/or userName is already associated with an existing account.`,
        });
      } else {
        await newUser.save();
        res.status(201).json({ message: 'Welcome to Chitter', user: newUser });
      }
    } catch (e) {
      res.json({ message: 'Registration failed - no harm in trying again.' });
    }
  }
);

export { router as signup };
