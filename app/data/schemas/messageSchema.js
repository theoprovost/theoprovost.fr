const Joi = require('joi');

const messageSchema = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().email().required(),
    telephone: Joi.string().required(),
    content: Joi.string().required() 
});

module.exports = messageSchema;