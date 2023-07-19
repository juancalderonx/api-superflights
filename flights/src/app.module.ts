import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FlightModule } from './flight/flight.module';
import { EnvValidation } from './config';
import { DatabaseModule } from './config/database/database.module';
import EnvConfiguration from './config/env/env.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfiguration],
      isGlobal: true,
      validationSchema: EnvValidation,
      envFilePath: ['.env.development'],
    }),

    DatabaseModule,

    FlightModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
