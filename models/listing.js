const  mongoose = require("mongoose");
const Schema = mongoose.Schema; // jisse ab humhe baar baar mongoose.schemanhi likhna hoga

const listingSchema = new Schema({
    title : {
        type : String,
        required : true,
    },
    description  :  String, 
    image: {
        filename: {
            type : String,
            default : "ListingFile",
        },
        url: {
          type: String,
          default: "https://unsplash.com/default-image.jpg",
          set: function (v) {
            return v === "" ? "https://unsplash.com/default-image.jpg" : v;
          }
        }
      },
    price : Number, 
    location: String,
    country : String,
});

const Listing = mongoose.model("Listing"  , listingSchema);

module.exports = Listing;
