import { Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { ConstantsRabbitMQ } from './constants';
import EnvConfiguration from '../../config/env/env.config';

@Injectable()
export class ClientProxySuperFlights {
  constructor(
    private readonly configEnv: ConfigType<typeof EnvConfiguration>,
  ) {}

  clientProxyUsers(): ClientProxy {
    return ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [this.configEnv.AMQP_URL],
        queue: ConstantsRabbitMQ.UserQueue,
      },
    });
  }

  clientProxyPassengers(): ClientProxy {
    return ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [this.configEnv.AMQP_URL],
        queue: ConstantsRabbitMQ.PassengerQueue,
      },
    });
  }

  clientProxyFlights(): ClientProxy {
    return ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [this.configEnv.AMQP_URL],
        queue: ConstantsRabbitMQ.FlightsQueue,
      },
    });
  }
}
