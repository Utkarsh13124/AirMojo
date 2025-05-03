const Joi = require('joi');

// done by seeing syntax from Docs. ,, if needs explanation use Claude
module.exports.listingSchema = Joi.object({
    listing : Joi.object({
      title: Joi.string().required(),
      description: Joi.string().required(),
      location: Joi.string().required(),
      country: Joi.string().required(),
      price: Joi.number().required().min(0),
      image: Joi.object({
        filename: Joi.string().required(),
        url: Joi.string().allow("", null)
      }),
    }).required()
  });
  

  module.exports.reviewSchema = Joi.object({
    review : Joi.object({
      rating: Joi.number().required().min(1).max(5),
      comment: Joi.string().required(),
    }).required(),
  }); // reviewSchema --> ke ander jo ki ek joi object hi , jiske ander ek review required hoga , uske ander rating , & comment required hi

