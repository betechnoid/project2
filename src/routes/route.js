const express = require("express");
const router = express.Router();
const collegeController = require("../controller/collegeController");



router.post("/functionup/colleges",collegeController.createCollege)
router.get("/functionup/collegeDetails",collegeController.getCollegeWithInterns)


module.exports = router;