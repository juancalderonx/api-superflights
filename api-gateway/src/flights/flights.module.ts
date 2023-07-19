import { Module } from '@nestjs/common';
import { ProxyModule } from 'src/common/proxy/proxy.module';
import { FlightController } from './flights.controller';

@Module({
  imports: [ProxyModule],
  controllers: [FlightController],
  providers: [],
})
export class FlightsModule {}
