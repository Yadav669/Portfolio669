const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    subject: String,
    phone: Number,
})

const CommentModel = mongoose.model("comments", CommentSchema)
module.exports = CommentModel