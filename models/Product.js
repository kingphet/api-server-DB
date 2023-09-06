const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    title: String,
    image: String,
    dated: String,
}, {timestamps: true})

module.exports = mongoose.model('product',productSchema)
