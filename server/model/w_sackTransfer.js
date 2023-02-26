const mongoose = require('mongoose')

const sackTransferSchema = new mongoose.Schema({
    itemOne:{
        type:String,
        require: true
    },
    typeOne:{
        type:Number,
        require: true
    },
    sacksOne:{
        type:Number,
        require: true
    },
    kilosOne:{
        type:Number,
        require: true
    },
    itemTwo:{
        type:String,
        require: true
    },
    typeTwo:{
        type:Number,
        require: true
    },
    sacksTwo:{
        type: Number,
        require:true
    },
    kilosTwo:{
        type:Number,
        require: true
    },
    dateTime:{
        type:String,
        require:true
    },
    sacksAdded:{
        type:Number,
        require:true
    },
    kilosAdded:{
        type:Number,
        require:true
    },
    newSacksAdded:{
        type:Number,
        require:true
    },
    newKilosAdded:{
        type:Number,
        require:true
    }
})

const SackTransferdb = mongoose.model('sackTransferdb',sackTransferSchema);
module.exports = SackTransferdb;