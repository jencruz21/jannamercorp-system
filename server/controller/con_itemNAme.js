const { rawListeners} = require("../model/w_itemNAme")
const ItemNamedb = require('../model/w_itemNAme')




exports.itemNAmeCreate = (req,res)=>{
    if(!req.body){
        res.status(400).send({
            message:"Empty"
        })
        return;
    }

    const itemName = new ItemNamedb({
        itemName: req.body.itemName
    })
    itemName.save(itemName)
    .then(data=>{
        res.redirect('/staff/inventory')
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message||" Some Error"
        });
    });
}


exports.itemNameFind =(req,res)=>{
    if(req.query.id){
        const id = req.query.id;
        ItemNamedb.findById(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message:"Not found user with id " + id})
            }else{
                res.send(data)
            }
        })
        .catch(err=>{

            res.status(500).send({message: "Error Retrieving id "+ id})
        })
    }else{
        ItemNamedb.find()
        .then(itemName=>{
            res.send(itemName)
        })
        .catch(err=>{
            res.status(500).send({message:err.message ||" Error Occured while retrieving user information"})
        })
    }

    }
