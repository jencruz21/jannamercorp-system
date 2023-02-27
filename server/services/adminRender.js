const axios = require('axios');
require('dotenv').config()
const SYSTEM_URL = process.env.SYSTEM_URL

exports.adminDashRoute = (req,res)=>{
    res.render("admin/index")
}

exports.adminOrder = (req,res)=>{
    res.render("admin/orders")
}
exports.adminIncome= (req,res)=>{
    res.render("admin/income")
}
exports.adminInventory = (req,res)=>{
    res.render("admin/inventory")
}


exports.adminCustomer= (req,res)=>{
    axios.get(`${SYSTEM_URL}/admin/api/customers`)
    .then(function(response){
        console.log(response.data)
        res.render('admin/adminCustomer', {customers:response.data})
    })
    .catch(err=>{
        res.send(err)
    })
   
}

exports.adminTrans = (req,res)=>{
    axios.get(`${SYSTEM_URL}/admin/api/trans`)
    .then(function(response){
        
    res.render('admin/adminTrans',{trans:response.data})
    })
    .catch(err=>{
        res.send(err)
    })

}

exports.adminInv = (req,res)=>{
    axios.get(`${SYSTEM_URL}/admin/api/invHis`)
    .then(function(response){
        console.log(response.data)
        res.render("admin/adminInv",{invHis:response.data})
    })
    .catch(err=>{
        res.send(err)
    })
}

exports.adminTracking = (req,res)=>{

    axios.get(`${SYSTEM_URL}/admin/api/truckRoute`)
    .then(function(response){
        res.render('admin/adminTracking',{truck:response.data})
    })
    .catch(err=>{
        res.send(err)
    })

  
}

exports.adminSales = async (req,res)=>{
    let salesHis = [];
    let salesGrandTotal = [];
    let salesDate = [];

    try {
        const grandTotalResponse = await axios.get(`${SYSTEM_URL}/admin/api/salesGrandTotal`)
        const saleHisResponse = await axios.get(`${SYSTEM_URL}/admin/api/salesGrandTotal`);
        console.log(grandTotalResponse.data[0]);
        salesGrandTotal = grandTotalResponse.data
        res.render("admin/sales", {
            grandtotal: salesGrandTotal
        })
    } catch (error) {
        return res.status(400).send(error.message)
    }
}
