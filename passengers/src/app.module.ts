import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './config/database/database.module';
import { PassengerModule } from './passenger/passenger.module';
import EnvConfiguration from './config/env/env.config';
import { EnvValidation } from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfiguration],
      isGlobal: true,
      validationSchema: EnvValidation,
      envFilePath: ['.env.development'],
    }),

    DatabaseModule,

    PassengerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
