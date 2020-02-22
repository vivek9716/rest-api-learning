const Joi = require('@hapi/joi');
const validationMessages = (errors) => {
  var errorObj = errors.messages({
    "string.base": `{#key} should be a type of 'text'`,
    "string.empty": `{#key} cannot be an empty field`,
    "string.min": `{#key} should have a minimum length of {#limit}`,
    "string.max": `{#key} should have a maximum length of {#limit}`,
    "any.required": `{#key} is a required field`,
    "string.email": `{#key} must be a valid email`
  });
  return errorObj;
}

const createUserValidation = Joi.object({
  email: validationMessages(Joi.string().email().min(10).required()),
  password: validationMessages(Joi.string().required()),
  name: validationMessages(Joi.string().required())
});

module.exports = {
  createUserValidation
};
