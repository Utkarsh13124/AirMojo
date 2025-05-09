const Listing = require("../models/listing.js");
const Review = require("../models/review.js");

module.exports.createReview = async(req , res) => {
    console.log(req.params.id); // id is not reaching here from app.js --> 
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review); // as review ko humne name ke jariye , review object bnake bheje tha
    newReview.author = req.user._id; // associating author for review. as we  have added isLoggedIn so user is already logged in , flow reaches here.
    console.log(newReview);
    listing.reviews.push(newReview);

    await newReview.save(); // as review bhi ek model hi
    await listing.save(); 

    console.log("New Review Saved");
    req.flash("success" , "New Review Created!");     
    // res.send("New review saved.");
    res.redirect(`/listings/${listing._id}`);
};

module.exports.destroyReview = async(req , res) => {
    let { id , reviewId } = req.params;

    await Listing.findByIdAndUpdate(id , {$pull : {reviews : reviewId} }); // listing ke ander se hum references delete krenge , 
        // ? we will use pull operator 
        // go in listing and search by id , uske review me jaha wo reviewId se match kre remove kr do.
    await Review.findByIdAndDelete(reviewId);  // deleting review
    req.flash("success" , "Review Deleted");     
    res.redirect(`/listings/${id}`);
};