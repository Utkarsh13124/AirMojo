const Joi = require('joi');

// done by seeing syntax from Docs. ,, if needs explanation use Claude
module.exports.listingSchema = Joi.object({
    listings: Joi.object({
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
  