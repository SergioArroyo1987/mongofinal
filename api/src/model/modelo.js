const {Schema,model}=require("mongoose");
const Profesionalshema=new Schema({
    name:String,
    surname:String,
    email:String,
    url:String

})
let modelo=model("profesional",Profesionalshema);
module.exports={modelo};