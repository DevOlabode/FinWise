const mongoose = require('mongoose');
const { Schema } = mongoose;

const indicatorSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    code : {
        type : String,
        required : true,
        unique : true
    },
    description : {
        type : String,
        required : false
    },
    category : {
        type : String,
        required : true,
        enum : []
    },
    supportedRegions : {
        type : [String],
        required : true
    }
}, { timestamps : true });

module.exports = mongoose.model('Indicator', indicatorSchema);