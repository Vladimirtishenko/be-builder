const Db = require('../tools/mongoose.js');
const DomainModel = require('../models/domains.md.js');
const DomainJson = require('./domains.json');

Db.then((mongoose) => {
    fixtures(mongoose)
})
.catch((err) => { throw new Error(err); })
.catch((err) => {
  console.error(err);
  process.exit(0);
})

async function fixtures(mongoose) {

    const domainsModel = new DomainModel;
    const { connection: { db: { databaseName } } } = mongoose;

    try {
        await domainsModel.deleteMany({});
        await domainsModel.insertMany(DomainJson);

        console.log(`Database "${databaseName}" was updated`);
        console.log(`Collection "${domainsModel.model.modelName}" was cleared and filed again`);
        process.exit(0);

    } catch(err) {
        throw err;
    }
}
