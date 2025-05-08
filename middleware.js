module.exports.isLoggedIn = (req , res , next) => {
    if(!req.isAuthenticated()){ // check that a user is logged in for creating new listings , this method is given by passport. 
        req.session.redirectUrl = req.originalUrl; // iss url ko hune session onject me store kraya jisse hum isse kahi bhi access kr sake , 
            // we will use original Url to forward the page from where user come to this login page.
        req.flash("error" , "You must be logged in to create listings.");
        return res.redirect("/login");
    }
    next();
}

module.exports.saveRedirectUrl = (req , res , next) =>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}