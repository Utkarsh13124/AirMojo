const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const Listing = require("./models/listing.js")
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate'); 
// const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
// const { listingSchema , reviewSchema } = require('./schema.js'); //  this is for JOI server side validation
// const Review = require("./models/review.js");

const listings = require("./routes/listing.js"); // router
const reviews = require("./routes/review.js"); // router

const path = require("path");
app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "views"));
app.use(express.urlencoded({extended :  true}));
app.use(methodOverride("_method"));
app.engine("ejs" , ejsMate); // to use ejs for creating boilerplate
app.use(express.static(path.join(__dirname, "/public"))); // to use static files.

const MONGO_URL = "mongodb://127.0.0.1:27017/airmojo";

async function main() {
    await mongoose.connect(MONGO_URL);
}

main().then(() => {
    console.log("Connected to DB.")
})
.catch( (err) => console.log(err));

//! method override

app.get("/" , (req , res) => {
    console.log("hi ,  I am root.");
    res.send("Home page");
})



// ! Using Express Router
app.use("/listings" , listings);
app.use("/listings/:id/reviews" , reviews);



// ! sending page not found response for all other routes that are not defined above.
    // * means sabse match ho jayega. --> ise wild card matching kehte hi. 
// app.all("*", (req, res, next) => {
//     next(new ExpressError(404, "Page Not Found"));
// });

// 404 handler - should be AFTER all defined routes but BEFORE the error handler
app.use((req, res, next) => {
    next(new ExpressError(404, "Page Not Found"));
});

// error handling middleware
app.use((err, req, res, next) => {
    console.log("After wrap asyn.");
    const { statusCode = 500, message = "Something went wrong!" } = err;
    // res.status(statusCode).send(message);
    res.status(statusCode).render("error.ejs" , {err});
});



app.listen( 8080 , () => {
    console.log("Server is listening to  port 8080.");
});