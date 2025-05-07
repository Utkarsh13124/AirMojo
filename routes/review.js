const express = require("express");
const router = express.Router({ mergeParams : true }); // setting mergeParams true to preserve parameters from parents route
const wrapAsync = require("../utils/wrapAsync.js");
const { reviewSchema } = require('../schema.js'); //  this is for JOI server side validation
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js")


const validateReview = (req , res , next) => {
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

//! Create Reviews
    // Post route
    router.post("/" , validateReview, wrapAsync(async(req , res) => {
        console.log(req.params.id); // id is not reaching here from app.js --> 
        let listing = await Listing.findById(req.params.id);
        let newReview = new Review(req.body.review); // as review ko humne name ke jariye , review object bnake bheje tha

        listing.reviews.push(newReview);

        await newReview.save(); // as review bhi ek model hi
        await listing.save(); 

        console.log("New Review Saved");
        req.flash("success" , "New Review Created!");     
        // res.send("New review saved.");
        res.redirect(`/listings/${listing._id}`);
    }));

    //! Delete Review Route
    router.delete("/:reviewId" , wrapAsync( async(req , res) => {
        let { id , reviewId } = req.params;

        await Listing.findByIdAndUpdate(id , {$pull : {reviews : reviewId} }); // listing ke ander se hum references delete krenge , 
            // ? we will use pull operator 
            // go in listing and search by id , uske review me jaha wo reviewId se match kre remove kr do.
        await Review.findByIdAndDelete(reviewId);  // deleting review
        req.flash("success" , "Review Deleted");     
        res.redirect(`/listings/${id}`);
    }))


module.exports = router;