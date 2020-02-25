const NotesCtrl = {};
const Note = require('../models/note');

NotesCtrl.renderNoteForm = (req, res) => {
    res.render('notes/new');
};

NotesCtrl.createNewNote = async (req, res) => {
    const { title, description } = req.body;
    const newNote = new Note({title, description}); 
    await newNote.save();

    res.redirect('/notes');
};

NotesCtrl.renderNotes = async (req, res) => {
    const notes = await Note.find();
    res.render('notes/all', {notes});
};

NotesCtrl.renderEditForm = (req, res) => {
    res.send('Edit Form');
}

NotesCtrl.updateNote = (req, res) => {
    res.send('Update Note');
}

NotesCtrl.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.redirect('/notes');
}

module.exports = NotesCtrl;