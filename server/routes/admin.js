const express = require('express')
const route = express.Router()


const services = require("../services/adminRender");
const controller = require('../controller/con_admin');

// const con_customerHis = require('../controller/con_customerHis');
const con_inv = require('../controller/con_inv');
const con_invHis = require('../controller/con_invHis');
const con_transaction = require('../controller/con_transaction');
const con_transHis = require('../controller/con_transHis');
const con_transItem = require('../controller/con_transItem');
const con_transItemBin = require("../controller/con_transItemBin");
const con_truckRoute = require('../controller/con_truckRoute');
const con_users = require('../controller/con_users');
const con_backload = require('../controller/con_backLoad')
const con_orderingDetails = require('../controller/con_orderingDetails')
const con_newCustomer = require("../controller/con_customer")
const con_itemName = require("../controller/con_itemNAme")
const con_sackTransfer = require("../controller/con_sackTransfer")





route.post('/api/itemName',con_itemName.itemNAmeCreate)
route.get('/api/itemName/:id',con_itemName.itemNameFind)
route.get('/api/itemName',con_itemName.itemNameFind)

/**
 *  @description Root Route
 *  @method GET /
 */

route.get("/",services.adminDashRoute)


/**
 *  @description Root Route
 *  @method GET /
 */

route.get("/sales",services.adminSales);

route.get("/orders",services.adminOrder);

route.get("/income",services.adminIncome);

route.get("/inventory",services.adminInventory);

route.get('/adminCustomer',services.adminCustomer)
route.get('/adminTrans',services.adminTrans)
route.get('/adminInv',services.adminInv)
route.get('/adminTracking',services.adminTracking)


// ItemNAme
route.get('/api/lookUp',con_inv.lookUp)


//ADMIN API for adminUser

route.post('/api/adminUsers',controller.adminCreate);
route.get('/api/adminUsers',controller.adminFind);
route.put('/api/adminUsers/:id',controller.adminUpdate);
route.delete('/api/adminUsers/:id',controller.adminDelete);


//Customer Api
route.post('/api/newCustomer',con_newCustomer.createCustomer)
route.get('/api/getCustomer',con_newCustomer.findCustomer)
route.get('/api/getCustomer/:id',con_newCustomer.findCustomer)

route.get('/api/paidCustRecord',con_orderingDetails.paidCustRecord)
route.get('/api/balanceCustRecord', con_orderingDetails.balanceCustRecord)

//orderring api
route.post('/api/orderingDetails',con_orderingDetails.orderingDetailsCreate)
route.get('/api/orderingDetails',con_orderingDetails.findOrderingDetails)
route.get('/api/orderingDetailsGroup',con_orderingDetails.findMacthDetails)
route.get('/api/orderSample',con_orderingDetails.findAveDetails)


//Customer History Api

// route.post('/api/customerHis',con_customerHis.custHisCreate)
// route.get('/api/customerHis',con_customerHis.custHisFind)
// route.get('/api/customerHis/:id',con_customerHis.custHisFindId)
// route.put('/api/customerHis/:id',con_customerHis.custHisUpdate)
// route.delete('/api/customerHis/:id',con_customerHis.custHisDelete)


//inv

route.post('/api/inv',con_inv.invCreate)
route.get('/api/inv',con_inv.invFInd)
route.get('/api/inv/:id',con_inv.invFindId)
route.put('/api/inv/:id',con_inv.invUpdate)
route.delete('/api/inv/:id',con_inv.invDelete)

//sacks Transfer

route.post('/api/sacksTransfer',con_sackTransfer.sackTransferCreate)
route.get('/api/sacksTransferFind',con_sackTransfer.sackTransFind)



// inv aggregate
route.get("/api/inv/market", con_inv.getI_marketPricing);
route.get("/api/inv/ws-market", con_inv.getI_wsMarketPricing);
route.get("/api/inv/ten-c", con_inv.getI_TenCPricing);
route.get("/api/inv/whole-sale", con_inv.getI_wholeSalePricing);
// route.get("/api/inv/pipeLine", con_inv.getInv_pipeLine)




// backload

route.post('/api/backLoad',con_backload.createBackload)
route.get('/api/backLoad',con_backload.backloadFind)
route.get('/api/backLoad/:id',con_backload.backloadFind)



//INV HISTORY
route.post('/api/invHis',con_invHis.invHisCreate)
route.get('/api/invHis',con_invHis.invHisFind)
route.get('/api/invHis/:id',con_invHis.invHisFindId)
route.put('/api/invHis/:id',con_invHis.invHisUpdate)
route.delete('/api/invHis/:id',con_invHis.invHisDelete)


//transaction

route.post('/api/trans',con_transaction.transCreate)
route.get('/api/trans',con_transaction.transFind)
route.put('/api/trans/:id',con_transaction.transUpdate)
route.delete('/api/trans/:id',con_transaction.transDelete)


//transaction History

route.post('/api/transHis',con_transHis.transHisCreate)
route.get('/api/transHis',con_transHis.transHisFind)
route.put('/api/transHis/:id',con_transHis.transHisUpdate)
route.delete('/api/transHis/:id',con_transHis.transHisDelete)


//trans Item
route.post('/api/transItem',con_transItem.transItemCreate)
route.get('/api/transItem',con_transItem.transItemFind)
route.put('/api/transItem/:id',con_transItem.transItemUpdate)
route.delete('/api/transItem/:id',con_transItem.transItemDelete)

//trans item bin

route.post('/api/tranItemBin',con_transItemBin.transItemBinCreate)
route.get('/api/tranItemBin',con_transItemBin.transItemBinFind)
route.get('/api/tranItemBin/:id',con_transItemBin.transItemBinFindId)
route.put('/api/tranItemBin/:id',con_transItemBin.transItemBinUpdate)
route.delete('/api/tranItemBin/:id',con_transItemBin.TransItemDelete)

//truck route

route.post('/api/truckRoute',con_truckRoute.truckRouteCreate)
route.get('/api/truckRoute',con_truckRoute.truckRouteFind)
route.get('/api/truckRoute/:id',con_truckRoute.truckRouteFindId)
route.put('/api/truckRoute/:id',con_truckRoute.truckRouteUpdate)
route.delete('/api/truckRoute/:id',con_truckRoute.truckRouteDelete)

//USERS

route.post('/api/users',con_users.usersCreate)
route.get('/api/users',con_users.usersFind)
route.get('/api/users/:id',con_users.usersFindId)
route.put('/api/users/:id',con_users.usersUpdate)
route.delete('/api/users/:id',con_users.usersDelete)

//charts
route.get("/api/charts_total_ordering_sales", con_orderingDetails.getTotalSalesBySelectedPricing)
route.get("/api/charts_total_ordering_sales_by_month", con_orderingDetails.totalSalesByMonth)
route.get("/api/charts_total_ordering_sales_by_month", con_orderingDetails.totalSalesByMonth)

// SALES
route.get('/api/salesHis',con_orderingDetails.totalSalesByHistory);
route.get('/api/salesGrandTotal',con_orderingDetails.totalSalesByGrandTotal);
route.get('/api/salesDate',con_orderingDetails.totalSalesByDate);

module.exports= route