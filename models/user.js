const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    email : {
        type : String,
        required : true,
    }, // mongoose-local-passport will define username and password defaulty
});

userSchema.plugin(passportLocalMongoose); // used as plugin because it generates , username , passwordfield , salt field automatically , when model is created , 
 // also implements few methods like setPassword() , autheticate , changePassword() , generate() &  lots other , you will learn from docs , or when implement.

module.exports = mongoose.model('User' , userSchema);