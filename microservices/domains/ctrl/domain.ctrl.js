const DomainsModel = require('../models/domains.md.js');
const status = require('../tools/status.js');

class Domains {
    constructor(){
        this.domainModel = new DomainsModel;
    }

    async setDomain(req, res) {
        const {
            domain,
            expired
        } = req.body;

        try {
            const page = await this.domainModel.create({domain, expired});

            status(res, 200)
        } catch(err){
            status(res, err.status || 500, { err })
        }

    }

    async getDomain() {

    }

    async getAvailableDomains(req, res) {

        try {
            const domains = await this.domainModel.readAll({});

            if(!domains) {
                status(res, 404, 'Page is not found')
            }
            status(res, 200, {domains})

        } catch(err){
            status(res, err.status || 500, { err })
        }
    }
}

module.exports = new Domains;
