const {getInflation} = require('../fetch/inflation');
const User = require('../models/user');

module.exports.getInflationData = async (req, res, next) => {
    const country = req.user.country || 'Canada';
    
    const data = await getInflation(country);

    res.status(200).json({ inflationData: data });
};