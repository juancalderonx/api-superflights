import { registerAs } from '@nestjs/config';

export default registerAs('EnvConfiguration', () => {
  return {
    APP_URL: process.env.APP_URL || 'https://superflights.com',
    APP_PORT: +process.env.APP_PORT || 3023,
    URI_MONGODB:
      process.env.URI_MONGODB || 'mongodb://localhost:27017/superFlights',
    AMQP_URL:
      process.env.AMQP_URL ||
      'amqps://eeqrchlu:los3Irb_hqRXZ_lmJW5syMhEqTNaGi-6@toad.rmq.cloudamqp.com/eeqrchlu',
  };
});
