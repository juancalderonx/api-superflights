import { ConfigType } from '@nestjs/config';
import { MongooseModuleOptions } from '@nestjs/mongoose';

import EnvConfiguration from '../env/env.config';

export const createDatabaseOptions = async (
  config: ConfigType<typeof EnvConfiguration>,
): Promise<MongooseModuleOptions> => {
  const dbConfig = {
    uri: config.URI_MONGODB,
    retryAttempts: 10,
    retryDelay: 500,
    lazyConnection: false,
  } as MongooseModuleOptions;

  return dbConfig;
};
