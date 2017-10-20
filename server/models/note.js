const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const NoteSchema = new mongoose.Schema(
  {
    owner: {
      type: ObjectId,
      ref: 'User'
    },
    title: {
      type: String,
      trim: true
    },
    content: {
      type: String,
      trim: true
    }
  },
  { timestamps: true }
);

mongoose.model('Note', NoteSchema);
