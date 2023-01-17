const express = require('express');
const cors = require('cors');
const app = express();
const usersRouter = require('./routes/usersRouter.js');
const notesRouter = require('./routes/notesRouter.js');

app.set('port', process.env.PORT || 3001);

app.use(cors());

app.use(express.json());

app.use('/home', (req, res) => res.send(`🛴 Welcome to Note App ! `));

app.use('/api/users', usersRouter);

app.use('/api/notes', notesRouter);

module.exports = app;