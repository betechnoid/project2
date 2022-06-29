const express = require("express");
const router = express.Router();
const collegeController = require("../controller/collegeController");
const InterController = require("../controller/internsController")




router.post("/functionup/colleges",collegeController.createCollege)
router.post("/functionup/interns",InterController.createIntern)



module.exports = router;