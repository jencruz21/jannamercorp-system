const SackTransferdb = require("../model/w_sackTransfer")
const { rawListeners } = require("../model/w_sackTransfer")




exports.sackTransferCreate = (req,res)=>{
    if(!req.body){
        res.status(400).send({
            message:"Empty"
        })
        return;
    }

    const sackTransfer = new SackTransferdb({

        itemOne:req.body.selectItemOne,
        typeOne:req.body.riceTypeOne,
        sacksOne:req.body.sacksOne,
        kilosOne:req.body.kilosOne,
        itemTwo:req.body.selectItemTwo,
        typeTwo:req.body.riceTypeTwo,
        sacksTwo:req.body.sacksTwo,
        kilosTwo:req.body.kilosTwo,
        dateTime:req.body.dateTime,
        sacksAdded:req.body.sacksAdded,
        kilosAdded:req.body.kilosAdded,
        newSacksAdded:req.body.newSacksAdded,
        newKilosAdded:req.body.newKilosAdded
    })
    sackTransfer.save(sackTransfer)
    .then(data=>{
        // res.send(data)
        res.redirect('/staff/sackTransfer')
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message || "Some Error"
        });
    });


}


exports.sackTransFind= (req,res)=>{
    if(req.query.id){
        const id = req.query.id;
        SackTransferdb.findById(id)
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
        SackTransferdb.find()
        .then(trans=>{
            res.send(trans)
        })
        .catch(err=>{
            res.status(500).send({message:err.message ||" Error Occured while retrieving user information"})
        })
    }
}

