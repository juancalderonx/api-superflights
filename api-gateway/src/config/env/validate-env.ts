import * as Joi from 'joi';

export const EnvValidation = Joi.object({
  APP_PORT: Joi.number().required(),
  JWT_SESSION_TIME: Joi.string().required(),
  JWT_SECRET: Joi.string().required(),
  TIMEOUT_REQUEST: Joi.number().required(),
  AMQP_URL: Joi.string().required(),
});
