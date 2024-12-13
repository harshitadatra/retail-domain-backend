const mongoose = require('mongoose');
// const Schema = mongoose.Schema()
mongoose.connect('mongodb+srv://harshit22:Hk7YJZ8C1D18PQgv@cluster0.erwxsd6.mongodb.net/retail-domain')


const userSchema = new mongoose.Schema({
    username : {type:String, unique :true},
    password:String,
    phoneNumber:String,
    email:String
});
const productSchema = new mongoose.Schema({
    productId:Number,
    productName:String,
    productCode:String,
    description:String,
    price:String,
    rating:String,
    manufacturer:String,
    osType:String
    
})



const userModel = mongoose.model('user',userSchema);
const productModel = mongoose.model("product",productSchema)

module.exports  = userModel