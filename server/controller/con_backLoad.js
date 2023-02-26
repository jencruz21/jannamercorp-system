const { rawListeners } = require('../model/w_backload')

const BackLoaddb = require('../model/w_backload')




exports.createBackload = (req,res)=>{
    if(!req.body){
        res.status(400).send({message:"Content Cannot Be Empty"});
        return;
    }

    //backload Database


    const backload = new BackLoaddb({
        

        riceMill: req.body.riceMill,
        dateTime:req.body.dateTime,
        item:req.body.item,
        type:req.body.type,
        remarks:req.body.remarks,
        encodeBy:req.body.encodeBy,
        sacks:req.body.sacks
    })
    backload.save(backload)
    .then(data=>{
        // res.send(data)
        res.redirect('/staff/inventory')
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message || "Some Data Has error"
        });
    });

};





exports.backloadFind=(req,res)=>{
    BackLoaddb.find()
    .then(backLoad=>{
        res.send(backLoad)
    })
    .catch(err=>{
        res.status(500).send({message:err.message ||" Error Occured while retrieving user information"})
    })
    }
    
    //retrieve and return all user/ retrieve and return a single user
    exports.backloadFind=(req,res)=>{
        if(req.query.id){
            const id = req.query.id;
            BackLoaddb.findById(id)
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
            BackLoaddb.find()
            .then(user=>{
                res.send(user)
            })
            .catch(err=>{
                res.status(500).send({message:err.message ||" Error Occured while retrieving user information"})
            })
        }
    
        }

