const mongoose = require('mongoose')

const itemNameSchema = new mongoose.Schema({
    itemName:{
        type: String,
        require: true
    }
})


const ItemNamedb =  mongoose.model('itemNamedb', itemNameSchema)
module.exports = ItemNamedb