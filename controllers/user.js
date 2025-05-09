
const User = require("../models/user.js")


module.exports.renderSignUpForm = (req , res) => {
    res.render("users/signup.ejs");
};
module.exports.signup = async(req , res) => {
    try{
        let {username , email , password} = req.body;
        const newUser = new User({email , username});
        let registeredUser = await User.register(newUser , password);
        console.log(registeredUser);
        req.login(registeredUser , (err) => { // implementing functionality of diretly sigin in , once user sign up, with help of passport methods.
            if(err){
                return next(err);
            }
        })
        req.flash("success" , "Welcome to AirMojo !!"); // flash to ho jayega , kyuki hune boilerplate me hi daal diya hi.
        res.redirect("/listings"); // jab koi page banayege to wha pr redirect kr denge    
    } catch(err){
        req.flash("error" , err.message);
        res.redirect("/signup");
    }
}

module.exports.renderLoginForm = (req , res) => {
    res.render("users/login.ejs");
};

module.exports.login = async (req , res) => {
    req.flash( "success" , "Welcome back to AirMojo !! , you are logged in.");
    
    let redirectUrl = res.locals.redirectUrl || "/listings";
    
    res.redirect(redirectUrl); // redirectUrl variable is created by us. 
};

module.exports.logout = (req , res , next) => {
    req.logout( (err) => { // agar logout krte hue koi error ata hi. / then we will pass into next for error error middleware to handle.
        if(err){
            return next(err);
        }
        req.flash("success" , "You are logged out!" );
        res.redirect("/listings");
    })
};