const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, ObjectId } = Schema.Types;

const questionSchema = new Schema({

    category: {
        type: String,
        required: true,
    },
    question: {
        type: String,
        required: true,
    },
    answerA: {
        type: String,
        required: true,
    },
    answerB: {
        type: String,
        required: true,
    },
    answerC: {
        type: String,
        required: true,
    },
    answerD: {
        type: String,
        required: true,
    },
    correctAnswer: {
        type: String,
        required: true,
    },
    author: {
        type: ObjectId,
        ref: "User"
    }
});

module.exports = new Model('Question', questionSchema);