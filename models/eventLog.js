const mongoose = require('mongoose');
const { Schema } = mongoose;

const eventLogSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    user : {
        type : Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    metaData : {

    },
    eventType : {
        type : String,
        required : true,
        enum : ['VIEW_INDICATOR','VIEW_NEWS','VIEW_INSIGHT','UPDATE_PREFERENCE','CHANGE_REGION','UPDATE_TRACKED_INDICATORS','START_QUIZ','FINISH_QUIZ','EARN_BADGE',]
    }
}, {timeStamps : true});

module.exports = mongoose.model('EventLog', eventLogSchema);