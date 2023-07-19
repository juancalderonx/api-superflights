import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvValidation } from './config';
import { UserModule } from './user/user.module';
import EnvConfiguration from './config/env/env.config';
import { PassengerModule } from './passenger/passenger.module';
import { FlightsModule } from './flights/flights.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfiguration],
      isGlobal: true,
      validationSchema: EnvValidation,
      envFilePath: ['.env.development'],
    }),
    UserModule,
    PassengerModule,
    FlightsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
