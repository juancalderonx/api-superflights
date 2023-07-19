import * as Joi from 'joi';

export const EnvValidation = Joi.object({
  APP_URL: Joi.string().required(),
  APP_PORT: Joi.number().required(),
  URI_MONGODB: Joi.string().required(),
  AMQP_URL: Joi.string().required(),
});
