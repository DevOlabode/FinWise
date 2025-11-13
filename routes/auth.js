const express  = require('express');
const router = express.Router();

const controller = require('../controllers/user');

router.post('/register', controller.register);

router.post('/login', controller.login);

const isLoggedIn = function(req, res, next){
    if(!req.isAuthenticated()){
        res.status(401).json({msg : 'You must be logged in!'})
    }
    next();
};

router.post('/logout',isLoggedIn, catchAsync(async(req, res)=>{
    req.logout(function(err){
        if(err) return next(err)
        req.session.destroy(()=>{
        res.status(201).json({msg : 'Logged out successfully'})
    })
    })
}));

router.get('/profile', isLoggedIn, catchAsync(async(req, res)=>{
    const user = await User.findById(req.user._id);
    if(!user) throw new ExpressError('User not found', 404);
    res.status(200).json(user)
}))

module.exports = router;