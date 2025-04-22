const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Listing = require("./models/listing.js")

const path = require("path");
app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "views"));
app.use(express.urlencoded({extended :  true}));

const MONGO_URL = "mongodb://127.0.0.1:27017/airmojo";

async function main() {
    await mongoose.connect(MONGO_URL);
}

main().then(() => {
    console.log("Connected to DB.")
})
.catch( (err) => console.log(err));

app.listen( 8080 , () => {
    console.log("Server is listening to  port 8080.");
});

app.get("/" , () => {
    console.log("hi ,  I am root.");
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

// show  route
/*

*/

app.get("/listings/:id" , async (req ,res) =>{
    let {id} = req.params; // app.use(express.urlextende(extended : true)) krna hoga to parse.
    // console.log("Id is" , id);
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs" , {listing});
});