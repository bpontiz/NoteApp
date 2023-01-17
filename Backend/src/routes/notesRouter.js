const { Router } = require('express');

const notesRouter = Router();

const { getNotes, getNote, deleteNote, modifyNote, createNote } = require('../controllers/notesController.js');

notesRouter.get('/', getNotes);

notesRouter.get('/:id', getNote);

notesRouter.post('/', createNote);

notesRouter.put('/:id', modifyNote);

notesRouter.delete('/:id', deleteNote);

module.exports = notesRouter;