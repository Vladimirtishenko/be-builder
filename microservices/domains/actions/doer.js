const list = require('./list.actions.json');
const controller = require('../ctrl/actions.ctrl.js')

module.exports = (app) => {

    for (let { method, name } of list) {

        if(!controller[method]){
            throw new Error('Action is unavailable');
        }

        if(method && name) {
            const link = controller[method].bind(controller);

            app.action(name, link)
        }

    }

}
