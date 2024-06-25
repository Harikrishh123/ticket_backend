
const mongoose = require('mongoose')

const mongUrl = "mongodb://0.0.0.0:27017/ticket"

const connectToMo = () => {
    mongoose.connect(mongUrl).then((e) => console.log("Mongoose is connected"))
}

module.exports = connectToMo ;