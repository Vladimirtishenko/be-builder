const MicroMQ = require('micromq');
const Routes = require('./entries/doer.js');
const Actions = require('./actions/doer.js');
const Db = require('./tools/mongoose.js');
const bodyParser = require('body-parser');

const app = new MicroMQ({
  microservices: ['domains'],
  name: 'comment',
  rabbit: {
    url: 'amqp://localhost:5672'
  }
});

app.on('error', (err, req, res) => {
    res.status(err.status || 500);
    res.json({ error: err.message || 'Server error' });
});

app.use(async (req, res, next) => {
  try {
    await next();
  } catch (err) {
    res.status(err.status || 500);
    res.json({ error: err.message || 'Server error' });
    app.emit('error', err, req, res);
  }
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(async (req, res, next) => {

    try {
        const {status, response: { error } = {} } = await app.ask('domains', {
            server: {
              action: 'avability',
              meta: {
                domain: req.headers.host
              },
            },
        });

        if(status === 200){
            next();
        } else {
            throw error
        }

    } catch(err){
        res.status(err.status || 500);
        res.json({ error: err.message || 'You can`t send message to this service' });
    }

});

Db.then((data) => {

    Routes(app);
    Actions(app);

    app.start();

})
.catch((err) => { throw new Error(err); })
.catch((err) => {
  console.error(err);
  process.exit(0);
})
