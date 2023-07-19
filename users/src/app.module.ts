import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { EnvValidation } from './config';

import EnvConfiguration from './config/env/env.config';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseModule } from './config/database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfiguration],
      isGlobal: true,
      validationSchema: EnvValidation,
      envFilePath: ['.env.development'],
    }),

    DatabaseModule,

    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
