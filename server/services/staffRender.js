const axios = require('axios');
require('dotenv').config();
const SYSTEM_URL = process.env.SYSTEM_URL;




//Customer
exports.staffCustomer = (req,res) =>{

    axios.get(`${SYSTEM_URL}/admin/api/getCustomer`)
    .then(function(response){
      console.log(response.data)
      res.render('staff/customer',{customer:response.data})
})
.catch(err=>{
    res.send(err)
})
     

}

exports.staffCustomerHis = (req,res) =>{
    axios.get(`${SYSTEM_URL}/admin/api/orderingDetails`)
    .then(function(response){
      console.log(response.data)
    res.render('staff/customerHistory',{customerHis:response.data})
})
.catch(err=>{
    res.send(err)
})
}

exports.staffCustomerView = (req,res)=>{

    axios.get(`${SYSTEM_URL}/admin/api/orderingDetails`,`${SYSTEM_URL}/admin/api/inv`)
    .then(function(response){
        res.render('staff/customerView',{orderingDetails:response.data})
        console.log(response)
    })
    .catch(err=>{
        res.send(err)
    })
  

   
}

exports.staffOrderingDetails = (req,res)=>{
    
        res.render('staff/orderingDetails')
   
}

exports.customerRecord = (req,res)=>{
    axios.get(`${SYSTEM_URL}/admin/api/getCustomer`)
    .then(function(response){
        console.log(response.data)
        res.render("staff/customerRecord",{custRecord:response.data})
    })
    .catch(err=>{
        res.send(err)
    })
   
}


//Inventory
exports.staffInv = (req,res)=>{
    axios.get(`${SYSTEM_URL}/admin/api/itemName`)
    .then(function(response){
        console.log(response.data)
        res.render("staff/Inventory",{itemName:response.data})
    })
    .catch(err=>{
        res.send(err)
    })
}

exports.staffInvHis = (req,res)=>{
    axios.get(`${SYSTEM_URL}/admin/api/invHis`)
    .then(function(response){
        console.log(response.data)
        res.render("staff/inventoryHistory",{invHis:response.data})
    })
    .catch(err=>{
        res.send(err)
    })
  
}

exports.staffViewSocks = (req,res)=>{
    axios.get(`${SYSTEM_URL}/admin/api/inv`)
    .then(function(response){
        console.log(response.data)
        res.render('staff/viewStocks',{stocks:response.data})

    })

    
}









exports.staffItemHistoryView = (req,res)=>{

    axios.get(`${SYSTEM_URL}/admin/api/inv`)
    .then(function(response){
        console.log(response.data)
        res.render('staff/itemHistoryView',{stocks:response.data})

    })

   
}

exports.staffItemOut = (req,res) =>{

    axios.get(`${SYSTEM_URL}/admin/api/orderingDetails`)
    .then(function(response){
      console.log(response.data)
      res.render('staff/itemOut',{customerHis:response.data})
})
.catch(err=>{
    res.send(err)
})
  
}

exports.staffSackTransfer = (req,res)=>{
    axios.get(`${SYSTEM_URL}/admin/api/itemName`)
    .then(function(response){
        console.log(response.data)
        res.render('staff/sackTransfer',{itemName:response.data})
    })
    .catch(err=>{
        res.send(err)
    })


    
  
}


// TRANSACTION

exports.staffTrans = (req,res)=>{
    axios.get(`${SYSTEM_URL}/admin/api/orderingDetails`)
    .then(function(response){
        res.render('staff/transaction',{trans:response.data})
    })
    .catch(err=>{
        res.send(err)
    })

   
}
exports.staffTransHistory = (req,res)=>{
    axios.get(`${SYSTEM_URL}/admin/api/orderingDetails`)
    .then(function(response){
        res.render('staff/transactionHistory',{trans:response.data})
    })
    
}


exports.staffTransactionEdit = (req,res)=>{
    res.render('staff/transactionEdit')
}

exports.staffEncodePayments = (req,res)=>{
    res.render('staff/encodePayments')
}

exports.staffSalesTransacted = (req,res)=>{
    res.render('staff/salesTransacted')
}
//ROUTE


exports.staffRoute = (req,res)=>{
    axios.get(`${SYSTEM_URL}/admin/api/truckRoute`)
    .then(function(response){
        res.render('staff/routing',{truck:response.data})
    })
    .catch(err=>{
        res.send(err)
    })

}
exports.staffRouteHistory = (req,res)=>{
    res.render('staff/routingHistory')
}
exports.staffLocation = (req,res)=>{
    res.render('staff/locations')
}
exports.staffDeliveryDetails = (req,res)=>{
    axios.get(`${SYSTEM_URL}/admin/api/orderingDetailsGroup`)
    .then(function(response){
        res.render('staff/deliveryDetails',{delivery:response.data})
    })
    .catch(err=>{
        res.send(err)
    })

}


//SALES
exports.staffSales = (req,res)=>{
    res.render('staff/sales')
}
exports.staffSalesHistory = (req,res)=>{

    axios.get(`${SYSTEM_URL}/admin/api/orderingDetails`)
    .then(function(response){
        res.render('staff/salesHistory',{salesHistory:response.data})
    })
    .catch(err=>{
        res.send(err)
    })
  
}
exports.staffSumarizedHistoryView = (req,res)=>{
    res.render('staff/sumarizedHistoryView')
}
exports.staffSimulator = (req,res)=>{
    res.render('staff/priceAndSalesSimulator')
}
exports.staffTopSpenderRanking = (req,res)=>{
    res.render('staff/topSpenderRank')
}


exports.staffBackLoadHis = (req,res)=>{

    axios.get(`${SYSTEM_URL}/admin/api/backLoad`)
    .then(function(response){
        res.render('staff/backLoadHis',{backLoad:response.data})
    })
    .catch(err=>{
        res.send(err)
    })

    
}

exports.staffSackTransHis = (req,res)=>{

    axios.get(`${SYSTEM_URL}/admin/api/sacksTransferFind`)
    .then(function(response){
        res.render('staff/sackTransHis',{sacksTransfer:response.data})
    }).catch(err=>{
        res.send(err)
    })
 
}


//COntrol BAks
exports.staffControl = (req,res)=>{
    res.render('staffControl/staffControl')
}

exports.paidCustRecord = (req,res)=>{
    axios.get(`${SYSTEM_URL}/admin/api/paidCustRecord`)
    .then(function(response){
        res.render('staff/paidCustRecord',{paid:response.data})
    }).catch(err=>{
        res.send(err)
    })
 
  
}

exports.balanceCustRecord = (req,res)=>{
    axios.get(`${SYSTEM_URL}/admin/api/balanceCustRecord`)
    .then(function(response){
        res.render("staff/balanceCustRecord",{balance:response.data})
    }).catch(err=>{
        res.send(err)
    })
 
   
}
