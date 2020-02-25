const NotesCtrl = {};

NotesCtrl.renderNoteForm = (req, res) => {
    res.send('Note Add');
};

NotesCtrl.createNewNote = (req, res) => {
    res.send('New Note')
};

NotesCtrl.renderNotes = (req, res) => {
    res.send('Notes');
};

NotesCtrl.renderEditForm = (req, res) => {
    res.send('Edit Form');
}

NotesCtrl.updateNote = (req, res) => {
    res.send('Update Note');
}

NotesCtrl.deleteNote = (req, res) => {
    res.send('Delete Note');
}

module.exports = NotesCtrl;