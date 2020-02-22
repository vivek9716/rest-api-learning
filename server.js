var express = require('express');
var app = express();
var PORT = process.env.PORT || 1001;

const routes = require('./src/routes');

app.get('/', (req, res) => {
    res.send("Welcome world!");
});

routes(app);

var server = app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`);
});

process.once('SIGUSR2', function () {
  server.close(function () {
    process.kill(process.pid, 'SIGUSR2')
  })
});

module.exports = app;
