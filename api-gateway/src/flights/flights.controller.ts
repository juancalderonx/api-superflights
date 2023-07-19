import { Observable, firstValueFrom } from 'rxjs';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { IFlight } from 'src/common/interfaces/flight.interface';
import { FlightMSG, PassengerMSG } from 'src/common/proxy/constants';
import { ClientProxySuperFlights } from './../common/proxy/client-proxy';
import { FlightDTO } from './dto/flight.dto';

@Controller('flights')
export class FlightController {
  constructor(private readonly clientProxy: ClientProxySuperFlights) {}

  private _clientProxyFlight = this.clientProxy.clientProxyFlights();
  private _clientProxyPassenger = this.clientProxy.clientProxyPassengers();

  @Post()
  create(@Body() flightDTO: FlightDTO): Observable<IFlight> {
    return this._clientProxyFlight.send(FlightMSG.CREATE, flightDTO);
  }

  @Get()
  findAll(): Observable<IFlight[]> {
    return this._clientProxyFlight.send(FlightMSG.FIND_ALL, {});
  }

  @Get(':id')
  findOne(@Param('id') id: number): Observable<IFlight> {
    return this._clientProxyFlight.send(FlightMSG.FIND_ONE, id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() flightDTO: FlightDTO,
  ): Observable<IFlight> {
    return this._clientProxyFlight.send(FlightMSG.UPDATE, { id, flightDTO });
  }

  @Delete(':id')
  delete(@Param('id') id: number): Observable<any> {
    return this._clientProxyFlight.send(FlightMSG.DELETE, id);
  }

  @Post(':flightId/passenger/:passengerId')
  async addPassenger(
    @Param('flightId') flightId: number,
    @Param('passengerId') passengerId: number,
  ) {
    const passenger = await firstValueFrom(
      this._clientProxyPassenger.send(PassengerMSG.FIND_ONE, passengerId),
    );

    if (!passenger)
      throw new HttpException('Passenger Not Found', HttpStatus.NOT_FOUND);

    return this._clientProxyFlight.send(FlightMSG.ADD_PASSENGER, {
      flightId,
      passengerId,
    });
  }
}
