const InterModel = require("../models/internModel")

const  createintern= async function(req,res){
    try{
    const data= req.body
    const interndata= await InterModel.create(data)
    res.status(201).send({status:true,data:interndata})

}
   catch(err){
    res.status(500).send({status:false,msg:err.message})

   }
}
module.exports.createintern=createintern
