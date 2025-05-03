const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Listing = require("./models/listing.js")
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate'); 
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema , reviewSchema } = require('./schema.js'); //  this is for JOI server side validation
const Review = require("./models/review.js");

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

const validateListing = (req , res , next) => {
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


// app.get("/testing"  , async (req ,  res)  => {
//     let sampleListing  = new Listing({
//         title : "My  new Villa",
//         desc :  "By the beach",
//         price : 1200,
//         location :  "Gurgaon  , Haryana",
//         country  :  "India",
//     });

//     await  sampleListing.save();
//     console.log("sample was  tested,Db is working.");
//     res.send("Successful testing");
// })

//! index route
/*
    get request at /listing --> showing all listings

*/
// index route
app.get("/listings" , wrapAsync(async (req , res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs" , {allListings});
}));


//! Create : New & Vreate Route 
/*
    Get /listings/new -> form -> submit
    Post /listings
*/
    app.get("/listings/new" , (req , res) => {
        console.log("Create route is being rendering.");
        res.render("listings/new.ejs");
    } );

    app.post("/listings" ,validateListing, wrapAsync( async (req , res , next) => {
        // try{
        //     // Method 1 
        //         // let {title , description , image , price , country , location } = req.body;
        //     // Method 2 --> form me object bna lena
        //     let listingObj = req.body.listing;
        //     //    console.log(listingObj);
        //     const newListing = new Listing(listingObj);
        //     await newListing.save();
        //     res.redirect("/listings");
        // }catch(err){
        //     next(err); // if err come call err handler
        // }
        // Method 1 
                // let {title , description , image , price , country , location } = req.body;
            // Method 2 --> form me object bna lena
            

            let listingObj = req.body.listing;
            // if(!listingObj){ // done by Joi
            //     throw new ExpressError(400 , "Send Valid Data for Listing!");
            // }
           // solving scema validation problem , whensend by post request through hoopscotch , where our form required is overpassed/ 
                // * better soluttion is to use joi tool, jo hum if lega ke kr rhe hi , use joi bhut easily kr deta hi 
            // if(!listingObj.description){ // similar for other.
            //     throw new ExpressError(400 , "Send Valid Data for Listing!");
            // }
        // ? Soltuion of validation using Joi
                // validate listing is passed as middleware 
            // try{
                const newListing = new Listing(listingObj);
                console.log("New : " , newListing);
                await newListing.save();
                res.redirect("/listings");
            // }catch(err){
            //     console.log("Error is coming form not saving data.");
            // }

    })
);

//! show  route
    app.get("/listings/:id" , wrapAsync(async (req ,res) =>{
        let {id} = req.params; // app.use(express.urlextende(extended : true)) krna hoga to parse.
        // console.log("Id is" , id);
        const listing = await Listing.findById(id);
        // console.log(listing);
        res.render("listings/show.ejs" , {listing});
    }));


//! Update Route 
/**
 * Get /listings/:id/edit -> edit form -> submit
 * put /listings/:id
 */
    app.get("/listings/:id/edit" , wrapAsync(async (req , res) => {
        let {id} = req.params;
        const listing = await Listing.findById(id);
        // console.log(listing);
        res.render("listings/edit.ejs" , {listing});
    }));

// Update route
    app.put("/listings/:id" , wrapAsync(async ( req , res ) => {
        let { id } = req.params;
        if(!req.body.listing){
            throw new ExpressError(400 , "Send Valid Data for Listing!");
        }
        await Listing.findByIdAndUpdate(id , {...req.body.listing}); 
        // we are passing each attribute as user ne koi bhi change kiya ho sakta hi. 
        // ref to phase1 notes about destructing
        console.log("put" , req.body.listing);
        res.redirect(`/listings/${id}`); // redirecting too show route
    }));


//! Delete Route
/*
    delete /listings/:id
*/
    app.delete("/listings/:id" ,wrapAsync( async (req , res) => {
        let {id} = req.params;
        let deletedListing = await Listing.findByIdAndDelete(id);
        console.log(deletedListing);
        res.redirect("/listings");
    }));


//! Create Reviews
    // Post route
    app.post("/listings/:id/reviews" , validateReview, wrapAsync(async(req , res) => {
        let listing = await Listing.findById(req.params.id);
        let newReview = new Review(req.body.review); // as review ko humne name ke jariye , review object bnake bheje tha

        listing.reviews.push(newReview);

        await newReview.save(); // as review bhi ek model hi
        await listing.save(); 

        console.log("New Review Saved");
        // res.send("New review saved.");
        res.redirect(`/listings/${listing._id}`);
    }));



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