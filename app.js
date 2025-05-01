const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Listing = require("./models/listing.js")
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate'); 
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");

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
app.get("/listings" , async (req , res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs" , {allListings});
});


//! Create : New & Vreate Route 
/*
    Get /listings/new -> form -> submit
    Post /listings
*/
    app.get("/listings/new" , (req , res) => {
        console.log("Create route is being rendering.");
        res.render("listings/new.ejs");
    } );

    app.post("/listings" , wrapAsync( async (req , res , next) => {
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
            const newListing = new Listing(listingObj);
            await newListing.save();
            res.redirect("/listings");

    })
);

//! show  route
    app.get("/listings/:id" , async (req ,res) =>{
        let {id} = req.params; // app.use(express.urlextende(extended : true)) krna hoga to parse.
        // console.log("Id is" , id);
        const listing = await Listing.findById(id);
        // console.log(listing);
        res.render("listings/show.ejs" , {listing});
    });


//! Update Route 
/**
 * Get /listings/:id/edit -> edit form -> submit
 * put /listings/:id
 */
    app.get("/listings/:id/edit" , async (req , res) => {
        let {id} = req.params;
        const listing = await Listing.findById(id);
        // console.log(listing);
        res.render("listings/edit.ejs" , {listing});
    })

// Update route
    app.put("/listings/:id" , async ( req , res ) => {
        let { id } = req.params;
        await Listing.findByIdAndUpdate(id , {...req.body.listing}); 
        // we are passing each attribute as user ne koi bhi change kiya ho sakta hi. 
        // ref to phase1 notes about destructing
        console.log("put" , req.body.listing);
        res.redirect(`/listings/${id}`); // redirecting too show route
    })


//! Delete Route
/*
    delete /listings/:id
*/
    app.delete("/listings/:id" , async (req , res) => {
        let {id} = req.params;
        let deletedListing = await Listing.findByIdAndDelete(id);
        console.log(deletedListing);
        res.redirect("/listings");
    })

// Error Handling Middleware.
app.use((err , req , res , next) =>{
    res.send("Something went wrong."); 
})

app.listen( 8080 , () => {
    console.log("Server is listening to  port 8080.");
});