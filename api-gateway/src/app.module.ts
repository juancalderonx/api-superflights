import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvValidation } from './config';
import EnvConfiguration from './config/env/env.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfiguration],
      isGlobal: true,
      validationSchema: EnvValidation,
      envFilePath: ['.env.development'],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
