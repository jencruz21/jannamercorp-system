const mongoose = require('mongoose')

const connectDB = async()=>{
    try{
        //mongo connection  string
        mongoose.set("strictQuery", false);
        const con = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,   
        })
        console.log(`MongoDB connected:${con.connection.host}`);
    }
    catch(err){
        console.log(err)
    }
}

module.exports = connectDB