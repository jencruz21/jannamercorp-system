const express = require('express')
const route = express.Router()


const services = require('../services/staffRender')


//Customer
route.get("/customer",services.staffCustomer);
route.get("/customerHistory",services.staffCustomerHis)
route.get('/customerView',services.staffCustomerView)
route.get('/customerOrderingDetails',services.staffOrderingDetails)
route.get('/customerRecord',services.customerRecord)
route.get('/paidCustRecord',services.paidCustRecord)
route.get('/balanceCustRecord',services.balanceCustRecord)

//Inventory
route.get('/inventory',services.staffInv)
route.get('/inventoryHistory',services.staffInvHis)
route.get('/viewStocks',services.staffViewSocks)
route.get('/itemHistoryView', services.staffItemHistoryView)
route.get('/itemOut',services.staffItemOut)
route.get('/sackTransfer',services.staffSackTransfer)
route.get('/backLoadHis',services.staffBackLoadHis)
route.get('/sackTransHis',services.staffSackTransHis)

//transaction
route.get('/transaction',services.staffTrans)
route.get('/transactionHistory',services.staffTransHistory)
route.get('/transactionEdit',services.staffTransactionEdit)
route.get('/encodePayments',services.staffEncodePayments)
route.get('/salesTransacted',services.staffSalesTransacted)


//route
route.get('/route',services.staffRoute)
route.get('/routeHistory',services.staffRouteHistory)
route.get('/locations',services.staffLocation)
route.get('/control',services.staffControl)
route.get('/deliveryDetails',services.staffDeliveryDetails)

//sales
route.get('/sales',services.staffSales)
route.get('/salesHistory',services.staffSalesHistory)
route.get('/sumarizedHistoryView',services.staffSumarizedHistoryView)
route.get('/simulator',services.staffSimulator)
route.get('/topSpenderRanking',services.staffTopSpenderRanking)


module.exports = route