const mongoose = require('mongoose')
const Schema = mongoose.Schema

const favsSchema = new Schema({
    title: String,
    imgUrl: String,
    description: String

})

const Fav = mongoose.model("Favs", favsSchema)
module.exports = Fav