const mongoose = require('mongoose');
const { Schema } = mongoose;

const apiKeySchema = new Schema({
    user : {
        type : Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    key : {
        type : String,
        unique : true,
        required : true
    },
    active : {
        type : Boolean,
        default : true
    }
}, { timestamps : true });

module.exports = mongoose.model('ApiKey', apiKeySchema);