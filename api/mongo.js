const mongoose = require('mongoose')
//const { mongoPass } = require('./config.json')
const mongoPath = `mongodb+srv://Rutyreal:Robloxian2.0@rutyreal.qvyably.mongodb.net/?retryWrites=true&w=majority`

module.exports = async () => {
  await mongoose.connect(mongoPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  return mongoose
}