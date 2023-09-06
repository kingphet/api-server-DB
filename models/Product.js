const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    H_title: String,
    title: String,
    image: String,
    dated: String,
}, {timestamps: true})

module.exports = mongoose.model('product',productSchema)