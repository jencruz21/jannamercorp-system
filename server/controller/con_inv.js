const  { rawListeners } =  require('../model/w_inv');
const Invdb = require('../model/w_inv');
const Transactiondb = require('../model/w_transaction');

//create and save 

exports.invCreate = (req,res)=>{

    if(!req.body){
        res.status(400).send({message: "Content  can not be empty"});
        return;
    }
    //new user
    //ws1 = wholeSale

    const inv = new Invdb({

            i_item:req.body.iItem,
            i_type:req.body.iType,
            i_addedSacks:req.body.addedSacks,
            i_sacks:req.body.iSacks,
            i_retail:req.body.iRetail,
            i_kilos:req.body.iKilos,
            i_5kg:req.body.i5kg,
            i_10kg:req.body.i10kg,
            i_market:req.body.iMarket,
            i_tenC:req.body.iTenc,
            i_wsMarket:req.body.iwsMarket,
            i_wholeSale:req.body.iwholeSale,
            i_special1:req.body.special1,
            i_special2:req.body.special2,
            i_divert:req.body.iDivert,
            i_date: req.body.iDate,
            i_buyingPrice: req.body.buyingPrice,
            i_totalKilos: req.body.totalKilos,
            i_totalBuyingPrice: req.body.totalBuyingPrice,
            i_overAllPriceRetail: req.body.overAllPriceRetail,
            i_gross: req.body.gross
          
                
    })
    inv.save(inv)
    .then(data=>{
        // res.send(data)
        res.redirect("/staff/inventory")
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message || "Some error while creating inv"
        });
    });
};

//retrieve and return inv data

exports.invFInd = (req,res)=>{
    Invdb.find()
    .then(inv=>{
        res.send(inv)
    })
    .catch(err=>{
        res.status(500).send({message:err.message || " Error retrieving data in inv"})
    })
}

//retrieve and return all INV data by id

exports.invFindId = (req,res)=>{
    if(req.query.id){
        const id = req.query.id;
        Invdb.findById(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message:"ERRRRRRRRRRRRRRRRRRRR"+ id})
            }else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message:"ERRRRRRRRRR" +id})
        })
    }else{
        Invdb.find()
        .then(inv=>{
            res.send(inv)
        })
        .catch(err=>{
            res.status(500).send({message:err.message || " ERRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR"})
        })
    }
}

exports.invUpdate = (req,res)=>{
    if(!req.body){
        return res.status(400)
        .send({message:"Data to Update"})
    }
    const id = req.params.id;
    Invdb.findByIdAndUpdate(id, req.body,{useFindAndModify:false})
    .then(data=>{
        if(!data){
            res.status(404)
            .send({message:`Cannot Update id ${id}`})
        }else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({message:"Catch Error"})
    });
};

exports.invDelete = (req,res)=>{
    const id =req.params.id;
    
  Invdb.findByIdAndDelete(id)
  .then(data=>{
    if(!data){
        res.status(404).send({message:`Cannot delete with id ${id}`})
    }else{
        res.send({
            message:" User was deleted succesfully!"
        })
    }
  })
  .catch(err=>{
    res.status(500).send({
        message:"Could not delete User with id "+ id
    })
  })
}


exports.getI_marketPricing = async (req, res) => {
    try {
        const result = await Invdb.aggregate([
            { $match: {} },
            { $group: { _id: "od_item", doc: { $first: "$$ROOT"} } },
            { $sort: { i_market: 1} }
        ]);

        return res.status(200).send(result);
    } catch (error) {
        return res.status(400).send(error);
    }
}

exports.getI_wsMarketPricing = async (req, res) => {
    try {
        const result = await Invdb.aggregate([
            { $match: {} },
            { $group: { _id: "od_item", doc: { $first: "$$ROOT"} } },
            { $sort: { i_wsMarket: 1} }
        ]);

        return res.status(200).send(result);
    } catch (error) {
        return res.status(400).send(error);
    }
}

exports.getI_TenCPricing = async (req, res) => {
    try {
        const result = await Invdb.aggregate([
            { $match: {} },
            { $group: { _id: "od_item", doc: { $first: "$$ROOT"} } },
            { $sort: { i_tenC: 1} }
        ]);

        return res.status(200).send(result);
    } catch (error) {
        return res.status(400).send(error);
    }
}

exports.getI_wholeSalePricing = async (req, res) => {
    try {
        const result = await Invdb.aggregate([
            { $match: {} },
            { $group: { _id: "od_item", doc: { $first: "$$ROOT"} } },
            { $sort: { i_wholeSale: 1} }
        ]);
        
        return res.status(200).send(result);
    } catch (error) {
        return res.status(400).send(error);
    }
}



// exports.lookUp = async (req, res) => {
//     try {
//         const result = await Invdb.aggregate([
//             {
//               '$lookup': {
//                 'from': 'itemnamedbs', 
//                 'localField': 'i_item', 
//                 'foreignField': 'itemName', 
//                 'as': 'post'
//               }
//             }
//           ]);
        
//         return res.status(200).send(result);
//     } catch (error) {
//         return res.status(400).send(error);
//     }
// }

exports.lookUp = async (req, res) => {
    try {
        const result = await Invdb.aggregate([
            { $match: {} },
            { $group: { 
                _id: '$i_item', 
                total_sacks: { $sum: '$i_sacks'},
                i_type: { $first: "$i_type" },
                i_addedSacks: { $first: "$i_addedSacks" },
                i_retail: { $first: "$i_retail" },
                i_5kg: { $first: "$i_5kg" },
                i_10kg: { $first: "$i_10kg" },
                i_market: { $first: "$i_market" },
                i_tenC: { $first: "$i_tenC" },
                i_wsMarket: { $first: "$i_wsMarket" },
                i_wholeSale: { $first: "$i_wholeSale" },
                i_special1: { $first: "$i_special1" },
                i_special2: { $first: "$i_special2" },
                i_divert: { $first: "$i_divert" },
                i_date: { $first: "$i_date" },
                i_buyingPrice: { $first: "$i_buyingPrice" },
                i_totalKilos: { $first: "$i_totalKilos" },
                i_totalBuyingPrice: { $first: "$i_totalBuyingPrice" },
                i_overAllPriceRetail: { $first: "$i_overAllPriceRetail" },
                i_gross: { $first: "$i_gross" },
            } }
        ]);

        return res.status(200).send(result);
    } catch (error) {
        return res.status(400).send(error);
    }
}

