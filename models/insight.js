//AI Outpuut model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InsightSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    user : {
        type : Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    region :{
        type : Schema.Types.ObjectId,
        ref : 'RegionData',
        required : true
    },
    content : {
        type : String,
        required : true,
        default : ''
    }
}, { timestamps : true });

module.exports = mongoose.model('Insight', InsightSchema);