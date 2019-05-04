const Db = require('../tools/mongoose.js');
const CommentsModel = require('../models/comments.md.js');
const PageModel = require('../models/page.md.js');
const PageJson = require('./page.json');
const CommentsJson = require('./comments.json');

Db.then((mongoose) => {
    fixtures(mongoose)
})
.catch((err) => { throw new Error(err); })
.catch((err) => {
  console.error(err);
  process.exit(1);
})

async function fixtures(mongoose) {

    const pageModel = new PageModel;
    const commentsModel = new CommentsModel;
    const { connection: { db: { databaseName } } } = mongoose;

    try {
        await pageModel.deleteMany({});
        await commentsModel.deleteMany({});
        await pageModel.insertMany(PageJson);
        await commentsModel.insertMany(CommentsJson);

        console.log(`Database "${databaseName}" was updated`);
        console.log(`Collection "${pageModel.model.modelName}" was cleared and filed again`);
        console.log(`Collection "${commentsModel.model.modelName}" was cleared and filed again`);

        process.exit(0);

    } catch(err) {
        throw err;
    }
}
