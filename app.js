const express = require('express');
const app = express();
const forumRoute = require('./routes/boards.route');

app.use('/forum', forumRoute);
app.get('/', (_req, res) => res.status(200).json('Hello, world.'))

module.exports = app;