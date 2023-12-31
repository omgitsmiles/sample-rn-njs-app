const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: String,
    author: String,
    content: String
});

module.exports = mongoose.model('Article', articleSchema);
