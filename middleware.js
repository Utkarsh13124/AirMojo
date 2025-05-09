const Listing = require("./models/listing.js");
const { listingSchema , reviewSchema } = require('./schema.js'); //  this is for JOI server side validation
const ExpressError = require("./utils/ExpressError.js");
const Review = require("./models/review.js");


// jaise hi lage  file badi ho rhi hi , waise hi hum middleware folder bna ke review ke middleware ko ek me , listing ke middleware ko ek me.
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


module.exports.isOwner = async(req, res ,next) => {
    let { id } = req.params;
        // console.log("In IsOwner45");

        //! Adding authorization
            let listing = await Listing.findById(id);
            if(!listing.owner.equals(res.locals.currUser._id)){
                req.flash("error" , "You are not the owner.");
                return res.redirect(`/listings/${id}`);
            }
        next();
}

module.exports.isReviewAuthor = async(req, res ,next) => {
    let { reviewId , id } = req.params;
        // console.log("In IsOwner45");

        //! Adding authorization
            let review = await Review.findById(reviewId);
            if(!review.author.equals(res.locals.currUser._id)){
                req.flash("error" , "You did not create the review.");
                return res.redirect(`/listings/${id}`);
            }
        next();
}

module.exports.validateListing = (req , res , next) => {
    let result = listingSchema.validate(req.body); // ! is req.body is satisfying the condition of defined schema
    console.log(result);
    if(result.error){ // consoling result helps us to see ki kon kon se key-value hi iske ander
        let errMsg = result.error.details.map((el) => el.message).join(",");
        console.log("Data is not saving.");
        throw new ExpressError(400 , errMsg);
    }else{
        next();
    }
 
};

module.exports.validateReview = (req , res , next) => {
    let result = reviewSchema.validate(req.body); // ! is req.body is satisfying the condition of defined schema
    console.log(result);
    if(result.error){ // consoling result helps us to see ki kon kon se key-value hi iske ander
        let errMsg = result.error.details.map((el) => el.message).join(",");
        console.log("Review is not saving.");
        throw new ExpressError(400 , errMsg); // errMsg is combining multiple error from request.error
    }else{
        next();
    }
};
