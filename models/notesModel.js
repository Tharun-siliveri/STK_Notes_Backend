import mongoose from 'mongoose';

const notesSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
});

const Notes = mongoose.model('Notes', notesSchema);


module.exports = Notes;
