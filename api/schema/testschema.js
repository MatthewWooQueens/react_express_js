const mongoose = require('mongoose')

const testSchema = mongoose.Schema({
    name: String,
    id: Number
})

module.exports = mongoose.model('test',testSchema)