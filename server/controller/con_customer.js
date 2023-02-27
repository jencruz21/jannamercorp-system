const { rawListeners} = require('../model/w_customer')
const NewCustomerDB = require('../model/w_customer')



exports.createCustomer = (req,res)=>{
    //validate request
    if(!req.body){
        res.status(400).send({message:"Content can not be empty"});
        return;
    }
    
    //new user
    
    const newCustomer = new NewCustomerDB({
     custName:req.body.custName,
     custLocation:req.body.custLocation,
     custPhone:req.body.custPhone,
     custDate:req.body.custDate,
     custCreditLimit:req.body.custCreditLimit
    })
    newCustomer.save(newCustomer)
    .then(data=>{
        // res.send(data)
        res.redirect("/staff/customer")
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message ||"Some error occurred while creating a create operation"
        });
    });
    }
    
    exports.findCustomer=(req,res)=>{
        NewCustomerDB.find()
        .then(user=>{
            res.send(user)
        })
        .catch(err=>{
            res.status(500).send({message:err.message ||" Error Occured while retrieving user information"})
        })
        }
        
        //retrieve and return all user/ retrieve and return a single user
        exports.findCustomer=(req,res)=>{
            if(req.query.id){
                const id = req.query.id;
                NewCustomerDB.findById(id)
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
                NewCustomerDB.find()
                .then(user=>{
                    res.send(user)
                })
                .catch(err=>{
                    res.status(500).send({message:err.message ||" Error Occured while retrieving user information"})
                })
            }
        
            }
        // Update a new identified user by user ID
        
        // exports.update = (req,res)=>{
        //     if(!req.body){
        //         return res
        //         .status(400)
        //         .send({message:"Data to Update Cannot be Empty"})
        //     }
        //     const id = req.params.id;
        //     Userdb.findByIdAndUpdate(id, req.body,{useFindAndModify:false})
        
        //     .then(data=>{
        //         if(!data){
        //         res.status(404).send({message:`Cannot Update user with ${id}.Maybe user not Found!`})
        //     }else{
        //         res.send(data)
        //     }
        //     })
        //     .catch(err=>{
        //         res.status(500).send({message: "Error Update User Information"})
        //     })
        // }

        