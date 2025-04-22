const  mongoose = require("mongoose");
const Schema = mongoose.Schema; // jisse ab humhe baar baar mongoose.schemanhi likhna hoga

const listingSchema = new Schema({
    title : {
        type : String,
        required : true,
    },
    description  :  String, 
    imgage : {
        type  :  String,
        default  : "https://unsplash.com/photos/white-concrete-house-surrounded-by-palm-trees-tKyVdwo_2nI",
        
        Set : (v) => {
            v === "" ? "https://unsplash.com/photos/white-concrete-house-surrounded-by-palm-trees-tKyVdwo_2nI" : v;
        }
    },
    price : Number, 
    location: String,
    country : String,
});

const Listing = mongoose.model("Listing"  , listingSchema);

module.exports = Listing;
