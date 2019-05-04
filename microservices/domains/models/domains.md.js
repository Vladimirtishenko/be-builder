const mongoose = require('mongoose');
const Model = require('./crud.md.js')
const Schema = require('./domains.sc.js')
const provider = mongoose.model('domains', Schema);

class DomainsModel extends Model {
    constructor (){
        super();
        this.model = provider;
    }
}

module.exports = DomainsModel;
