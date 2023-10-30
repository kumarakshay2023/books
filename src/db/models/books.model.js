const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    author:{
        type:String,
        require:true
    },
    summary:{
        type:String,
        require:true
    }
},{timestamps:true})

module.exports = mongoose.model('book',bookSchema);