const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');

// const usersRouter = require('../users/users-router');
// const recipesRouter = require('../recipies/recipe-router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(bodyParser.urlencoded({extended: true}));

const authMiddleware = require('../auth/auth-middleware.js');
const recipesRouter = require('../recipies/recipe-router.js');
const usersRouter = require('../users/users-router.js');
const authRouter = require('../auth/auth-router.js');

server.get('/', (req, res) => {
	res.send('Server Running');
});
server.use('/api/auth', authRouter);
server.use('/api/users', authMiddleware, usersRouter);
server.use('/api/recipes', authMiddleware, recipesRouter);

module.exports = server;
