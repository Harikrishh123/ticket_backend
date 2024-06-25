
const mongoose = require('mongoose')

const mongUrl = "mongodb://127.0.0.1:27017/ticket"

const connectToMo = () => {
    mongoose.connect(mongUrl).then((e) => console.log("Mongoose is connected"))
}

module.exports = connectToMo ;