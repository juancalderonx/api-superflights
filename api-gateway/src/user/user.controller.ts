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
import { ClientProxy } from '@nestjs/microservices';
import { ClientProxySuperFlights } from 'src/common/proxy/client-proxy';
import { UserDto } from './dto/user.dto';
import { Observable } from 'rxjs';
import { IUser } from 'src/common/interfaces/user.interface';
import { UserMSG } from 'src/common/proxy/constants';

@Controller('users')
export class UserController {
  constructor(private readonly clientProxy: ClientProxySuperFlights) {}

  private _clientProxyUser: ClientProxy = this.clientProxy.clientProxyUsers();

  @Post()
  create(@Body() userDto: UserDto): Observable<IUser> {
    return this._clientProxyUser.send(UserMSG.CREATE, userDto);
  }

  @Get()
  findAll(): Observable<IUser[]> {
    return this._clientProxyUser.send(UserMSG.FIND_ALL, {});
  }

  @Get(':id')
  findOne(@Param('id') id: number): Observable<IUser> {
    return this._clientProxyUser.send(UserMSG.FIND_ONE, id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() userDto: UserDto): Observable<IUser> {
    return this._clientProxyUser.send(UserMSG.UPTADE, { id, userDto });
  }

  @Delete(':id')
  remove(@Param('id') id: number): Observable<IUser> {
    return this._clientProxyUser.send(UserMSG.DELETE, id);
  }
}
