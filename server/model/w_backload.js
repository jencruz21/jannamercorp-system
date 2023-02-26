const mongoose = require('mongoose')



const backLoadSchema = new mongoose.Schema({
    riceMill:{
        type: String,
        require: true
    },
    dateTime:{
        type: String,
        require: true
    },
    item:{
        type: String,
        require: true
    },
    type:{
        type: String,
        require: true
    },
    remarks:{
        type: String,
        require: true
    },
    encodeBy:{
        type: String,
        require:true
    },
    sacks:{
        type: String,
        require: true
    },
    

})

const BackLoaddb = mongoose.model("backLoadDB",backLoadSchema);
module.exports = BackLoaddb;


