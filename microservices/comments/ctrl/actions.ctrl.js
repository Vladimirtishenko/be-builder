class CommonActionsCtrl {
    totalOfComments(req, res) {
        res.json({
            hello: 'totalOfComments'
        })
    }
}

module.exports = new CommonActionsCtrl;
