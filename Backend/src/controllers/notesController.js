const notesController = {};

notesController.getNotes = (req, res) => res.json({messages: []});

notesController.getNote = (req, res) => res.json({title: "TITLE 1"});

notesController.deleteNote = (req, res) => res.json({message: "Note deleted."});

notesController.modifyNote = (req, res) => res.json({message: "Note modified."});

notesController.createNote = (req, res) => res.json({message: "Note created."});

module.exports = notesController;