const mongoose = require('mongoose');
const Note = mongoose.model('Note');
const User = mongoose.model('User');

module.exports = {
  getUser(id) {
    User.findOne({ id: id }, (err, user) => {
      if (err) return false;
      return user;
    });
  },

  updateNote: (req, res) => {
    Note.findOne({ id: req.body.id }, (err, note) => {
      if (err) {
        console.log('err: ' + err);
        return res.json({ error: 'Something went wrong.' });
      }
      if (!note) {
        console.log('not note');
        let newNote = new Note({
          owner: req.body.owner,
          title: req.body.title,
          content: req.body.content
        });
        newNote.save(err => {
          if (err) return handleError(err);
        });
      } else {
        console.log('hopefully new note');
        note.title = req.body.title;
        note.content = req.body.content;
        note.save(err => {
          if (err) return handleError(err);
        });
        console.log(note);
        return res.json({ success: 'Your note has been saved.' });
      }
    });
  }
};
