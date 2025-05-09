const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js")
const {isLoggedIn, isOwner, validateListing} = require('../middleware.js');

const listingController = require("../controllers/listings.js"); // mvc design

//! index route
/*
    get request at /listing --> showing all listings

*/
// index route
router.get("/" , wrapAsync(listingController.index));


//! Create : New & Create Route 
/*
    Get /listings/new -> form -> submit
    Post /listings
*/
    router.get("/new" , isLoggedIn, listingController.renderNewForm );

    router.post("/" , isLoggedIn, validateListing, wrapAsync(listingController.createListing));

//! show  route
    router.get("/:id" , wrapAsync(listingController.showListing));


//! Edit Route 
/**
 * Get /listings/:id/edit -> edit form -> submit
 * put /listings/:id
 */
    router.get("/:id/edit" ,isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));

// Update route
    router.put("/:id" , isLoggedIn, isOwner, wrapAsync(listingController.updateListing));


//! Delete Route
/*
    delete /listings/:id
*/
    router.delete("/:id" , isLoggedIn, isOwner, wrapAsync( listingController.destroyListing ));


module.exports = router;