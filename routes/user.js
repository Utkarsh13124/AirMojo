const express = require("express");
const router = express.Router(); // setting mergeParams true to preserve parameters from parents route

router.get("/signup" , (req , res) => {
    res.render("users/signup.ejs");
});



module.exports = router;