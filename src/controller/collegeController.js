const collegeModel = require("../models/collegeModel");

// const isValid = function (value) {
//   if (typeof value !== "undefined" || value !== null) return true;
//   if (typeof value === "string" && value.trim().length !== 0) return true;
//   return false;
// };
// const isValid = function (value) {
//     if (typeof value !== "string" && value.trim().length === 0) return false;
//     return true;
// };


var validateUrl = function (url) {
  var re = /^https?:\/\/.*\/.*\.(png|jpeg|jpg)\??.*$/gim;
  return re.test(url);
};

const createCollege = async function (req, res) {
  try {
    const collegeDetails = req.body;
    const data={}
    if (!Object.keys(collegeDetails).length > 0) {
      return res
        .status(400)
        .send({ status: false, message: "required some data" });
    }
    const { name, fullName, logoLink } = collegeDetails;

    if (!logoLink.trim()) {
      return res
        .status(400)
        .send({ status: false, message: "LogoLink required" });
    }else{data.logoLink=logoLink.trim()
    }
    if (!validateUrl(logoLink)) {
      return res
        .status(400)
        .send({ status: false, message: "Image url is not valid" });
    }

    if (!name.trim()) {
      return res.status(400).send({ status: false, message: "Name required" });
    }else{data.name=name.trim()
    }

    if (!fullName.trim()) {
      return res
        .status(400) 
        .send({ status: false, message: "fullName required" });
    }else{data.fullName=fullName.trim()
    }

    const findCollege = await collegeModel.findOne({name:data.name});

    if (findCollege) {
      return res
        .status(400)
        .send({ status: false, message: "use different Name" });
    }

    const newCollege = await collegeModel.create(data);


      return res.status(201).send({ status: true, data: newCollege });

  } catch (err) {
    res.status(500).send({ status: false, msg: err.message });
  }
};

module.exports.createCollege = createCollege;
