let mongo=require("mongoose");

let conexion=mongo.connect('mongodb+srv://sergioarroyo1987:77357590s@cluster0.cskz0jt.mongodb.net/',{
    useNewUrlParser:false,useUnifiedtopology:false
}).then((db)=>
console.log("Database connected on"+db.connection.host))
.catch((error)=>
console.log(error))
module.exports={conexion};