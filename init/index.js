const mongoose = require("mongoose");
const initData = require("./data.js"); // requiring data
const Listing = require("../models/listing.js");// requireing Models

const MONGO_URL = "mongodb://127.0.0.1:27017/airmojo";

async function main() {
    await mongoose.connect(MONGO_URL);
}

main().then(() => {
    console.log("Connected to DB.")
})
.catch( (err) => console.log(err));

const  initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj , owner : '681b21c6ca50ac3459ce9b74'})); // creating new object , jisme pichle wale ki bhi value hi , aur nyi value jo humhe data set me add krni thi
    await Listing.insertMany(initData.data); //initData is object accessed  above,jiske  ander key hi data : sampleListing ,  jo ki  array of object hi , so we need to use directly , no need to do any modification.
    console.log("data was initialised.");
};

initDB();