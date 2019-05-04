const mongoose = require('mongoose');
const Model = require('./crud.md.js')
const Schema = require('./comments.sc.js')
const provider = mongoose.model('comments', Schema);

class CommentsModel extends Model {
    constructor (){
        super();
        this.model = provider;
    }
}

module.exports = CommentsModel;
