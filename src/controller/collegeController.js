const collegeModel = require("../models/collegeModel")


var validateUrl = function(url) {
    // var re = /([a-z\-_0-9\/\:\.]*\.(?:png|jpg|jpeg|gif|png|svg))/
    var re = /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gmi
    return re.test(url)
};
// (http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))

const createCollege = async function(req,res){
    try{
        const collegeDetails = req.body;
        if(!Object.keys(collegeDetails).length>0){return res.status(400).send({status:false, message:"required some data"})}
        const{name, fullName, logoLink}=collegeDetails;
        if(!logoLink){return res.status(400).send({status:false, message:"LogoLink required"})};
        if(!validateUrl(logoLink)){return res.status(400).send({status:false, message:"Image url is not valid"}) }
        
        const findCollege=await collegeModel.findOne(name);
       
        if(!name){return res.status(400).send({status:false, message:"Name required"})}
        if(!fullName){return res.status(400).send({status:false, message:"fullName required"})}
        if(findCollege){
            return res.status(400).send({status:false, message:"use different Name"})
        }
        if(findCollege){
            return res.status(400).send({status:false, message:"use different Name"})
        }
        
        const newCollege =await collegeModel.create(collegeDetails);
        if(newCollege){
            return res.status(201).send({status: true, data: newCollege})
        }
        
    }
catch(err){
    res.status(500).send({status: false, msg: err.message})
}
}



module.exports.createCollege = createCollege