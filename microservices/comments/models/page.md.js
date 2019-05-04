const mongoose = require('mongoose');
const Model = require('./crud.md.js')
const Schema = require('./page.sc.js')
const provider = mongoose.model('pages', Schema);

class PageModel extends Model {
    constructor (){
        super();
        this.model = provider;
    }
}

module.exports = PageModel;
