const express = require("express");
const router = express.Router(); // setting mergeParams true to preserve parameters from parents route
const User = require("../models/user.js")
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require('passport');

router.get("/signup" , (req , res) => {
    res.render("users/signup.ejs");
});

router.post("/signup" , wrapAsync( async(req , res) => {
    try{
        let {username , email , password} = req.body;
        const newUser = new User({email , username});
        let registeredUser = await User.register(newUser , password);
        console.log(registeredUser);
        req.flash("success" , "Welcome to AirMojo !!"); // flash to ho jayega , kyuki hune boilerplate me hi daal diya hi.
        res.redirect("/listings"); // jab koi page banayege to wha pr redirect kr denge    
    } catch(err){
        req.flash("error" , err.message);
        res.redirect("/signup");
    }
}));

router.get("/login" , (req , res) => {
    res.render("users/login.ejs");
});

router.post("/login" , passport.authenticate("local" , { failureRedirect : '/login' , failureFlash : true}) ,  wrapAsync( async (req , res) => {
    req.flash( "success" , "Welcome back to AirMojo !! , you are logged in.");
    res.redirect("/listings");
}));

module.exports = router;