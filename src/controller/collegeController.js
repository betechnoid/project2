const collegeModel = require("../models/collegeModel")

const createCollege = async function(req,res){
    try{
        const collegeDetails = req.body;
        const newCollege = await collegeModel.create(collegeDetails);
        res.status(201).send({status: true, data: {newCollege}})
    }
catch(err){
    res.status(500).send({status: false, msg: err.message})
}
}

const getCollegeWithInterns = async function(req,res){
    try{
        const collegeAbrv = req.query;
 const college = await collegeModel.findOne(collegeAbrv);
 console.log(college)
 if(!college){
    return res.status(404).send({status: false, msg: "College not found"})
 }
 const collegeWithInterns = await internModel.find({collegeId: college._id})
 if(collegeWithInterns !== 0){
    return res.status(404).send({status: false, msg: "interns with given college id not found"})
 }
 res.status(200).send({status: true, data: collegeWithInterns})
    }

    catch(err){
       return res.status(500).send({status: false, msg: err.message})
    }
}

module.exports.createCollege = createCollege
module.exports.getCollegeWithInterns = getCollegeWithInterns