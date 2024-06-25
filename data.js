
const mongoose = require('mongoose')

const mongUrl = "mongodb://localhost:27017/ticket"

const connectToMo = () => {
    mongoose.connect(mongUrl).then((e) => console.log("Mongoose is connected"))
}

module.exports = connectToMo ;