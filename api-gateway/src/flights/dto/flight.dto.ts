import { IsNotEmpty, IsString } from 'class-validator';

export class FlightDTO {
  @IsNotEmpty()
  @IsString()
  pilot: string;

  @IsNotEmpty()
  @IsString()
  airplane: string;

  @IsNotEmpty()
  @IsString()
  destinationCity: string;

  @IsNotEmpty()
  @IsString()
  flightDate: Date;
}
