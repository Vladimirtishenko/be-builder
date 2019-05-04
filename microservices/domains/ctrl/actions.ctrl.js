const DomainsModel = require('../models/domains.md.js');
const status = require('../tools/status.js');

class CommonActionsCtrl {
    constructor(){
        this.model = new DomainsModel;
    }

    async getDomain(params, res) {

        const { domain: requestedDomain } = params;

        try {

            const response = await this.model.read({domain: requestedDomain});

            if(!response) {
                return status(res, 404, 'Domain was not found');
            }

            if(response){
                const now = (new Date).valueOf();
                const expired = response.expired && (new Date(response.expired)).valueOf() || now;

                if (now >= expired) {
                    return status(res, 403, 'Domain was expired. Please update your account.')
                }
            }

            status(res, 200)
        } catch(err){
            status(res, err.status || 500, { err })
        }
    }
}

module.exports = new CommonActionsCtrl;
