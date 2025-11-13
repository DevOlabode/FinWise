const passport = require('passport');

const User = require('../models/user');

const ExpressError  = require('../utils/expressError');
const catchAsync  = require('../utils/catchAsync');

module.exports.register = catchAsync(async(req, res)=>{
    const {username, email, password} = req.body;
    const user = await User.register(new User({ username, email }), password);
    await user.save();

    res.status(201).json({msg : 'User registered successfully'});
});

module.exports.login = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
    if (err) {
        return next(err);
    }
    if (!user) {
        return res.status(401).json({ msg: info.message || 'Login failed' });
    }

    req.logIn(user, (err) => {
        if (err) {
            return next(err)
        }
            return res.status(200).json({ msg: 'Logged in successfully' });
        });
    })(req, res, next);
};