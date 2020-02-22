const users = require('./routes/user');

module.exports = (app) => {
    app.use('/api/users/', users);
}
