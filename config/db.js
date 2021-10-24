
const mongoose = require("mongoose");
const connectDB = async()=>{
    try{
        await mongoose.connect("mongodb+srv://user-123:user-123@cluster-test.avja8.mongodb.net/shopcart?retryWrites=true&w=majority" , {
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log("Mongodb connection success");
    }catch(error){
        console.error("Mongodb connection fail");
        process.exit(1);
    }
}
module.exports = connectDB;