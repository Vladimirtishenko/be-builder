const MicroMQ = require('micromq');
const Routes = require('./entries/doer.js');
const Actions = require('./actions/doer.js');
const Db = require('./tools/mongoose.js');
const bodyParser = require('body-parser');

const app = new MicroMQ({
  name: 'domains',
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
