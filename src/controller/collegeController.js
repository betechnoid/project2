const CollegeModel = require("../models/collegeModel")

const createCollege= async function(req,res){
    try{
    let data =req.body
    let collegedetail= await CollegeModel.create(data)
    res.status(201).send({status:true,data:collegedetail})
}
catch(err){
    res.status(500).send({status:false,err:err.message})

}
}



module.exports.createCollege = createCollege