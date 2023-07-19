import { Module } from '@nestjs/common';
import EnvConfiguration from '../env/env.config';
import { MongooseModule } from '@nestjs/mongoose';
import { createDatabaseOptions } from './database.provider';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      inject: [EnvConfiguration.KEY],
      useFactory: createDatabaseOptions,
    }),
  ],
  exports: [MongooseModule],
})
export class DatabaseModule {}
