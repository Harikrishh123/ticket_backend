
const mongoose = require('mongoose')

const mongUrl = "mongodb+srv://hari_123:shhanuman@mydatabase.1had77f.mongodb.net/"

const connectToMo = () => {
    mongoose.connect(mongUrl).then((e) => console.log("Mongoose is connected"))
}

module.exports = connectToMo ;
