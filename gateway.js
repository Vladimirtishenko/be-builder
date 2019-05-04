const Gateway = require('micromq/gateway');

const app = new Gateway({
  microservices: ['domains', 'comment'],
  rabbit: {
    url: 'amqp://localhost:5672'
  }
});

app.all(/^\/(comments)(\/.+$)?/, async (req, res) => {
  await res.delegate('comment');
});

app.all(/^\/(domains)(\/.+$)?/, async (req, res) => {
  await res.delegate('domains');
});

app.listen(process.env.PORT || 3000);
