const PageModel = require('../models/page.md.js');
const CommentsModel = require('../models/comments.md.js');
const status = require('../tools/status.js');

class Comments {
    constructor(){
        this.pageModel = new PageModel;
        this.commentsModel = new CommentsModel;
    }

    async getComments(req, res) {

        const { params: { pid } } = req;

        try {
            const page = await this.pageModel.read({pid});
            const comments = await this.commentsModel.readAll({pid});

            if(!page) {
                status(res, 404, 'Page is not found')
            }
            status(res, 200, {page, comments})

        } catch(err){
            status(res, err.status || 500, { err })
        }
    }

    async setNewComment(req, res, next){
        const {
            label,
            key,
            rating,
            text
        } = req.body;

        if(!label || !key){
            tatus(res, err.status || 500, 'You should pass right parametrs "label" and "key" ')
        }

        try {
            const page = await this.pageModel.create({rating, pid: `${label}.${key}` });
            const comment = await this.commentsModel.create({text, pid});

            status(res, 200)
        } catch(err){
            status(res, err.status || 500, { err })
        }

    }
}

module.exports = new Comments;
