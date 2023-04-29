const Joi = require("joi");

const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(4).required(),
    email: Joi.string().email().required(),
  });
  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
