const mongoose  = require("mongoose");


const newCustomer = new mongoose.Schema({


    custName:{ 
        type: String,
        require: true

    },
    custLocation:{
        type: String,
        require: true
    },
    custPhone:{
        type: String,
        require: true
    },
    custDate:{
        type: String,
        require: true
    },
    custCreditLimit:{
        type: String,
        require:true
    },


})

const NewCustomerDB = mongoose.model('newcustomerdb',newCustomer)
module.exports =  NewCustomerDB