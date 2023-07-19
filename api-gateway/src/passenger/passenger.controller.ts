import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { PassengerDTO } from './dto/passenger.dto';
import { Observable } from 'rxjs';
import { ClientProxySuperFlights } from './../common/proxy/client-proxy';
import { IPassenger } from 'src/common/interfaces/passenger.interface';
import { PassengerMSG } from 'src/common/proxy/constants';

@Controller('passenger')
export class PassengerController {
  constructor(private readonly clientProxy: ClientProxySuperFlights) {}

  private _clientProxyPassenger = this.clientProxy.clientProxyPassengers();

  @Post()
  create(@Body() passengerDTO: PassengerDTO): Observable<IPassenger> {
    return this._clientProxyPassenger.send(PassengerMSG.CREATE, passengerDTO);
  }

  @Get()
  findAll(): Observable<IPassenger[]> {
    return this._clientProxyPassenger.send(PassengerMSG.FIND_ALL, {});
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Observable<IPassenger> {
    return this._clientProxyPassenger.send(PassengerMSG.FIND_ONE, id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() passengerDTO: PassengerDTO,
  ): Observable<IPassenger> {
    return this._clientProxyPassenger.send(PassengerMSG.UPDATE, {
      id,
      passengerDTO,
    });
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): Observable<PassengerDTO> {
    return this._clientProxyPassenger.send(PassengerMSG.DELETE, id);
  }
}