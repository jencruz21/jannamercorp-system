const mongoose = require('mongoose')


const orderingDetailsSchema = new mongoose.Schema({
    od_itemName:{
        type:String,
        require:true
    },
    od_date:{
        type:String,
        require:true
    },
    od_selectPricing:{
        type: String,
        require:true
    },
    od_price:{
        type:Number,
        require: true
    },
    od_sacks:{
        type: Number,
        require:true
    },
  
    od_kilos:{
        type: Number,
        require:true
    },
    od_amount:{
        type: Number,
        require:true
    },
    od_customer:{
        type: String,
        require:true
    },
    od_previousRemitance:{
        type: Number,
        require:true
    },
    od_isCleared:{
        type: String,
        require:true
    },
    od_creditLimit:{
        type: Number,
        require:true
    },
    od_transaction:{
        type: String,
        require:true
    },
    od_addOns:{
        type: Number,
        require:true
    },
    od_less:{
        type: Number,
        require:true
    },
    od_cashRemited:{
        type: Number,
        require:true
    },
    od_checkValue:{
        type: Number,
        require:true
    },
    od_checkNumber:{
        type: String,
        require:true
    },
    od_checkDate:{
        type: String,
        require:true
    },
    od_noteTransaction:{
        type: String,
        require:true
    },
    od_itemSubtotal:{
        type: Number,
        require:true
    },
    od_grandTotal:{
        type: Number,
        require:true
    },
    od_cavans:{
        type: Number,
        require:true
    },
    od_change:{
        type: Number,
        require:true
    },
    od_newStatus:{
        type: String,
        require:true
    },
    od_rowsLeft:{
        type: String,
        require:true
    },
    od_newBalance:{
        type: Number,
        require:true
    },

    od_number:{
        type: String,
        require: true  
    },
    od_location:{
        type: String,
        require: true
    },
    od_route:{
        type: String,
        require: true
    },
    od_remarks:{
        type: Number,
        require: true
    },
    od_validId:{
            type: String,
            require: true
    },
    od_route:{
        type: String,
        require: true
    },
    od_average:{
        type: Number,
        require:true
    },
    od_invIdRef: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    } 
});  
const OrderingDetailsdb = mongoose.model('orderingDetailsdb',orderingDetailsSchema);
module.exports=OrderingDetailsdb;