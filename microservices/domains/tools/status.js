module.exports = (res, type, data) => {

    switch(type) {
        case 404:
        case 403:
        case 500:
            let error = '';

            if( data instanceof Object ) {
                const { err } = data;
                error = { message: err.message, ...err }
            } else {
                error = { message: data };
            }
            res.status((error && error.status) || type);
            res.json({ error });
            break;
        case 200:
            res.status(200);
            res.json(data || {});
            break;
    }

}
