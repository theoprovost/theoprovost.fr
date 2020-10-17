const Joi = require('joi');

const messageSchema = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    organization: Joi.string(),
    email: Joi.string().email().required(),
    telephone: Joi.string(), // TO DO : add regexp pattern 
    title: Joi.string(),
    content: Joi.string().required() 
});

module.exports = messageSchema;