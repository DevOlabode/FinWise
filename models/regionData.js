const mongoose = require('mongoose');
const { Schema } = mongoose;

const regionDataSchema = new Schema({
    regionCode : {
        type : String,
        default : 'GLOBAL',
        unique : true
    },
    region :{
        type : String,
        required : true
    },
    indicators : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Indicator',
        required : true
    },
    value : {
        type : Number,
        required : true,
        default : 0
    },
    unit : {
        type : String,
        required : false
    },
    securityLevel : {
        type : String,
        required : true,
        enum : ['low', 'medium', 'high'],
        default : 'medium'
    }
}, { timestamps : true });

module.exports = mongoose.model('RegionData', regionDataSchema);