const mongoose = require('mongoose');
const Note = mongoose.model('Note');

module.exports = {
  updateNote: (req, res) => {
    Note.findOne({ id: req.body.id }, (err, note) => {
      if (err) {
        console.log('err: ' + err);
        return res.json({ error: 'Something went wrong.' });
      }
      if (!note) {
        let newNote = new Note({
          owner: req.body.owner,
          title: req.body.title,
          content: req.body.content
        });
        newNote.save(err => {
          if (err) return handleError(err);
        });
      } else {
        note.save(err => {
          if (err) return handleError(err);
        });
        return res.json({ success: 'Your note has been saved.' });
      }
    });
  }
};
