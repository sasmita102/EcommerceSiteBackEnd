const mongoose =require("mongoose");
const productSchema = new mongoose.Schema({
    
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    
       imgUrl:{
        type:String,
        required:true
    }
    
})
const Product =  new mongoose.model('Product', productSchema);
//console.log(Product);

module.exports = Product;