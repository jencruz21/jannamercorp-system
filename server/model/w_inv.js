const mongoose = require('mongoose')


const invSchema = new mongoose.Schema({
    i_item:{
        type: String,
        require:true
    },
    i_type: {
        type: Number,
        require: true
    },
    i_addedSacks:{
        type: Number,
        require: true
    },

    i_sacks:{
        type: Number,
        require: true
    },

    i_kilos:{
        type: Number,
        require:true
    },


    i_retail:{
        type: Number,
        require:true
    },
   
    i_5kg:{
        type: Number,
        require: true
    },
    i_10kg:{
        type: Number,
        require: true
    },
    // aggregate
    i_market:{
        type: Number,
        require: true
    },
    // aggregate
    i_tenC:{
        type: Number,
        require: true
    },
    // aggregate
    i_wsMarket: {
        type: Number,
        require:true
    },
    // aggregate
    i_wholeSale:{
        type: Number,
        require: true
    },
    i_special1:{
        type: Number,
        require: true
    },
    i_special2:{
        type: Number,
        require: true
    },
    i_divert:{
        type: Number,
        require:true
    },
    i_date:{
        type: String,
        require: true
    },
    i_buyingPrice:{
        type: Number,
        require: true
    },
   i_totalKilos:{
    type:Number,
    require: true
   },
   i_totalBuyingPrice:{
    type: Number,
    require: true
   },
   i_overAllPriceRetail:{
    type:Number,
    require: true
   },
   i_gross:{
    type:Number,
    require:true
   },

})

const Invdb = mongoose.model("invdb",invSchema)
module.exports = Invdb