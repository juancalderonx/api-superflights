import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import EnvConfiguration from '../../config/env/env.config';

@Injectable()
export class TimeoutInterceptor implements NestInterceptor {
  constructor(
    private readonly configEnv: ConfigType<typeof EnvConfiguration>,
  ) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(timeout(Number(this.configEnv.TIMEOUT_REQUEST)));
  }
}
