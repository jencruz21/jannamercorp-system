const axios = require('axios');



//Customer
exports.staffCustomer = (req,res) =>{

    axios.get("/admin/api/getCustomer")
    .then(function(response){
      console.log(response.data)
      return res.render('staff/customer',{customer:response.data})
})
.catch(err=>{
    res.send(err)
})
     

}

exports.staffCustomerHis = (req,res) =>{
    axios.get("/admin/api/orderingDetails")
    .then(function(response){
      console.log(response.data)
    return res.render('staff/customerHistory',{customerHis:response.data})
})
.catch(err=>{
    res.send(err)
})
}

exports.staffCustomerView = (req,res)=>{

    axios.get("/admin/api/orderingDetails","/admin/api/inv")
    .then(function(response){
        return res.render('staff/customerView',{orderingDetails:response.data})
        console.log(response)
    })
    .catch(err=>{
        res.send(err)
    })
  

   
}

exports.staffOrderingDetails = (req,res)=>{
    
        return res.render('staff/orderingDetails')
   
}

exports.customerRecord = (req,res)=>{
    axios.get("/admin/api/getCustomer")
    .then(function(response){
        console.log(response.data)
        return res.render("staff/customerRecord",{custRecord:response.data})
    })
    .catch(err=>{
        res.send(err)
    })
   
}


//Inventory
exports.staffInv = (req,res)=>{
    axios.get("/admin/api/itemName")
    .then(function(response){
        console.log(response.data)
        return res.render("staff/inventory",{itemName:response.data})
    })
    .catch(err=>{
        res.send(err)
    })
}

exports.staffInvHis = (req,res)=>{
    axios.get("/admin/api/invHis")
    .then(function(response){
        console.log(response.data)
        return res.render("staff/inventoryHistory",{invHis:response.data})
    })
    .catch(err=>{
        res.send(err)
    })
  
}

exports.staffViewSocks = (req,res)=>{
    axios.get("/admin/api/inv")
    .then(function(response){
        console.log(response.data)
        return res.render('staff/viewStocks',{stocks:response.data})

    })

    
}









exports.staffItemHistoryView = (req,res)=>{

    axios.get("/admin/api/inv")
    .then(function(response){
        console.log(response.data)
        return res.render('staff/itemHistoryView',{stocks:response.data})

    })

   
}

exports.staffItemOut = (req,res) =>{

    axios.get("/admin/api/orderingDetails")
    .then(function(response){
      console.log(response.data)
      return res.render('staff/itemOut',{customerHis:response.data})
})
.catch(err=>{
    res.send(err)
})
  
}

exports.staffSackTransfer = (req,res)=>{
    axios.get("/admin/api/itemName")
    .then(function(response){
        console.log(response.data)
        return res.render('staff/sackTransfer',{itemName:response.data})
    })
    .catch(err=>{
        res.send(err)
    })


    
  
}


// TRANSACTION

exports.staffTrans = (req,res)=>{
    axios.get("/admin/api/trans")
    .then(function(response){
        return res.render('staff/transaction',{trans:response.data})
    })
    .catch(err=>{
        res.send(err)
    })

   
}
exports.staffTransHistory = (req,res)=>{
    return res.render('staff/transactionHistory')
}


exports.staffTransactionEdit = (req,res)=>{
    return res.render('staff/transactionEdit')
}

exports.staffEncodePayments = (req,res)=>{
    return res.render('staff/encodePayments')
}

exports.staffSalesTransacted = (req,res)=>{
    return res.render('staff/salesTransacted')
}
//ROUTE


exports.staffRoute = (req,res)=>{
    axios.get("/admin/api/truckRoute")
    .then(function(response){
        return res.render('staff/routing',{truck:response.data})
    })
    .catch(err=>{
        res.send(err)
    })

}
exports.staffRouteHistory = (req,res)=>{
    return res.render('staff/routingHistory')
}
exports.staffLocation = (req,res)=>{
    return res.render('staff/locations')
}
exports.staffDeliveryDetails = (req,res)=>{
    axios.get("/admin/api/orderingDetailsGroup")
    .then(function(response){
        return res.render('staff/deliveryDetails',{delivery:response.data})
    })
    .catch(err=>{
        res.send(err)
    })

}


//SALES
exports.staffSales = (req,res)=>{
    return res.render('staff/sales')
}
exports.staffSalesHistory = (req,res)=>{
    return res.render('staff/salesHistory')
}
exports.staffSumarizedHistoryView = (req,res)=>{
    return res.render('staff/sumarizedHistoryView')
}
exports.staffSimulator = (req,res)=>{
    return res.render('staff/priceAndSalesSimulator')
}
exports.staffTopSpenderRanking = (req,res)=>{
    return res.render('staff/topSpenderRank')
}


exports.staffBackLoadHis = (req,res)=>{

    axios.get("/admin/api/backLoad")
    .then(function(response){
        return res.render('staff/backLoadHis',{backLoad:response.data})
    })
    .catch(err=>{
        res.send(err)
    })

    
}

exports.staffSackTransHis = (req,res)=>{

    axios.get("/admin/api/sacksTransferFind")
    .then(function(response){
        return res.render('staff/sackTransHis',{sacksTransfer:response.data})
    }).catch(err=>{
        res.send(err)
    })
 
}


//COntrol BAks
exports.staffControl = (req,res)=>{
    return res.render('staffControl/staffControl')
}

exports.paidCustRecord = (req,res)=>{
    axios.get("/admin/api/paidCustRecord")
    .then(function(response){
        return res.render('staff/paidCustRecord',{paid:response.data})
    }).catch(err=>{
        res.send(err)
    })
 
  
}

exports.balanceCustRecord = (req,res)=>{
    axios.get("/admin/api/balanceCustRecord")
    .then(function(response){
        return res.render("staff/balanceCustRecord",{balance:response.data})
    }).catch(err=>{
        res.send(err)
    })
 
   
}
