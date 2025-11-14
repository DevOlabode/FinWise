const mongoose = require('mongoose');
const { Schema } = mongoose;

const newsArticleSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    url : {
        type : String,
        required : true,
        unique : true
    },
    summary : {
        type : String,
        required : false
    }, 
    source :{
        type : String,
    },
    category : {
        type : String,
        required : true
    }
}, { timestamps : true });

module.exports = mongoose.model('NewsArticle', newsArticleSchema);