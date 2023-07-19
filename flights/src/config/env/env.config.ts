import { registerAs } from '@nestjs/config';

export default registerAs('EnvConfiguration', () => {
  return {
    URI_MONGODB:
      process.env.URI_MONGODB ||
      'mongodb+srv://juancalderonx:GVoYjsHghrZyNP3w@estebandev.npvt49o.mongodb.net/',
    AMQP_URL:
      process.env.AMQP_URL ||
      'amqps://eeqrchlu:los3Irb_hqRXZ_lmJW5syMhEqTNaGi-6@toad.rmq.cloudamqp.com/eeqrchlu',
  };
});
