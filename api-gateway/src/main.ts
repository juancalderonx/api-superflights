import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigType } from '@nestjs/config';
import { AllExceptionFilter } from './common/filters/http-exception.filter';
import { TimeoutInterceptor } from './common/interceptors/timeout.interceptor';
import EnvConfiguration from './config/env/env.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configEnv = app.get<ConfigType<typeof EnvConfiguration>>(
    EnvConfiguration.KEY,
  );

  app.setGlobalPrefix('/api/v1');

  //* FILTERS
  app.useGlobalFilters(new AllExceptionFilter());

  //* INTERCEPTORS
  app.useGlobalInterceptors(new TimeoutInterceptor(configEnv));

  await app.listen(configEnv.APP_PORT);

  console.log('RUNNING API GATEWAY IN PORT ' + configEnv.APP_PORT);
}
bootstrap();
