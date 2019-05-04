const routes = require('./routes.json');
const controller = require('../ctrl/domain.ctrl.js')

module.exports = (app) => {

    for (let key in routes) {

        if(Array.isArray(routes[key]) && routes[key].length){

            const arr = routes[key];

            for (let { path, action } of arr) {

                if(!controller[action]){
                    throw new Error('Action is unavailable');
                }

                const link = controller[action].bind(controller);

                if(path && action) {
                    app[key](path, link)
                }

            }

        }

    }

}
