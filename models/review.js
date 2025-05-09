const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    comment : String,
    rating : {
        type : Number,
        min : 1, 
        max : 5,
    },
    createdAt : {
        type : Date, 
        default : Date.now,
    },
    author : {
        type : Schema.Types.ObjectId,
        ref : "User",
    },
});

module.exports = mongoose.model("Review" , reviewSchema);


// ! listing * Reviews --> 1 to many case
/*
    generaly hr ek listings ke saath kuch reviews honge , eisa to nhi hoga ki ek listings ke saath millions of reviews ho. 
    
    ? we will have a array of reference of reviews for listings.

*/