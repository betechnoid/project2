const collegeModel = require("../models/collegeModel")

const createCollege = async function(req,res){
    try{
        const collegeDetails = req.body;
        const newCollege = collegeModel.create(collegeDetails);
        res.status(201).send({status: true, data: newCollege})
    }
catch(err){
    res.status(500).send({status: false, msg: err.message})
}
}



module.exports.createCollege = createCollege