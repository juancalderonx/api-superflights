import * as Joi from 'joi';

export const EnvValidation = Joi.object({
  URI_MONGODB: Joi.string().required(),
  AMQP_URL: Joi.string().required(),
});
