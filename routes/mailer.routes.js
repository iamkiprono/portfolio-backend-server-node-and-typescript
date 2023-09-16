const express = require("express") ;
const { submitForm } =require("../sendMail")

const router = express.Router();

router.post("/", submitForm);

module.exports = router 
