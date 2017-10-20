const mongoose = require('mongoose');
const Note = mongoose.model('Note');

module.exports = {
  updateNote: (req, res) => {
    Note.findOne({ id: req.body.id }, (err, note) => {
      console.log('update working');
      if (err) return res.json({ error: 'Something went wrong.' });
      if (!note) {
        let newNote = new Note(
          { title: req.body.title, content: req.body.content },
          (err, success) => {
            if (err) return res.json({ error: 'Something went wrong.' });
            if (success) {
              newNote.save(err => {
                if (err) return handleError(err);
              });
              return res.json({ success: 'Your note has been created.' });
            }
          }
        );
      } else {
        note.save(err => {
          if (err) return handleError(err);
        });
        return res.json({ success: 'Your note has been saved.' });
      }
    });
  }
};
