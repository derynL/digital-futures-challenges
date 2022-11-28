const express = require(`express`);
const router = express.Router();
const { check, validationResult } = require(`express-validator`);

const Booking = require(`../models/booking.model`);

const { isoDateRegExp } = require(`../js/regExps`);

router.use(express.json());

router.route(`/`).post(
    // Checks before it gets to the schema 
    // Sanitisation
    [
        check('filmId').exists().isMongoId(),
        check('bookingDate').exists().matches(isoDateRegExp),
        check('email').exists().isEmail(),
        check('adults').optional().isInt({ gt: -1 }),
        check('child').optional().isInt({ gt: -1 }),
        check('concessions').optional().isInt({ gt: -1 })
    ],
    (req, res) => {
        // Validation
        // validationResult is a method from express-validator
        // Extracts the validation errors from a request and makes them available in a Result object.
        // returns a result object and assigns it to 
        // Can handle what we do, throw error and return without trying to add to the database
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                'message': `There were errors in the booking data`,
                'error': errors.array()
            });
        }
        const booking = new Booking(req.body);
        booking.save()
            .then(booking => {
                res.status(200).json({ 'message': `Booking successful` });
            })
            .catch(err => {
                res.status(400).json({
                    'message': `Booking not made`,
                    'error': err
                });
            });
    }
);

module.exports = router;