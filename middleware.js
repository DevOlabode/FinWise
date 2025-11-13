module.exports.isLoggedIn = function(req, res, next){
    if(!req.isAuthenticated()){
        res.status(401).json({msg : 'You must be logged in!'})
    }
    next();
};