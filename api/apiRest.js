const app=require("./app");
require("./database");
app.listen(app.get("port"),function(){
    console.log("PETINCION RECIBIDA DEL CLIENTE");
})