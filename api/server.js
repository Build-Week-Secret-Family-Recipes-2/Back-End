const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const usersRouter = require('../users/users-router');
const recipesRouter = require('../recipies/recipe-router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
	res.send('Server Running');
});
// server.use('/api/auth', authRouter);
server.use('api/users', usersRouter);
server.use('/api/recipes', recipesRouter);

module.exports = server;
