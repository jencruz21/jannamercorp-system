const path = require("path");
const OrderingDetailsdb = require('../model/w_orderingDetail');
const InvsDb = require(path.resolve(__dirname, "../model/w_inv"));


exports.orderingDetailsCreate = (req,res)=>{
    if(!req.body){
        res.status(400).send({message:"Content can not be empty"});
        return;
    }

    const orderingDetails = new OrderingDetailsdb({

        od_date:req.body.date,
        od_itemName:req.body.itemName,
        od_selectPricing:req.body.selectPricing,
        od_price:req.body.price,
        od_sacks:req.body.sacks,
        od_kilos:req.body.kilos,
        od_amount:req.body.amount,
        od_customer:req.body.customer,
        od_previousRemitance:req.body.previousRemitance,
        od_isCleared:req.body.isCleared,
        od_creditLimit:req.body.creditLimit,
        od_transaction:req.body.transaction,
        od_addOns:req.body.addOns,
        od_less:req.body.less,
        od_cashRemited:req.body.cashRemited,
        od_checkValue:req.body.checkValue,
        od_checkNumber:req.body.checkNumber,
        od_checkDate:req.body.checkDate,
        od_noteTransaction:req.body.noteTransaction,
        od_itemSubtotal:req.body.itemSubtotal,
        od_grandTotal:req.body.grandTotal,
        od_cavans:req.body.cavans,
        od_change:req.body.change,
        od_newStatus:req.body.newStatus,
        od_rowsLeft:req.body.rowsLeft,
        od_newBalance:req.body.newBalance,

        od_number:req.body.number,
        od_location:req.body.location,
        od_route:req.body.route,
        od_remarks:req.body.remarks,
        od_validId:req.body.validID,
        od_route: req.body.route

    })
    orderingDetails.save(orderingDetails)
    .then(data=>{
        // res.send(data)
        res.redirect("/staff/customer")
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message || "Some Error Occured"
        });
    });
}


//retrieve and return

exports.findOrderingDetails = (req,res)=>{
if(req.query.id){
    const id = req.query.id;
    OrderingDetailsdb.findById(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message: "Not found User"})

        }else{
            res.send(data)
        }

    })
    .catch(err=>{
        res.status(500).send({message: "Error"})
    })
}else{
    OrderingDetailsdb.find()
    .then(ordDetails=>{
        res.send(ordDetails)
    })
    .catch(err=>{
        res.satatus(500).send({message:err.message || "Error Occurd"})
    })
  }
}


exports.findMacthDetails = async (req, res) => {
    try {
        const result = await OrderingDetailsdb.aggregate([
            {
              '$match': {
                '$or': [
                  {
                    'od_transaction': 'Delivery'
                  }
                ]
              }
            }
          ]);

        return res.status(200).send(result);
    } catch (error) {
        return res.status(400).send(error);
    }
}


//sample


exports.findAveDetails = async (req, res) => {
    try {
        const result = await OrderingDetailsdb.aggregate([
            {
              '$project': {
                '_id': 0, 
                'od_price': 1, 
                'od_amount': 1, 
                'newPrice': {
                  '$multiply': [
                    '$od_price', '$od_amount'
                  ]
                }
              }
            }
          ])
        return res.status(200).send(result);
    } catch (error) {
        return res.status(400).send(error);
    }
}

exports.paidCustRecord = async (req, res) => {
  try {
      const result = await OrderingDetailsdb.aggregate([
        {
          '$match': {
            'od_newStatus': 'Paid'
          }
        }
      ])
      return res.status(200).send(result);
  } catch (error) {
      return res.status(400).send(error);
  }
}



exports.balanceCustRecord = async (req, res) => {
  try{
    const result = await OrderingDetailsdb.aggregate(
      [
        {
          '$match': {
            'od_newStatus': 'Balance'
          }
        }
      ]
    )
    return res.status(200).send(result)
  }
  catch (error){
    return res.status(400).send(error);
  }
}

// data aggregation idea group by 
// sacks
// possible ko sana pala isubtract sana kuys iba kaso naalala ko sabi ni baks na presyo ung iba kaya sacks nlng ako dumepende
// naisip ko ren kuys wag na galawin add sacks

exports.subtractSacksInvDB = async (req, res) => {
  // subtract sacks based on the database
  // bali kukuhanin muna naten id ng orderingDetails then kumuha ako ng reference ng id(para dito sa InvDB) galing sa orderingDetails
  // then issubtract ko eto sa inv na nirereference ko na id
  
  // eto pala yung id para sa orderingDetails (reminding myself baka ma mistake ko eto sa invDb na item HAHAHAHA)
  const _id = req.params || req.query || req.body;
  const amount = req.params || req.query || req.body;

  if (!_id) {
    return res.status(422).send("Input Invalid or Empty");
  }

  try {
    const orderingDetailsResult = await OrderingDetailsdb.findById(_id);
    console.log(orderingDetailsResult.od_invIdRef);

    const updateResult = InvsDb.findByIdAndUpdate(_id, { $inc: { i_sacks: Number(-amount)}});

    return res.status(200).send(updateResult);
  } catch (error) {
    return res.status(400).send(error);
  }
}

// para sa charts
exports.getTotalSalesBySelectedPricing = async (req, res) => {
  try {
    const orderingDetailsResult = await OrderingDetailsdb.aggregate([
      { $group: {
          _id: "$od_selectPricing",
          total_sales: { $sum: "$od_grandTotal"}
      }},
      {
        $sort: {
          _id: 1
        }
      }
    ]);

    return res.status(200).send(orderingDetailsResult);
  } catch (error) {
    return res.status(400).send(error);
  }
}

exports.totalSalesByMonth = async (req, res) => {
  const date = new Date();
  date.toLocaleString("en-US", {timeZone: "Asia/Manila"});
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 6, 0);

  try {
      const result = await OrderingDetailsdb.aggregate([
          { $match: {
            od_date: {
              $gte: new Date(firstDay).toISOString(),
              $lte: new Date(lastDay).toISOString()
            }
          }},
          { $group: { 
              _id: '$od_selectPricing', 
              total_sales: { $sum: '$od_grandTotal'},
          } },
          {
            $sort: {
              _id: 1
            }
          }
      ]);
      return res.status(200).send(result);
  } catch (error) {
      return res.status(400).send(error);
  }
}

exports.totalSalesByDate = async (req, res) => {
  try {
      // const result = await OrderingDetailsdb.aggregate([
          
      // ]);

      // return res.status(200).send(result);
  } catch (error) {
      return res.status(400).send(error);
  }
}

exports.totalSalesByHistory = async (req, res) => {
  try {
      // const result = await OrderingDetailsdb.aggregate([
          
      // ]);

      // return res.status(200).send(result);
  } catch (error) {
      return res.status(400).send(error);
  }
}

exports.totalSalesByGrandTotal = async (req, res) => {
  try {
      const result = await OrderingDetailsdb.aggregate([
        { $addFields: { "itemId": { $toString: "$_id" } } },
        { $lookUp: {
                from: "invdbs",
                localField: "od_invIdRef",
                foreignField: "itemId",
                as: "items"
        } },
        { 
          $sort: {
            od_grandTotal: 1
          }  
        }
      ]);
      return res.status(200).send(result);
  } catch (error) {
      return res.status(400).send(error);
  }
}