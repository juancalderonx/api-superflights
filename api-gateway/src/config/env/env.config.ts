import { registerAs } from '@nestjs/config';

export default registerAs('EnvConfiguration', () => {
  return {
    NODE_ENV: process.env.NODE_ENV || 'development',
    APP_PORT: +process.env.APP_PORT || 3023,
    JWT_SESSION_TIME: process.env.SESSION_TIME || '8h',
    JWT_SECRET: process.env.JWT_SECRET || 'F1rM4D3lJWT',
    TIMEOUT_REQUEST: process.env.TIMEOUT_REQUEST || 12000,
    AMQP_URL:
      process.env.AMQP_URL ||
      'amqps://eeqrchlu:los3Irb_hqRXZ_lmJW5syMhEqTNaGi-6@toad.rmq.cloudamqp.com/eeqrchlu',
  };
});
