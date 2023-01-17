const Note = require('../models/Note.js');

const notesController = {};

notesController.getNotes = async (req, res) => {
    try {
        const notes = await Note.find();

        res.json({messages: notes});
    }
    
    catch (err) {
        res.send(`Method ERR! Cannot get notes. Error: ${err}`);
    }
};

notesController.getNote = async (req, res) => {

    const noteID = req.params.id;

    try {
        const note = await Note.findById(noteID);

        res.json(note);
    }

    catch (err) {
        res.send(`Method ERR! Cannot get note with id = ${noteID}. Error: ${err}`);
    }
};

notesController.deleteNote = async (req, res) => {
    const noteID = req.params.id;

    try {
        await Note.findByIdAndDelete(noteID) 
            ? res.json(`Note with id = ${noteID} successfully deleted.`)
            : res.json(`ERR! Could not find note with id = ${noteID}`);
    }

    catch (err) {
        res.send(`Method ERR! Cannot get note with id = ${noteID}. Error: ${err}`);
    }
};

notesController.modifyNote = async (req, res) => {
    const noteID = req.params.id;

    const { title, author, content, date } = req.body;

    try {
        await Note.findOneAndUpdate(noteID, { title, author, content, date })

            ? res.json(`Note with id = ${noteID} successfully updated.`)

            : res.json(`ERR! Could not find note with id = ${noteID}`);
    }

    catch (err) {
        res.send(`Method ERR! Cannot get note with id = ${noteID}. Error: ${err}`);
    }
};

notesController.createNote = async (req, res) => {
    try {
        const { title, author, content, date, timestamps } = req.body;

        const newNote = new Note({
            title: title,
            author: author,
            content: content,
            date: date,
            timestamps: timestamps
        });

        await newNote.save();

        res.json({message: "Note created.", note: newNote});
    }

    catch (err) {
        res.send(`Method ERR! Cannot create note. Error: ${err}`);
    }
};

module.exports = notesController;