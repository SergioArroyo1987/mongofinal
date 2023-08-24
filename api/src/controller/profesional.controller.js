
const profesional=require("../model/modelo");
const {conexion}=require("../../database");
async function getprofesional(request,response){
    try{
       
           // let datos=profesional.modelo.aggregate([{$project:{name:1,surname:1,email:1,url:1,_id:0}},{$match:{"name":"request.params.name"}}])
        
        console.log("sdsa");
        let datos=profesional.modelo.aggregate([{$project:{name:1,surname:1,email:1,url:1,_id:0}}])
        .then((resultado)=>{
            console.log(resultado);
            response.send(resultado);
        });
        
        
        
        

    }catch(error){
        response.send(error);
    }
}
async function getuno(request,response){
    try{
       
           // let datos=profesional.modelo.aggregate([{$project:{name:1,surname:1,email:1,url:1,_id:0}},{$match:{"name":"request.params.name"}}])
        
        console.log("sdsa");
        let datos=profesional.modelo.aggregate([{$project:{name:1,surname:1,email:1,url:1,_id:0}},{$match:{"name":request.params.name}}])
        .then((resultado)=>{
            console.log(resultado);
            response.send(resultado);
        });
        
        
        
        

    }catch(error){
        response.send(error);
    }
}
async function postprofesional(request,response){
    try{
        let introducir=new profesional.modelo({
            name:request.body.nombre,
            surname:request.body.apellido,
            email:request.body.email,
            url:request.body.url
        });
        introducir.save();
        
        

    }catch(error){
        response.send(error);
    }
}
async function putprofesional(request,response){
    try{
        console.log(request.body);
        profesional.modelo.updateMany({name:request.body.nombre},{surname:request.body.apellido,email:request.body.email,url:request.body.url})
        .then((dato)=>{
            console.log("Datos modificados correctamente");
            console.log(dato);
            response.send(dato);
        })

    }catch(error){
        response.send(error);
    }
}
module.exports={getprofesional,postprofesional,putprofesional,getuno};

