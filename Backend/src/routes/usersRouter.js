const { Router } = require('express');

const usersRouter = Router();

const { getUsers, getUser, deleteUser, modifyUser, createUser } = require('../controllers/usersController.js');

usersRouter.get('/', getUsers);

usersRouter.get('/', getUser);

usersRouter.post('/', createUser);

usersRouter.put('/:id', modifyUser);

usersRouter.delete('/:id', deleteUser);

module.exports = usersRouter;