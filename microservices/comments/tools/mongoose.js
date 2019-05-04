const mongoose = require('mongoose');
const server = '127.0.0.1:27017';
const database = 'mc-commnets';

class Database {
    constructor() {
        return this._connect();
    }
    _connect() {
        return mongoose.connect(`mongodb://${server}/${database}`, { useNewUrlParser: true, useCreateIndex: true, autoIndex: false })
            .then(() => {
                console.info(`Database connection successful. Database name: ${database}`);
                return mongoose;
            })
            .catch(err => {
                throw new Error('Database connection error');
        });
    }
}
module.exports = new Database();
