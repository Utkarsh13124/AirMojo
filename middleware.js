module.exports.isLoggedIn = (req , res , next) => {
    if(!req.isAuthenticated()){ // check that a user is logged in for creating new listings , this method is given by passport. 
        req.flash("error" , "You must be logged in to create listings.");
        return res.redirect("/login");
    }
    next();
}